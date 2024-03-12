import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const History = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
      <Button title="Click Me" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  message: {
    color: "#3e3e3e",
    fontSize: 25,
    marginBottom: 25,
  },
});
