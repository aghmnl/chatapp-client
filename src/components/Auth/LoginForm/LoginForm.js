import { View } from "react-native";
import { Input, Button } from "native-base";
import { styles } from "./LoginForm.styles";

export function LoginForm() {
  return (
    <View>
      <View style={styles.viewInput}>
        <Input placeholder="Correo electronico" variant="unstyled" autoCapitalize="none" style={styles.input} />
      </View>
      <Input placeholder="Contraseña" variant="unstyled" secureTextEntry style={styles.input} />
      <Button style={styles.btn}>ENTRAR</Button>
    </View>
  );
}
