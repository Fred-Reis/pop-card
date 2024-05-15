import { styles } from "./styles";

import { Image, StyleSheet, View, Text } from "react-native";

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
