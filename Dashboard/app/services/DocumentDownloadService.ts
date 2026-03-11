import { Platform, Alert, Share } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import { DocumentItem } from '../modules/more/screens/documents/DocumentsModel';
import { fileExists, copyFile } from './FileSystemService';
import { Strings } from 'utilities/TenantIndex';

/**
 * Performs the actual download of a document.
 * On iOS, uses Share API to save to Files/Downloads.
 * On Android, copies the file to the Downloads directory.
 * 
 * @param item - The document item to download
 * @param sourceFilePath - The source file path (for local files)
 * @param downloadPath - The destination download path (Android only)
 * @param filename - The filename for the downloaded file
 */
export const performDownload = async (
  item: DocumentItem,
  sourceFilePath: string | null,
  downloadPath: string,
  filename: string
): Promise<void> => {
  try {
    if (item.isLocal && sourceFilePath) {
      if (Platform.OS === 'ios') {
        // On iOS, use Share API to save to Files/Downloads
        try {
          // Ensure file exists at source path
          const exists = await fileExists(sourceFilePath);
          if (!exists) {
            return;
          }
          // Use Share API with file:// URL
          // The file:// URL format works better with Share API on iOS
          const fileUri = `file://${sourceFilePath}`;
          await Share.share({
            url: fileUri,
            title: filename,
          }, {
            // iOS specific options
            subject: filename,
          });
          // Note: Share API doesn't provide a success callback on iOS
          // The user will see the share sheet and can choose where to save (Files app, Downloads, etc.)
        } catch (shareError: any) {
          // console.error('iOS - Share error:', shareError.message);
        }
      } else {
        // Android: copy to Downloads directory
        await copyFile(sourceFilePath, downloadPath);
      }
      Alert.alert(
        Strings.common.success,
        Strings.common.documentDownloadedSuccessfully,
        [{ text: Strings.common.ok }]
      );
    }
  } catch (error: any) {
    throw error;
  }
};

/**
 * Opens a document file using FileViewer.
 * Shows the open with dialog and app suggestions.
 * 
 * @param filePath - The path to the file to open
 */
export const openDocument = async (filePath: string): Promise<void> => {
  await FileViewer.open(filePath, {
    showOpenWithDialog: true,
    showAppsSuggestions: true,
  });
};

