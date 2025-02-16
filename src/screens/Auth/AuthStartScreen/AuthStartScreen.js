import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../../hooks";
import { styles } from "../../../navigations";

export function AuthStartScreen() {
  const auth = useAuth();

  console.log("auth", auth);

  return (
    <View style={styles.marginTop}>
      <Text style={{ color: "#fff" }}>AuthStartScreen</Text>
    </View>
  );
}
