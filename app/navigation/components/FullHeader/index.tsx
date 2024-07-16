import { Text, View, Image, TouchableOpacity } from "react-native";

import { useUserStore } from "@/store";

import logout from "@/assets/icons/logout.png";
import hamburguer from "@/assets/icons/hamburguer.png";

import { styles } from "./styles";
import { useToasts } from "@/utils/services/toast";

type HeaderProps = {
  title: string;
  navigation: any;
};

export const Header = ({ title, navigation }: HeaderProps) => {
  const { setUser } = useUserStore();

  function handleLogout() {
    setUser(null);
    useToasts({
      type: "warn",
      title: "Logout",
      message: "Você foi desconectado",
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={hamburguer} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={handleLogout}>
        <Image source={logout} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
