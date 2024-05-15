import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import logo from "@/assets/logo.png";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <LinearGradient
      colors={["rgba(48,249,201,0.5)", "rgba(239,144,55,0.5)"]}
      style={StyleSheet.absoluteFill}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.message}>Login</Text>

        <LoginForm />
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
