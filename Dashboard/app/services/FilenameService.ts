/**
 * Filename Service
 * 
 * Provides utility functions for filename manipulation and formatting.
 */

/**
 * Adds a timestamp to a filename in the format: filename_YYYY-MM-DD_HH-MM-SS.ext
 * If the filename has no extension, the timestamp is appended with an underscore.
 * 
 * @param filename - The original filename (with or without extension)
 * @returns The filename with timestamp appended
 * 
 * @example
 * addTimestampToFilename('document.pdf') // Returns 'document_2024-01-15_14-30-45.pdf'
 * addTimestampToFilename('file') // Returns 'file_2024-01-15_14-30-45'
 */
export const addTimestampToFilename = (filename: string): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const timestamp = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  
  // Extract name and extension
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return `${filename}_${timestamp}`;
  }
  
  const nameWithoutExt = filename.substring(0, lastDotIndex);
  const extension = filename.substring(lastDotIndex);
  
  return `${nameWithoutExt}_${timestamp}${extension}`;
};

