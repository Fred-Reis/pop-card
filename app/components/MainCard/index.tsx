import { styles } from "./styles";

import { Image, ImageBackground, Text } from "react-native";

import card from "@/assets/card.png";
import chip from "@/assets/chip.png";

interface Props {
  number: string;
  color?: string;
}

export function MainCard({ number, color }: Props) {
  return (
    <ImageBackground
      source={card}
      style={styles.card}
      imageStyle={{ tintColor: color }}
      resizeMode="contain"
    >
      {color && (
        <Image source={chip} style={styles.chip} resizeMode="contain" />
      )}
      <Text style={styles.number}>{`**** **** **** ${number}`}</Text>
    </ImageBackground>
  );
}
