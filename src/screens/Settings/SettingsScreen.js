import { SafeAreaView } from "react-native";
import { useAuth } from "../../hooks";
import { UserInfo } from "../../components/Settings";

export function SettingsScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView>
      <UserInfo user={user} />
    </SafeAreaView>
  );
}
