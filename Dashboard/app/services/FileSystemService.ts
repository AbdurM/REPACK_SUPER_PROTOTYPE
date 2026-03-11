import RNFS from 'react-native-fs';

/**
 * File System Service
 * 
 * Provides a centralized interface for all file system operations using react-native-fs.
 * This service abstracts direct RNFS usage for better maintainability and reusability.
 */

// Directory paths
export const getCachesDirectoryPath = (): string => {
  return RNFS.CachesDirectoryPath;
};

export const getDownloadDirectoryPath = (): string => {
  return RNFS.DownloadDirectoryPath;
};

export const getMainBundlePath = (): string | undefined => {
  return RNFS.MainBundlePath;
};

// File existence and stats
export const fileExists = async (filePath: string): Promise<boolean> => {
  return await RNFS.exists(filePath);
};

export const getFileStats = async (filePath: string): Promise<RNFS.ReadDirItem> => {
  return await RNFS.stat(filePath);
};

// File operations
export const copyFile = async (sourcePath: string, destPath: string): Promise<void> => {
  return await RNFS.copyFile(sourcePath, destPath);
};

export const copyFileAssets = async (assetPath: string, destPath: string): Promise<void> => {
  if (RNFS.copyFileAssets) {
    return await RNFS.copyFileAssets(assetPath, destPath);
  }
};

export const readFile = async (filePath: string, encoding: 'utf8' | 'base64' = 'utf8'): Promise<string> => {
  return await RNFS.readFile(filePath, encoding);
};

export const readFileAssets = async (assetPath: string, encoding: 'utf8' | 'base64' = 'utf8'): Promise<string> => {
  return await RNFS.readFileAssets(assetPath, encoding);
};

export const writeFile = async (filePath: string, contents: string, encoding: 'utf8' | 'base64' = 'utf8'): Promise<void> => {
  return await RNFS.writeFile(filePath, contents, encoding);
};

export const deleteFile = async (filePath: string): Promise<void> => {
  return await RNFS.unlink(filePath);
};

// Download operations
export interface DownloadFileOptions {
  fromUrl: string;
  toFile: string;
  headers?: { [key: string]: string };
  background?: boolean;
  discretionary?: boolean;
  cacheable?: boolean;
  progressDivider?: number;
  begin?: (res: { jobId: number; statusCode: number; contentLength: number; headers: { [key: string]: string } }) => void;
  progress?: (res: { jobId: number; bytesWritten: number; totalBytes: number }) => void;
}

export interface DownloadResult {
  jobId: number;
  statusCode: number;
  bytesWritten: number;
}

export const downloadFile = async (options: DownloadFileOptions): Promise<DownloadResult> => {
  const downloadResult = await RNFS.downloadFile(options).promise;
  return downloadResult;
};



