import { Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Text>AppChat</Text>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
