import { memo } from "react";
import { Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ServiceProps } from "..";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

interface ItemProps {
  item: ServiceProps;
}

export const ServiceItem = memo(({ item }: ItemProps) => {
  const { navigate, setOptions } = useNavigation();

  function handleNavigate() {
    // navigate(link as never);
    alert(item.link);
  }

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <LinearGradient
        colors={["rgba(48,249,201,0.5)", "rgba(239,144,55,0.8)"]}
        style={styles.gradient}
      >
        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
      </LinearGradient>
    </TouchableOpacity>
  );
});
