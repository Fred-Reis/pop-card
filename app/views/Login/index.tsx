import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { LoginForm } from "./LoginForm";

import logo from "@/assets/logo.png";

import { styles } from "./styles";

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
