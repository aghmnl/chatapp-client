import { SafeAreaView, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { styles } from "./AuthStartScreen.styles";
import { assets } from "../../../assets";

export function AuthStartScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screens.auth.loginScreen);
  };

  return (
    <SafeAreaView style={styles.content}>
      <Image source={assets.image.jpg.auth01} style={styles.img} />

      <View>
        <Text style={styles.title}>Te damos la bienvenida a ChatApp</Text>
        <Text style={styles.description}>
          Recomendamos usar este servicio con responsabilidad para disfrutar de la experiencia que proporciona esta app desarrollada con cariño
        </Text>
        <Text style={styles.description}>
          Consulta nuestras Política de privacidad. Pulsa &quot;Aceptar y continuar&quot; para aceptar las Condiciones del servicio
        </Text>

        <Text style={styles.btn} onPress={goToLogin}>
          Aceptar y continuar
        </Text>
      </View>
    </SafeAreaView>
  );
}
