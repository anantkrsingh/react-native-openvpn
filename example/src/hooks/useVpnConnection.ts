import { useEffect, useState } from 'react';
import {
  connect,
  disconnect,
  getCurrentState,
  addOpenVPNStateChangeListener,
  ConnectionState,
} from 'react-native-openvpn';
import {
  USA_VPN_CONFIG,
  SINGAPORE_VPN_CONFIG,
  VPN_NOTIFICATION_CONFIG,
  VPN_IOS_OPTIONS,
} from '../config/vpnConfig';
import type { Server } from '../context/ServerContext';

/**
 * Custom hook for managing VPN connection
 * @returns VPN connection state and handlers
 */
export const useVpnConnection = () => {
  const [connectionState, setConnectionState] = useState<ConnectionState>(
    ConnectionState.DISCONNECTED
  );

  useEffect(() => {
    // Get initial state
    getCurrentState().then((state) => {
      setConnectionState(state);
    });

    // Listen for state changes
    const subscription = addOpenVPNStateChangeListener((event) => {
      const newState = event.state as ConnectionState;
      setConnectionState(newState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleConnect = async (selectedServer: Server) => {
    try {

      await connect({
        address: selectedServer.address ,
        username: "anant",
        password:"anant",
        openVPNConfig: selectedServer.id === 'usa' ? USA_VPN_CONFIG : SINGAPORE_VPN_CONFIG,
        iOSOptions: VPN_IOS_OPTIONS,
        androidOptions: {
          Notification: VPN_NOTIFICATION_CONFIG,
        },
      });
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Disconnect error:', error);
    }
  };

  return {
    connectionState,
    isConnected: connectionState === ConnectionState.CONNECTED,
    isActive:
      connectionState === ConnectionState.CONNECTING ||
      connectionState === ConnectionState.DISCONNECTING,
    connect: handleConnect,
    disconnect: handleDisconnect,
  };
};







