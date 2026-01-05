import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useServer } from '../context/ServerContext';
import type { Server } from '../context/ServerContext';

function VPNServers() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { selectedServer, setSelectedServer, servers } = useServer();

  const handleServerSelect = (server: Server) => {
    setSelectedServer(server);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <View style={styles.backIcon}>
            <View style={styles.backArrow} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Server</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Server List */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>AVAILABLE SERVERS</Text>
        
        {servers.map((server) => (
          <ServerItem
            key={server.id}
            server={server}
            isSelected={selectedServer.id === server.id}
            onSelect={() => handleServerSelect(server)}
          />
        ))}
      </View>
    </View>
  );
}

interface ServerItemProps {
  server: Server;
  isSelected: boolean;
  onSelect: () => void;
}

const ServerItem: React.FC<ServerItemProps> = ({ server, isSelected, onSelect }) => {
  return (
    <Pressable
      style={[styles.serverItem, isSelected && styles.serverItemSelected]}
      onPress={onSelect}
    >
      <View style={styles.serverInfo}>
        <Text style={styles.flag}>{server.flag}</Text>
        <View style={styles.serverDetails}>
          <Text style={styles.serverName}>{server.name}</Text>
          <Text style={styles.serverAddress}>{server.address}</Text>
        </View>
      </View>
      
      {/* Custom Radio Button */}
      <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: 12,
    height: 12,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }, { translateX: 2 }],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 1,
  },
  placeholder: {
    width: 44,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888888',
    letterSpacing: 2,
    marginBottom: 20,
  },
  serverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#F8F8F8',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  serverItemSelected: {
    backgroundColor: '#FAFAFA',
    borderColor: '#000000',
  },
  serverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  flag: {
    fontSize: 32,
  },
  serverDetails: {
    gap: 4,
  },
  serverName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 0.5,
  },
  serverAddress: {
    fontSize: 13,
    color: '#666666',
    fontFamily: 'monospace',
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  radioOuterSelected: {
    borderColor: '#000000',
    borderWidth: 2,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000000',
  },
});

export default VPNServers;
