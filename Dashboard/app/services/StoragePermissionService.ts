import { Platform, PermissionsAndroid } from 'react-native';
import { Strings } from 'utilities/TenantIndex';

/**
 * Android API level 33 (Android 13) - scoped storage introduced, to align with your AndroidManifest.xml, which sets android:maxSdkVersion="32" for the old storage permissions
 * WRITE_EXTERNAL_STORAGE permission no longer required
 */
const ANDROID_API_LEVEL_SCOPED_STORAGE = 33;

/**
 * Requests storage permission on Android devices.
 * For Android API level 33+, storage permission is not required.
 * For older Android versions, requests WRITE_EXTERNAL_STORAGE permission.
 * 
 * @returns Promise<boolean> - true if permission is granted or not needed, false otherwise
 */
export const requestStoragePermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  try {
    const apiLevel = Platform.Version;
    
    if (apiLevel >= ANDROID_API_LEVEL_SCOPED_STORAGE) {
      return true;
    } else {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      if (hasPermission) {
        return true;
      }

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: Strings.common.storagePermission,
          message: Strings.common.storagePermissionRequired,
          buttonNeutral: Strings.common.askMeLater,
          buttonNegative: Strings.common.cancel,
          buttonPositive: Strings.common.ok,
        }
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (error) {
    return false;
  }
};

