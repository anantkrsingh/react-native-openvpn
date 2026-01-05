import { NavigationContainer } from '@react-navigation/native';
import { ServerProvider } from './context/ServerContext';
import { RootNavigator } from './navigation/RootNavigator';

export default function App() {
  return (
    <ServerProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ServerProvider>
  );
}
