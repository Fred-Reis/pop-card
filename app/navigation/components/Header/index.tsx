import { Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import arrow from "@/assets/icons/left-arrow.png";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
        <Image source={arrow} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
