import { View } from "react-native";
import { Input, Button } from "native-base";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";
import { styles } from "./LoginForm.styles";

export function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <View>
      <View style={styles.viewInput}>
        <Input
          placeholder="Correo electronico"
          variant="unstyled"
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          style={[styles.input, formik.errors.email && styles.inputError]}
        />
      </View>
      <Input
        placeholder="Contraseña"
        variant="unstyled"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        style={[styles.input, formik.errors.password && styles.inputError]}
      />
      <Button style={styles.btn} onPress={formik.handleSubmit} isLoading={formik.isSubmitting}>
        ENTRAR
      </Button>
    </View>
  );
}
