import {Alert} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import { Strings } from 'utilities/TenantIndex';
import {Constants} from 'utilities/Constants';

/**
 * The function `enableBiometricAuth` checks for biometric sensor availability and returns true if
 * available, false if not supported or if there are no enrolled biometrics.
 * @returns The `enableBiometricAuth` function returns a Promise that resolves to a boolean value. It
 * returns `true` if biometric authentication is available and supported (TouchID, FaceID, or
 * Biometrics), `false` if no biometric data is enrolled, and `false` if biometrics are not supported
 * or an error occurs during the process.
 */
export const enableBiometricAuth = async (): Promise<boolean> => {
  try {
    const rnBiometrics = new ReactNativeBiometrics();
    const resultObject = await rnBiometrics.isSensorAvailable();
    const {available, biometryType, error} = resultObject;
    if (
      available &&
      (biometryType === BiometryTypes.TouchID ||
        biometryType === BiometryTypes.FaceID ||
        biometryType === BiometryTypes.Biometrics)
    ) {
      return true;
    } else if (error === Constants.biometricAutenticationErrors.noneEnrolled) {
      Alert.alert(Strings.messages.pleaseEnrollBiometricAuthentication);
      return false;
    } else {
      Alert.alert(Strings.messages.biometricsNotSupported);
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

/**
 * The function `verifyBiometricAuth` checks if biometric authentication is enabled and prompts the
 * user for authentication using React Native Biometrics.
 * @returns The function `verifyBiometricAuth` returns a Promise that resolves to a string value. The
 * possible return values are 'SUCCESS' if the biometric authentication is successful, 'FAILURE' if the
 * authentication fails or is not enabled, and 'SYSTEMCANCEL' if there is an error during the
 * authentication process.
 */
export const verifyBiometricAuth = async (): Promise<string> => {
  const isBiometricAuthEnabled = await enableBiometricAuth;
  if (await isBiometricAuthEnabled()) {
    try {
      const rnBiometrics = new ReactNativeBiometrics({
        allowDeviceCredentials: true,
      });
      const feedback = await rnBiometrics.simplePrompt({
        promptMessage: Strings.messages.autenticateMsg,
      });
      // console.log(feedback);
      if (feedback.success) {
        // console.log("Success", feedback.success);
        return 'SUCCESS';
      } else {
        // console.error("Error:", feedback.error);
        return 'FAILURE';
      }
    } catch (error) {
      // console.error("[handleBiometricAuth] Error:", error);
      return 'SYSTEMCANCEL';
    }
  } else {
    return 'NOTENABLED';
  }
};
