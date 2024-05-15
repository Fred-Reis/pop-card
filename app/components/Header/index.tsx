import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import hamburguer from "@/assets/icons/hamburguer.png";
import user from "@/assets/icons/user.png";

type HeaderProps = {
  name: string;
};

export const Header = ({ name }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={hamburguer}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity>
        <Image
          source={user}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
