/**
 * Format bytes to human readable format
 * @param bytes - Bytes per second
 * @returns Formatted string (e.g., "1.5 MB/s")
 */
export const formatSpeed = (bytes: number): string => {
  if (bytes === 0) return '0 B/s';
  const k = 1024;
  const sizes = ['B/s', 'KB/s', 'MB/s', 'GB/s'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};







