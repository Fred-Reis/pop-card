import React from "react";
import { StyleSheet, Text, View } from "react-native";

type BalanceProps = {
  value: string;
};

export const Balance = ({ value }: BalanceProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>R$</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  currency: {
    fontFamily: "Alexandria",
    fontWeight: "400",
    fontSize: 20,
    marginRight: 24,
    lineHeight: 25,
    color: "#3e3e3e",
  },
  value: {
    fontFamily: "Alexandria",
    fontWeight: "400",
    fontSize: 50,
    color: "#3e3e3e",
    lineHeight: 50,
  },
});
