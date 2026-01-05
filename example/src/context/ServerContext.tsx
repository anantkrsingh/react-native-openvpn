import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Server {
  id: string;
  name: string;
  country: string;
  flag: string;
  address: string;
}

export const SERVERS: Server[] = [
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    address: '34.87.96.207',
  },
  {
    id: 'usa',
    name: 'United States',
    country: 'USA',
    flag: '🇺🇸',
    address: '34.182.124.213',
  },
];

const STORAGE_KEY = '@vpn_selected_server';

interface ServerContextType {
  selectedServer: Server;
  setSelectedServer: (server: Server) => Promise<void>;
  servers: Server[];
  isLoading: boolean;
}

const ServerContext = createContext<ServerContextType | undefined>(undefined);

interface ServerProviderProps {
  children: ReactNode;
}

export const ServerProvider: React.FC<ServerProviderProps> = ({ children }) => {
  const [selectedServer, setSelectedServerState] = useState<Server>(SERVERS[0]); // Default to Singapore
  const [isLoading, setIsLoading] = useState(true);

  // Load saved server on mount
  useEffect(() => {
    loadSavedServer();
  }, []);

  const loadSavedServer = async () => {
    try {
      const savedServerId = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedServerId) {
        const server = SERVERS.find(s => s.id === savedServerId);
        if (server) {
          setSelectedServerState(server);
        }
      }
    } catch (error) {
      console.error('Failed to load saved server:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setSelectedServer = async (server: Server) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, server.id);
      setSelectedServerState(server);
    } catch (error) {
      console.error('Failed to save server:', error);
    }
  };

  return (
    <ServerContext.Provider
      value={{
        selectedServer,
        setSelectedServer,
        servers: SERVERS,
        isLoading,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

export const useServer = (): ServerContextType => {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error('useServer must be used within a ServerProvider');
  }
  return context;
};

