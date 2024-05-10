import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  message: string;
  action: () => void;
  type?: "default" | "outline";
}

export const CusttomButton = ({
  message,
  action,
  type = "default",
}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, styles[type]]}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    width: 200,
    borderColor: "#fff",
    borderWidth: 2,
  },

  default: {
    backgroundColor: 'rgb(48,249,201)"',
  },

  message: {
    fontSize: 22,
    color: "#3e3e3e",
  },
});
