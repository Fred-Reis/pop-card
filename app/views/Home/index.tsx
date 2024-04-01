import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Balance } from "@/components/Balance";
import { MainCard } from "@/components/MainCard";
import { CardList } from "@/components/CardList";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.message}>Seu Limite</Text>
      <Balance value="10.000,00" />
      <MainCard number="0000" />
      <CardList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },

  message: {
    color: "#3e3e3e",
    fontSize: 25,
    marginBottom: 25,
    marginTop: 10,
    textAlign: "center",
  },
});
