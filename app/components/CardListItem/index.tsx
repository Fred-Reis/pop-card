import { memo } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

import card from "@/assets/default-card.png";
import chip from "@/assets/chip.png";

interface ItemProps {
  item: CardProps;
}

export const CardListItem = memo(({ item }: ItemProps) => (
  <View style={styles.cardContainer}>
    <ImageBackground
      imageStyle={{ tintColor: item.color }}
      source={card}
      style={styles.image}
      resizeMode="contain"
    >
      <Image source={chip} style={styles.chip} resizeMode="contain" />
    </ImageBackground>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.number}</Text>
    </View>
  </View>
));
