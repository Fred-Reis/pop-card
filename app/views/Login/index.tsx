import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import { LoginForm } from "./LoginForm";

import { styles } from "./styles";

import logo from "@/assets/logo.png";

export const Login = () => {
  const { navigate } = useNavigation();

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
        <Text style={styles.title}>Login</Text>

        <LoginForm />

        <TouchableOpacity onPress={() => alert("Esqueci minha senha")}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("SignUp" as never)}>
          <Text style={styles.newAccount}>Ainda não tenho uma conta</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
