import React from "react";
import { AuthNavigation } from "./stacks";
import { View, Text } from "react-native";
import { marginTop } from "../utils";

function AppNavigation() {
  return (
    <View style={marginTop}>
      <Text>AppNavigation</Text>
    </View>
  );
}

export function HandlerNavigation() {
  const user = null;

  return user ? <AppNavigation /> : <AuthNavigation />;
}
