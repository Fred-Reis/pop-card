import { Text, View, Image, TouchableOpacity } from "react-native";

import { useUserStore } from "@/store";

import hamburguer from "@/assets/icons/hamburguer.png";
import logout from "@/assets/icons/logout.png";
import user from "@/assets/icons/user.png";

import { styles } from "./styles";
import { useToasts } from "@/utils/services/toast";

type HeaderProps = {
  name: string;
};

export const Header = ({ name }: HeaderProps) => {
  const { setUser } = useUserStore();

  function handleLogout() {
    setUser(null);
    useToasts({
      type: "success",
      title: "Logout",
      message: "Você foi desconectado",
    });
  }

  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Image
          source={logout}
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
