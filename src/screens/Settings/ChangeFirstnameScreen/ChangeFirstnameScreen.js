import { View } from "react-native";
import { Input, Button } from "native-base";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeFirstnameScreen.form";
import { styles } from "./ChangeFirstnameScreen.styles";

export function ChangeFirstnameScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre"
        variant="unstyled"
        autoFocus
        value={formik.values.firstname}
        onChangeText={(text) => formik.setFieldValue("firstname", text)}
        style={[styles.input, formik.errors.firstname && styles.inputError]}
      />

      <Button style={styles.btn} onPress={formik.handleSubmit} isLoading={formik.isLoading}>
        Cambiar
      </Button>
    </View>
  );
}
