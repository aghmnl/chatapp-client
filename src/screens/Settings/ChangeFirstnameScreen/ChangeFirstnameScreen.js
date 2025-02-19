import { View } from "react-native";
import { Input, Button } from "native-base";
import { styles } from "./ChangeFirstnameScreen.styles";

export function ChangeFirstnameScreen() {
  return (
    <View style={styles.content}>
      <Input placeholder="Nombre" variant="unstyled" autoFocus style={styles.input} />
      <Button style={styles.btn}>Cambiar</Button>
    </View>
  );
}
