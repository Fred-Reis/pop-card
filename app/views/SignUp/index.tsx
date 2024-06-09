import { Button, Text, View } from "react-native";

import { SignUpForm } from "./SignUpForm";

import { styles } from "./styles";

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos lá, é hora de criar a sua conta!</Text>
      <Text style={styles.subTitle}>Queremos te conhecer um pouco mais</Text>

      <SignUpForm />

      {/* <Button title="Click Me" onPress={() => alert("Button Clicked!")} /> */}
    </View>
  );
};
