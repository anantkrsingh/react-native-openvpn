import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatSpeed } from '../utils/formatSpeed';

interface SpeedDisplayProps {
  downloadSpeed: number;
  uploadSpeed: number;
}

export const SpeedDisplay: React.FC<SpeedDisplayProps> = ({
  downloadSpeed,
  uploadSpeed,
}) => {
  return (
    <View style={styles.speedSection}>
      <View style={styles.speedBox}>
        <Text style={styles.speedLabel}>DOWNLOAD</Text>
        <Text style={styles.speedValue}>{formatSpeed(downloadSpeed)}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.speedBox}>
        <Text style={styles.speedLabel}>UPLOAD</Text>
        <Text style={styles.speedValue}>{formatSpeed(uploadSpeed)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  speedSection: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 40,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },
  speedBox: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#000000',
  },
  speedLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 1,
    marginBottom: 8,
  },
  speedValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 0.5,
  },
});







