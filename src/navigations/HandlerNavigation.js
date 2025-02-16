import React from "react";
import { AuthNavigation } from "./stacks";
import { View, Text } from "react-native";
import { styles } from "../navigations";

function AppNavigation() {
  return (
    <View style={styles.marginTop}>
      <Text>AppNavigation</Text>
    </View>
  );
}

export function HandlerNavigation() {
  const user = null;

  return user ? <AppNavigation /> : <AuthNavigation />;
}
