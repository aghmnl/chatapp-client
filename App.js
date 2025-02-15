import { Text } from "react-native";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Text>AppChat</Text>
    </NativeBaseProvider>
  );
}
