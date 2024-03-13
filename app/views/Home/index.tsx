import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Balance } from "../../components/Balance";
import { MainCard } from "../../components/MainCard";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.message}>Seu Limite</Text>
      <Balance value="10.000,00" />
      <MainCard number="0000 0000 0000 ****" />
      {/* <Text style={styles.message}>Home</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  message: {
    color: "#3e3e3e",
    fontSize: 25,
    marginBottom: 25,
  },
});
