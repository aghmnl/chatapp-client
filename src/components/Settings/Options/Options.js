import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./Options.styles";

Options.propTypes = {
  logout: PropTypes.func.isRequired,
};

export function Options(props) {
  const { logout } = props;

  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Cambiar foto de perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Cambiar nombre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Cambiar apellidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, styles.itemClose]} onPress={logout}>
        <Text style={styles.textClose}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
