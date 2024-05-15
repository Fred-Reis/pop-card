import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  animation: {
    width: 550,
    height: 2500,
    backgroundColor: "transparent",

    marginTop: 200,
  },

  message: {
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
    bottom: 25,
    marginHorizontal: 25,
    color: "#fff",
  },
});
