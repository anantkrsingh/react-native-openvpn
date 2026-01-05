import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VpnScreen } from '../screens/VpnScreen';
import VPNServers from '../screens/VPNServers';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="VpnHome"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="VpnHome" component={VpnScreen} />
      <Stack.Screen name="VPNServers" component={VPNServers} />
    </Stack.Navigator>
  );
};

