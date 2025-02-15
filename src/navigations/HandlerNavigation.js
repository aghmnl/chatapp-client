import React from "react";
import { View, Text } from "react-native";

function AppNavigation() {
  return (
    <View>
      <Text>AppNavigation</Text>
    </View>
  );
}

function AuthNavigation() {
  return (
    <View>
      <Text>AuthNavigation</Text>
    </View>
  );
}

export function HandlerNavigation() {
  const user = null;

  return user ? <AppNavigation /> : <AuthNavigation />;
}
