import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  card: {
    position: "relative",
    height: 200,
  },

  title: {
    color: "#3e3e3e",
    fontSize: 35,
    marginBottom: 20,
    fontWeight: "bold",
  },

  number: {
    position: "absolute",
    bottom: 25,
    left: 80,
    color: "#3d3d3d",
    letterSpacing: 2,
    fontSize: 20,
    // marginBottom: 25,
    // alignSelf: "center",
  },
});
