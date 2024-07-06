import { SafeAreaView, StyleSheet, Text } from "react-native";

import { Balance, MainCard, CardList } from "@/components";

import { useUserStore } from "@/store";

import { styles } from "./styles";
export const Home = () => {
  const { user } = useUserStore();

  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <Text style={styles.greating}>Olá {user.name}</Text>
      <Text style={styles.message}>Seu Limite</Text>
      <Balance value={user.balance} />
      <MainCard number={user.main_card_number.slice(-4)} />
      <CardList data={user.cards} />
    </SafeAreaView>
  );
};
