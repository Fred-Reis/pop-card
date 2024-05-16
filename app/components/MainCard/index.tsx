import { styles } from "./styles";

import { ImageBackground, Text } from "react-native";

import card from "@/assets/card.png";

interface Props {
  number: string;
}

export function MainCard({ number }: Props) {
  return (
    <ImageBackground source={card} style={styles.card} resizeMode="contain">
      <Text style={styles.number}>{`**** **** **** ${number}`}</Text>
    </ImageBackground>
  );
}
