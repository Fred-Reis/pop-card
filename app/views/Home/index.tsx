import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import { Balance, MainCard, CardList } from "@/components";

import { styles } from "./styles";
import { useCardListStore } from "@/store/backEndDataStore";
export const Home = () => {
  const { isLoading, allCardsList } = useCardListStore();

  if (isLoading) {
    return <Text>...Loading</Text>;
  }

  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <ScrollView>
        <Text style={styles.message}>Seu Limite</Text>
        <Balance value="10.000,00" />
        <MainCard number="0000" />
        <CardList data={allCardsList} />
      </ScrollView>
    </SafeAreaView>
  );
};
