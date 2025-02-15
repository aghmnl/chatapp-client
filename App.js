import { Text, SafeAreaView } from "react-native";
import { NativeBaseProvider, Button } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Text>AppChat</Text>
        <Button>Click me</Button>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
