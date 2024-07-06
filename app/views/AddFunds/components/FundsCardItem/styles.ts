import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardGradientContainer: {
    padding: 3,
    borderRadius: 10,

    marginBottom: 20,
    minWidth: "100%",
  },

  cardInnerContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },

  textContainer: {
    marginLeft: 15,
    gap: 5,

    justifyContent: "center",
  },

  image: {
    width: 110,
    height: 80,
  },

  chip: {
    height: 15,
    width: 15,
    left: 15,
    top: 15,
  },

  text: {
    fontWeight: "500",
    fontSize: 20,
    color: "#3e3e3e",
    marginBottom: 5,
    textTransform: "capitalize",
  },

  cardNumber: {
    fontWeight: "400",
    fontSize: 18,
    color: "#3e3e3e",
    letterSpacing: 2,
  },
});
