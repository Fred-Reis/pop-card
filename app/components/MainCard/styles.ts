import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 160,
    marginVertical: 20,
    shadowColor: "#3e3e3e",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  chip: {
    position: "absolute",
    width: 30,
    left: 125,
    top: 15,
  },

  number: {
    position: "absolute",
    bottom: 25,
    left: 110,
    color: "#ededed",
    letterSpacing: 2,
    fontSize: 18,
  },
});
