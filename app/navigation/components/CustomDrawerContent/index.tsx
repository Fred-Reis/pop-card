import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image } from "react-native";

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        style={{
          marginBottom: 0,
        }}
        label="Sair"
        icon={() => (
          <Image
            source={require("../../../assets/icons/logout.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: "rgba(48,249,201,0.8)",
            }}
          />
        )}
        onPress={() => alert("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
}
