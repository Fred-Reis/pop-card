import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    marginLeft: 20,

    shadowColor: "#3e3e3e",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },

  icon: {
    tintColor: "#fff",
    // padding: 20,
    // borderRadius: 10,
    // maxHeight: "60%",
  },
});
