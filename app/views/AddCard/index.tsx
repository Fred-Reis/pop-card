import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const AddCard = () => {
  return (
    <View style={styles.container}>
      <Text>AddCard</Text>
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
