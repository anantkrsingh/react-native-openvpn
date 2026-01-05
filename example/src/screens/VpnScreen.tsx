import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import { StatusBox } from '../components/StatusBox';
import { SpeedDisplay } from '../components/SpeedDisplay';
import { ConnectButton } from '../components/ConnectButton';
import { useVpnConnection } from '../hooks/useVpnConnection';
import { useSpeedMonitor } from '../hooks/useSpeedMonitor';
import { useServer } from '../context/ServerContext';

export const VpnScreen: React.FC = () => {
  const navigation = useNavigation();
  const { connectionState, isConnected, isActive, connect, disconnect } =
    useVpnConnection();
  const { downloadSpeed, uploadSpeed } = useSpeedMonitor(isConnected);
  const { selectedServer } = useServer();
  const handleButtonPress = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect(selectedServer);
    }
  };

  const handleNavigateToServers = () => {
    navigation.navigate('VPNServers');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <Header onServerPress={handleNavigateToServers} />
        <View style={styles.statusSection}>
          <StatusBox connectionState={connectionState} />
        </View>
        {isConnected && (
          <SpeedDisplay
            downloadSpeed={downloadSpeed}
            uploadSpeed={uploadSpeed}
          />
        )}
        <View style={styles.buttonContainer}>
          <ConnectButton
            isConnected={isConnected}
            isActive={isActive}
            onPress={handleButtonPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  statusSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
});
