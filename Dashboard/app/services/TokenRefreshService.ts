/**
 * TokenRefreshService - Single-Flight Token Refresh Mechanism
 *
 * This service ensures that only ONE refresh token request is made at a time,
 * even when multiple API calls fail simultaneously due to an expired access token.
 *
 * Key Features:
 * - Promise-based locking mechanism prevents concurrent refresh requests
 * - All waiting API calls automatically retry after successful refresh
 * - Graceful error handling with automatic logout on refresh failure
 * - Thread-safe implementation for React Native environment
 *
 * Design Pattern: Single-Flight Promise Pattern
 * When a refresh is triggered:
 * 1. First caller creates a Promise and starts the refresh
 * 2. Subsequent callers receive the SAME Promise and wait
 * 3. Once refresh completes, all callers resume with the new token
 * 4. Promise is cleared, allowing future refreshes when needed
 */

import { refreshAuthToken } from './AppAuthService';
import { getData, setData, removeData } from './EncryptedStorageService';
import store from 'store/Store';
import { authActions } from 'modules/auth/store/slice/AuthSlice';
import { accountActions } from 'modules/accounts/store/slice/accountsSlice';
import { appActions } from 'store/slice/AppSlice';
import { moreActions } from 'modules/more/store/slice/moreSlice';
import { contributionsActions } from 'modules/contributions/store/slice/contributionsSlice';
import { reset } from 'utilities/Navigation';
import { LogoutTypes, NavStates } from 'utilities/Constants';
import { LogoutType } from 'utilities/UtilitiesModel';

export interface TokenData {
  accessToken: string;
  accessTokenExpirationDate: string;
  refreshToken: string;
  tokenType: string;
}

/**
 * TokenRefreshService Class
 * Manages token refresh logic with single-flight guarantee
 */
class TokenRefreshService {
  // The in-flight refresh Promise - shared across all concurrent callers
  private refreshPromise: Promise<TokenData | null> | null = null;

  // Lock to prevent clearing the promise during resolution
  private isRefreshing: boolean = false;

  /**
   * Main method to get a valid access token
   * This is the ONLY method that should be called from outside
   *
   * @returns Promise<TokenData | null> - New token data or null if refresh fails
   */
  async getValidToken(): Promise<TokenData | null> {
    // If a refresh is already in progress, return the existing Promise
    // This ensures all concurrent callers wait for the SAME refresh operation
    if (this.refreshPromise !== null) {
      return this.refreshPromise;
    }

    // No refresh in progress - this caller will initiate it
    this.isRefreshing = true;

    // Create the refresh Promise and store it
    // All subsequent callers will receive THIS promise
    this.refreshPromise = this.performTokenRefresh()
      .then(tokenData => {
        return tokenData;
      })
      .catch(() => {
        return null;
      })
      .finally(() => {
        // Clear the promise AFTER all callers have received the result
        // This allows future refreshes when the next token expires
        this.refreshPromise = null;
        this.isRefreshing = false;
      });

    return this.refreshPromise;
  }

  /**
   * Internal method that performs the actual token refresh
   * Should NEVER be called directly - only through getValidToken()
   *
   * @private
   * @returns Promise<TokenData | null>
   */
  private async performTokenRefresh(): Promise<TokenData | null> {
    try {
      // Step 1: Get stored auth data with refresh token
      const loginData = await getData({ key: 'authData' });

      if (!loginData?.refreshToken) {
        await this.handleRefreshFailure();
        return null;
      }

      // Step 2: Call the refresh endpoint
      const result = await refreshAuthToken(loginData.refreshToken);

      if (!result || !result.accessToken) {
        await this.handleRefreshFailure();
        return null;
      }

      // Step 3: Build the new token data
      const newTokenData: TokenData = {
        accessToken: result.accessToken,
        accessTokenExpirationDate: result.accessTokenExpirationDate,
        refreshToken: result.refreshToken || loginData.refreshToken, // Fallback to existing refresh token
        tokenType: 'Bearer',
      };

      // Step 4: Persist the new tokens
      await setData({
        key: 'authData',
        data: { ...loginData, ...newTokenData },
      });

      // Step 5: Update Redux store
      store.dispatch(authActions.setAuthData(newTokenData as any));

      return newTokenData;
    } catch {
      await this.handleRefreshFailure();
      return null;
    }
  }

  /**
   * Handle refresh failure - logout user and clear all data
   * This is now a wrapper that calls logout with 'hard' mode
   *
   * @private
   */
  private async handleRefreshFailure(): Promise<void> {
    await this.logout(LogoutTypes.hard);
  }

  /**
   * Logout method - clears all auth data and navigates to login
   * Used both for manual logout and automatic logout on refresh failure
   *
   * @param logoutType - 'hard' clears storage, 'soft' keeps some data
   */
  async logout(logoutType: LogoutType = LogoutTypes.hard): Promise<void> {
    // Clear any in-flight refresh operations
    this.refreshPromise = null;
    this.isRefreshing = false;

    // Clear stored tokens (hard logout only)
    if (logoutType === LogoutTypes.hard) {
      await removeData({ key: 'authData' });
    }

    // Clear Redux state
    store.dispatch(authActions.clearAuthData());
    store.dispatch(accountActions.clearAccountData());
    store.dispatch(appActions.clearAppData());
    store.dispatch(moreActions.clearMoreData());
    store.dispatch(contributionsActions.clearContributionData());

    // Navigate to auth screen
    reset(NavStates.stackNames.authStack);
  }

  /**
   * Check if a refresh operation is currently in progress
   * Useful for debugging and monitoring
   *
   * @returns boolean
   */
  isRefreshInProgress(): boolean {
    return this.isRefreshing;
  }

  /**
   * Force clear the refresh promise
   * Should only be used in exceptional cases (e.g., testing)
   *
   * @internal
   */
  clearRefreshState(): void {
    this.refreshPromise = null;
    this.isRefreshing = false;
  }
}

// Export a singleton instance
// This ensures the SAME instance is used across the entire app
// Critical for the single-flight mechanism to work correctly
export const tokenRefreshService = new TokenRefreshService();

// Also export the class for testing purposes
export default TokenRefreshService;
