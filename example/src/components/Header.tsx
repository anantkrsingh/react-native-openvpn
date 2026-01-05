import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useServer } from '../context/ServerContext';

interface HeaderProps {
  title?: string;
  onServerPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = 'Blaze VPN',
  onServerPress,
}) => {
  const { selectedServer } = useServer();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Pressable 
        style={styles.serverContainer}
        onPress={onServerPress}
      >
        <Text style={styles.serverText}>Server</Text>
        <Text style={styles.flag}>{selectedServer.flag}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 2,
  },
  serverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'black',
    padding: 10,
  },
  serverText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  flag: {
    fontSize: 20,
  },
});
