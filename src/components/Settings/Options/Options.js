import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { User } from "../../../api";
import PropTypes from "prop-types";
import { imageExpoFormat } from "../../../utils";
import { styles } from "./Options.styles";

Options.propTypes = {
  accessToken: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const userController = new User();

export function Options(props) {
  const { accessToken, logout, updateUser } = props;

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const file = imageExpoFormat(result.assets[0].uri);
      updateUserData({ avatar: file });
    }
  };

  const updateUserData = async (userData) => {
    try {
      const response = await userController.updateUser(accessToken, userData);
    } catch (error) {
      console.error(error);
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
