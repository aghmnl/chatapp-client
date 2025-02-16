import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatsNavigation, GroupsNavigation, SettingsNavigation } from "../stacks";
import { screens } from "../../utils";
import { styles } from "./BottomTabNavigation.styles";

const Tab = createBottomTabNavigator();

export function ButtomTabNavigation() {}

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#0891b2",
      })}
    >
      <Tab.Screen name={screens.tab.chats.root} component={ChatsNavigation} options={{ title: "Chats" }} />
      <Tab.Screen name={screens.tab.groups.root} component={GroupsNavigation} options={{ title: "Grupos" }} />
      <Tab.Screen name={screens.tab.settings.root} component={SettingsNavigation} options={{ title: "Ajustes" }} />
    </Tab.Navigator>
  );
}
