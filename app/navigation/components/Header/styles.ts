import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: "100%",
    height: 120,
    backgroundColor: "rgba(48,249,201,0.7)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    position: "relative",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  iconContainer: {
    position: "absolute",
    left: 10,
    bottom: 10,
    padding: 20,
  },

  icon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
});
