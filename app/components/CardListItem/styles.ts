import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    height: 145,
    flexDirection: "column",
    marginLeft: 20,
  },

  textContainer: {
    padding: 5,
    justifyContent: "center",
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
    fontWeight: "400",
    fontSize: 16,
    color: "#3e3e3e",
  },
});
