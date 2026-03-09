import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Observable,
} from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { SetContextLink } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';
import {
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
} from '@apollo/client/errors';
import Config from 'react-native-config';
import { Strings, UtilitiesFunctions } from 'utilities/TenantIndex';
import { CustomToastView } from 'components/customtoast/CustomToastView';
import { ErrorModel } from 'services/ServicesModels';
import { tokenRefreshService } from 'services/TokenRefreshService';
import { setAxiosToken } from 'services/RequestService';
import { ErrorMessages, LogoutTypes } from 'utilities/Constants';
import { LogoutType } from 'utilities/UtilitiesModel';

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const apolloHttpLink = new HttpLink({
  uri: `${Config.APOLLOURL}/graphql`,
  credentials: 'same-origin',
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([apolloHttpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
    mutate: {
      fetchPolicy: 'network-only',
    },
  },
});

// apolloClient.clearStore(); // to clear the server side cache

export function setGraphqlHeaders(token: string) {
  const authLink = new SetContextLink((prevContext, _request) => {
    const { headers } = prevContext;
    return UtilitiesFunctions.getGraphqlHeader(token, headers);
  });

  const combinedLink = ApolloLink.from([authLink, errorLink, apolloHttpLink]);

  apolloClient.setLink(combinedLink);
}

/**
 * The function `errorHandler` handles errors from axios and apollo
 */
export function errorHandler(error: any): ErrorModel {
  const { message, cause, name, response } = error;
  const { errors } = cause?.result || cause?.extensions || [];

  // Determine the error cause message
  let causeMessage: string;
  if (errors?.length > 0) {
    causeMessage = errors[0].message;
  } else if (response?.data?.message) {
    causeMessage = response.data.message;
  } else {
    causeMessage = message;
  }

  let errorData: ErrorModel = {
    message: message || Strings.commonerror.errormessage,
    type: 'NETWORK_ERROR',
    status: 0,
    name: name || 'unknown',
    cause: causeMessage,
  };
  if (ErrorMessages.network.includes(message)) {
    errorData.type = 'NO_INTERNET';
    errorData.status = 0;
    CustomToastView({
      keyValue: 'connectionError',
      msg: Strings.connectionerror.errormessage,
    });
  } else if (ErrorMessages.refreshToken.includes(message)) {
    errorData.type = 'REFRESH_TOKEN_ERROR';
    errorData.status = 0;
    CustomToastView({
      keyValue: 'sessionError',
      msg: Strings.sessionError.errormessage,
    });
  } else if (ErrorMessages.noData.includes(message)) {
    errorData.type = 'NO_DATA';
    errorData.status = 0;
  } else {
    errorData.type =
      error.name === 'ApolloError' ? 'GRAPHQL_ERROR' : 'SERVER_ERROR';
    errorData.status = cause?.statusCode || cause?.extensions?.errorCode || 500;
    CustomToastView({
      keyValue: 'commonError',
      msg: Strings.commonerror.errormessage,
    });
  }
  return errorData;
}

/**
 * Apollo ErrorLink for handling errors using the new Apollo Client API
 * Uses TokenRefreshService for single-flight refresh mechanism
 *
 * Flow:
 * 1. Detect error type (GraphQL, Protocol, or Network)
 * 2. Check for UNAUTHENTICATED errors in GraphQL/Protocol errors
 * 3. Create an Observable to handle async refresh
 * 4. Call TokenRefreshService.getValidToken() - waits if refresh in progress
 * 5. Update operation headers with new token
 * 6. Update both GraphQL and Axios headers
 * 7. Retry the failed GraphQL operation
 * 8. On failure, TokenRefreshService handles logout automatically
 */
const errorLink = new ErrorLink(({ error, operation, forward }) => {
  // Handle GraphQL errors (errors in the GraphQL response)
  if (CombinedGraphQLErrors.is(error)) {
    // Check each GraphQL error for UNAUTHENTICATED
    for (const err of error.errors) {
      const _errorTextCode = err?.extensions?.code || null;
      const _errorCode = err?.extensions?.response?.status || null;
      const _errorMessage = err?.extensions?.response?.statusText || null;

      if (
        _errorCode === 401 ||
        _errorMessage === ErrorMessages.token[1] ||
        _errorTextCode === ErrorMessages.token[2]
      ) {
        // Return an Observable to handle the async token refresh
        return new Observable(observer => {
          tokenRefreshService
            .getValidToken()
            .then(newToken => {
              if (newToken?.accessToken) {
                // Get the current operation headers
                const oldHeaders = operation.getContext().headers;

                // Update the operation context with new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    // jwt: newToken.accessToken,
                    authorization: `Bearer ${newToken.accessToken}`,
                  },
                });

                // Update both GraphQL and Axios default headers
                setGraphqlHeaders(newToken.accessToken);
                setAxiosToken(newToken.accessToken);

                // Retry the failed GraphQL operation
                forward(operation).subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                });
              } else {
                // Token refresh failed - TokenRefreshService already handled logout
                observer.error(new Error(ErrorMessages.refreshToken[0]));
              }
            })
            .catch(refreshError => {
              // Exception during refresh - TokenRefreshService already handled logout
              observer.error(new Error(ErrorMessages.refreshToken[0]));
            });
        });
      }
    }
  }

  // Handle Protocol errors (errors in the HTTP protocol)
  else if (CombinedProtocolErrors.is(error)) {
  }
  // Handle Network errors (network failures, server down, etc.)

});
/**
 * Logout function - delegates to TokenRefreshService
 * This maintains backward compatibility with existing code
 *
 * @param logoutType - 'hard' clears all data, 'soft' preserves some data
 * @deprecated Use tokenRefreshService.logout() directly for new code
 */
export const logOut = (logoutType: LogoutType = LogoutTypes.hard) => {
  tokenRefreshService.logout(logoutType);
};

/**
 * Refresh token function - delegates to TokenRefreshService
 * This maintains backward compatibility with existing code
 *
 * @deprecated Use tokenRefreshService.getValidToken() directly for new code
 */
export const refreshTokenFromAuth = async () => {
  const tokenData = await tokenRefreshService.getValidToken();
  return tokenData;
};

// Create a logging link
// const logLink = new ApolloLink((operation, forward) => {
// console.log(`[GraphQL Request - ${operation.operationName}]`, {
//   operationName: operation.operationName,
//   variables: operation.variables,
//   headers: operation.getContext(), // Log the headers
//   query: operation.query.loc && operation.query.loc.source.body, // Log the query string
// });

// return forward(operation).map(response => {
// console.log(
//   `[Apollo Response - ${operation.operationName}]`,
//   response
// );
// return response;
// });
// });

export { apolloClient /*hygraphClient*/ };
