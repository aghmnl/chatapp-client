import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStartScreen, LoginScreen, RegisterScreen } from "../../screens/Auth";
import { screens } from "../../utils";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.auth.authStartScreen} component={AuthStartScreen} options={{ headerShown: false }} />
      <Stack.Screen name={screens.auth.loginScreen} component={LoginScreen} options={{ title: "Iniciar sesión" }} />
      <Stack.Screen name={screens.auth.registerScreen} component={RegisterScreen} options={{ title: "Registro" }} />
    </Stack.Navigator>
  );
}
