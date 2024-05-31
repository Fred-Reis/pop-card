import { SafeAreaView, StyleSheet, Text } from "react-native";

import { Balance, MainCard, CardList } from "@/components";

import { useUserStore } from "@/store";
import { useCardListStore } from "@/store/backEndDataStore";

import { handleFakeMapUserCards } from "@/utils/fakeApiFunctions";

import { styles } from "./styles";
export const Home = () => {
  const { isLoading, allCardsList } = useCardListStore();
  const { user } = useUserStore();

  if (isLoading) {
    return <Text>...Loading</Text>;
  }

  function getCards() {
    const cards = handleFakeMapUserCards(user.cards, allCardsList);

    return cards;
  }

  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <Text style={styles.greating}>Olá {user.name}</Text>
      <Text style={styles.message}>Seu Limite</Text>
      <Balance value={user.balance} />
      <MainCard number={user.main_card_number.slice(-4)} />
      <CardList data={getCards()} />
    </SafeAreaView>
  );
};
