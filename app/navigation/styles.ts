import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    backgroundColor: "rgba(239,144,55, 1)",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
  },

  shadow: {
    shadowColor: "#3e3e3e",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
