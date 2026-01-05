import { ConnectionState } from 'react-native-openvpn';

/**
 * Get human-readable status text from connection state
 * @param state - Connection state
 * @returns Status text string
 */
export const getStatusText = (state: ConnectionState): string => {
  switch (state) {
    case ConnectionState.CONNECTED:
      return 'CONNECTED';
    case ConnectionState.CONNECTING:
      return 'CONNECTING';
    case ConnectionState.DISCONNECTING:
      return 'DISCONNECTING';
    case ConnectionState.DISCONNECTED:
      return 'DISCONNECTED';
    case ConnectionState.ERROR:
      return 'ERROR';
    default:
      return 'UNKNOWN';
  }
};








