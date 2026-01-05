import { useEffect, useState, useRef } from 'react';
import { ConnectionState } from 'react-native-openvpn';

/**
 * Custom hook for monitoring VPN speed
 * @param isConnected - Whether VPN is connected
 * @returns Download and upload speeds
 */
export const useSpeedMonitor = (isConnected: boolean) => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const speedUpdateInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Simulate speed updates when connected
    if (isConnected) {
      speedUpdateInterval.current = setInterval(() => {
        // Simulate realistic speed values (will be replaced with real data)
        setDownloadSpeed(Math.random() * 5000000 + 1000000); // 1-6 MB/s
        setUploadSpeed(Math.random() * 2000000 + 500000); // 0.5-2.5 MB/s
      }, 1000);
    } else {
      if (speedUpdateInterval.current) {
        clearInterval(speedUpdateInterval.current);
        speedUpdateInterval.current = null;
      }
      setDownloadSpeed(0);
      setUploadSpeed(0);
    }

    return () => {
      if (speedUpdateInterval.current) {
        clearInterval(speedUpdateInterval.current);
      }
    };
  }, [isConnected]);

  return { downloadSpeed, uploadSpeed };
};







