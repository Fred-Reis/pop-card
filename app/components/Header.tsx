import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    width: "100%",
    height: 120,
    backgroundColor: "#2e8dcf",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
});
