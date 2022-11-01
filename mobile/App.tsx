import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { NativeBaseProvider, VStack } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor="black" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </VStack>
    </NativeBaseProvider>
  );
}

