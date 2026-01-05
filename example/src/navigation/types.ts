import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  VpnHome: undefined;
  VPNServers: undefined;
};

export type VpnHomeScreenProps = NativeStackScreenProps<RootStackParamList, 'VpnHome'>;
export type VPNServersScreenProps = NativeStackScreenProps<RootStackParamList, 'VPNServers'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

