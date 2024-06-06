import { Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import arrow from "@/assets/icons/left-arrow.png";

type HeaderProps = {
  title: string;
  color?: string;
};

export const Header = ({ title, color }: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color ?? "rgba(48,249,201,0.7)" },
      ]}
    >
      <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
        <Image source={arrow} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
