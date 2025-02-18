import { SafeAreaView, Text } from "react-native";
import { Button } from "native-base";
import { useAuth } from "../../hooks";

export function SettingsScreen() {
  const { logout } = useAuth();

  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button onPress={logout}>Cerrar sesión</Button>
    </SafeAreaView>
  );
}
