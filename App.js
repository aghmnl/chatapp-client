import { NativeBaseProvider, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <View marginTop={50}>
          <HandlerNavigation />
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
