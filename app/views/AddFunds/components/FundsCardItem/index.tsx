import { memo } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MaskedText } from "react-native-mask-text";

import { CardProps } from "@/types/cardDTO";

import { styles } from "./styles";

import card from "@/assets/default-card.png";
import chip from "@/assets/chip.png";
import { LinearGradient } from "expo-linear-gradient";

interface ItemProps {
  item: CardProps;
  callback?: (x: any) => void;
}

export const FundsListItem = memo(({ item, callback }: ItemProps) => (
  <TouchableOpacity onPress={() => callback(item)}>
    <LinearGradient
      colors={["rgba(48,249,201,0.8)", "rgba(239,144,55,0.8)"]}
      style={styles.cardGradientContainer}
    >
      <View style={styles.cardInnerContainer}>
        <ImageBackground
          imageStyle={{ tintColor: item?.color || "#3d3d3d" }}
          source={card}
          style={styles.image}
          resizeMode="contain"
        >
          <Image source={chip} style={styles.chip} resizeMode="contain" />
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <MaskedText style={styles.cardNumber} mask="**** **** **** 9999">
            {item.number}
          </MaskedText>
        </View>
      </View>
    </LinearGradient>
  </TouchableOpacity>
));
