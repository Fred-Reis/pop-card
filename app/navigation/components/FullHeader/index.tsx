import { Text, View, Image, TouchableOpacity } from "react-native";

import { useUserStore } from "@/store";

import hamburguer from "@/assets/icons/hamburguer.png";
import logout from "@/assets/icons/logout.png";
import user from "@/assets/icons/user.png";

import { styles } from "./styles";
import { useToasts } from "@/utils/services/toast";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
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
      <TouchableOpacity>
        <Image source={user} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={handleLogout}>
        <Image source={logout} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
