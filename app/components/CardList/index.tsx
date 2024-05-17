import { memo } from "react";
import { View, FlatList, Text, Image } from "react-native";

import card from "@/assets/default-card.png";
import chip from "@/assets/chip.png";

import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

interface Props {
  data: CardProps[];
}

export const CardList = ({ data }: Props) => {
  const Item = memo(({ item }: any) => (
    <View style={styles.cardContainer}>
      <Image
        source={card}
        style={[styles.image, { tintColor: item.color }]}
        resizeMode="contain"
      />
      <Image source={chip} style={styles.chip} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.number}</Text>
      </View>
    </View>
  ));
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate={"fast"}
      snapToInterval={160}
      bounces={false}
      style={{
        marginTop: 30,
        maxHeight: 200,
      }}
      contentContainerStyle={{
        paddingRight: 20,
        // gap: 10,
      }}
    />
  );
};
