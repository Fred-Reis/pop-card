import React, { memo } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const CARDS = [
  { id: "1", name: "Nubank", number: "1234" },
  { id: "2", name: "C6", number: "1234" },
  { id: "3", name: "Inter", number: "1234" },
  { id: "4", name: "Banco Brasil", number: "1234" },
  { id: "5", name: "Sntander", number: "1234" },
];

export const CardList = () => {
  const Item = memo(({ item }: any) => (
    <View style={styles.cardContainer}>
      <Image
        source={require("../assets/card.png")}
        style={styles.image}
        // resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.number}</Text>
      </View>
    </View>
  ));
  return (
    <FlatList
      style={{ marginTop: 30, maxHeight: 200 }}
      horizontal
      data={CARDS}
      renderItem={({ item }) => <Item item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 146,
    height: 135,
    flexDirection: "column",
    padding: 5,
    borderRadius: 10,
    borderColor: "#4facee",
    borderWidth: 2,
    marginRight: 10,
  },
  textContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 90,
  },
  text: {
    // fontFamily: "Alexandria",
    fontWeight: "400",
    fontSize: 14,
    color: "#3e3e3e",
  },
});
