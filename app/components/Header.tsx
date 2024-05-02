import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

type HeaderProps = {
  name: string;
};

export const Header = ({ name }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/hamburguer.png")}
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
          source={require("../assets/icons/user.png")}
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    width: "100%",
    height: 120,
    backgroundColor: "rgba(48,249,201,0.7)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 25,
  },
});
