import React, { memo } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const CARDS = [
  { id: "1", name: "Nubank", number: "1234", color: "#993399" },
  { id: "2", name: "C6", number: "1234", color: "#1e1e1e" },
  { id: "3", name: "Inter", number: "1234", color: "#FF7B00" },
  { id: "4", name: "Banco Brasil", number: "1234", color: "#FCFC34" },
  { id: "5", name: "Santander", number: "1234", color: "#DC121A" },
  { id: "6", name: "Neom", number: "1234", color: "#0ACDEB" },
];

export const CardList = () => {
  const Item = memo(({ item }: any) => (
    <View style={styles.cardContainer}>
      <Image
        source={require("../assets/default-card.png")}
        style={[styles.image, { tintColor: item.color }]}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/chip.png")}
        style={styles.chip}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.number}</Text>
      </View>
    </View>
  ));
  return (
    <FlatList
      horizontal
      data={CARDS}
      renderItem={({ item }) => <Item item={item} />}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate={"fast"}
      snapToInterval={160}
      bounces={false}
      style={{
        marginTop: 30,
        maxHeight: 200,
      }}
      contentContainerStyle={{
        paddingRight: 20,
        // gap: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // width: 150,
    // height: 135,
    flexDirection: "column",
    // padding: 5,
    // borderRadius: 10,
    // backgroundColor: "#4facee",
    // borderWidth: 2,
    marginLeft: 20,
    // flex: 1,
  },
  textContainer: {
    padding: 5,
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  image: {
    width: 140,
    height: 90,
    position: "relative",
  },
  chip: {
    position: "absolute",
    width: 20,
    left: 20,
  },
  text: {
    // fontFamily: "Alexandria",
    fontWeight: "400",
    fontSize: 16,
    color: "#3e3e3e",
  },
});
