import { View } from "react-native";
import { Input, Button } from "native-base";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  return (
    <View>
      <View style={styles.viewInput}>
        <Input placeholder="Correo electronico" variant="unstyled" autoCapitalize="none" style={styles.input} />
      </View>
      <Input placeholder="Contraseña" variant="unstyled" secureTextEntry style={styles.input} />
      <Button style={styles.btn}>CREAR CUENTA</Button>
    </View>
  );
}
