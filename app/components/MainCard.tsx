import React from "react";
import { ImageBackground, Image, StyleSheet, View, Text } from "react-native";

import card from "@/assets/card.png";

interface Props {
  number: string;
}

export function MainCard({ number }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Cartão</Text>
      <Image source={card} style={styles.card} resizeMode="contain" />
      <Text style={styles.number}>{`**** **** **** ${number}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  card: {
    position: "relative",
  },

  title: {
    color: "#3e3e3e",
    fontSize: 35,
    marginBottom: 14,
    fontWeight: "bold",
  },

  number: {
    position: "absolute",
    bottom: 25,
    left: 40,
    color: "#3e3e3e",
    letterSpacing: 2,
    fontSize: 20,
    marginBottom: 25,
    alignSelf: "center",
  },
});
