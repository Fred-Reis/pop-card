import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
