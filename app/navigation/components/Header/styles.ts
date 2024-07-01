import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: "100%",
    height: 120,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    position: "relative",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },

  iconContainer: {
    position: "absolute",
    left: 10,
    bottom: 12,
    padding: 20,
  },

  icon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
});
