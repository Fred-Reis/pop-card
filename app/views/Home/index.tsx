import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import { Balance, MainCard, CardList } from "@/components";

import { styles } from "./styles";

const CARDS = [
  { id: "1", name: "Nubank", number: "1234", color: "#993399" },
  { id: "2", name: "C6", number: "1234", color: "#1e1e1e" },
  { id: "3", name: "Inter", number: "1234", color: "#FF7B00" },
  { id: "4", name: "Banco Brasil", number: "1234", color: "#FCFC34" },
  { id: "5", name: "Santander", number: "1234", color: "#DC121A" },
  { id: "6", name: "Neom", number: "1234", color: "#0ACDEB" },
];

export const Home = () => {
  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <ScrollView>
        <Text style={styles.message}>Seu Limite</Text>
        <Balance value="10.000,00" />
        <MainCard number="0000" />
        <CardList data={CARDS} />
      </ScrollView>
    </SafeAreaView>
  );
};
