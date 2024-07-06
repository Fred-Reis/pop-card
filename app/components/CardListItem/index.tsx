import { memo } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useTransactionsStore } from "@/store";
import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

import card from "@/assets/default-card.png";
import chip from "@/assets/chip.png";

interface ItemProps {
  item: CardProps;
}

export const CardListItem = memo(({ item }: ItemProps) => {
  const { navigate, setOptions } = useNavigation();
  const { trasactions } = useTransactionsStore();

  function handleNavigate() {
    // !TODO
    //@ts-ignore
    navigate("CardDetails" as never, {
      item,
      transactions: getTransactionsByCardId(),
    });
  }

  function getTransactionsByCardId() {
    const transactionsByCardId = trasactions.filter(
      (transaction) => transaction.card_id === item.id
    );
    return transactionsByCardId;
  }

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.cardContainer}>
      <ImageBackground
        imageStyle={{ tintColor: item?.color || "#3d3d3d" }}
        source={card}
        style={styles.image}
        resizeMode="contain"
      >
        <Image source={chip} style={styles.chip} resizeMode="contain" />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.nick_name}</Text>
        <Text style={styles.text}>{item.number.slice(-4)}</Text>
      </View>
    </TouchableOpacity>
  );
});
