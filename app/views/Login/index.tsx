import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { CusttomButton } from "@/components/Button";

import logo from "@/assets/logo.png";

export const Login = () => {
  const { navigate } = useNavigation();

  return (
    <LinearGradient
      colors={["rgba(48,249,201,0.5)", "rgba(239,144,55,0.5)"]}
      style={StyleSheet.absoluteFill}
    >
      <KeyboardAvoidingView style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.message}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="account"
          maxLength={6}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.label}>Número da conta</Text>

        <TextInput
          style={styles.input}
          placeholder="password "
          maxLength={6}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.label}>Senha</Text>

        <CusttomButton message="Login" action={() => navigate("TabHome")} />
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#fff",
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginBottom: 3,
    width: 200,
    textAlign: "center",
    color: "#3e3e3e",
  },

  message: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 25,
    textAlign: "center",
  },

  label: {
    marginBottom: 10,
    color: "#3e3e3e",
  },

  logo: {
    height: 230,
    marginBottom: 30,
  },
});
