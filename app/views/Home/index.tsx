import React, { useRef } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Balance } from "@/components/Balance";
import { MainCard } from "@/components/MainCard";
import { CardList } from "@/components/CardList";

export const Home = () => {
  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <ScrollView>
        <Text style={styles.message}>Seu Limite</Text>
        <Balance value="10.000,00" />
        <MainCard number="0000" />
        <CardList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
  },

  message: {
    color: "#3e3e3e",
    fontSize: 25,
    marginBottom: 25,
    marginTop: 10,
    textAlign: "center",
  },
});
