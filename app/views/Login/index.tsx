import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { CusttomButton } from "@/components/Button";

import logo from "@/assets/logo.png";

export const Login = () => {
  return (
    <LinearGradient
      colors={["rgba(48,249,201,0.5)", "rgba(239,144,55,0.5)"]}
      style={[StyleSheet.absoluteFill, styles.container]}
    >
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.message}>Login</Text>
      <CusttomButton message="Login" action={() => {}} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  message: {
    fontSize: 25,
    color: "#3e3e3e",
    marginBottom: 25,
    marginTop: 10,
    textAlign: "center",
  },

  logo: {
    height: 200,
  },
});
