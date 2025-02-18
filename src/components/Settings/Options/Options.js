import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PropTypes from "prop-types";
import { styles } from "./Options.styles";

Options.propTypes = {
  logout: PropTypes.func.isRequired,
};

export function Options(props) {
  const { logout } = props;

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.item} onPress={openGallery}>
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
