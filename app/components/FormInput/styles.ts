import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    padding: 3,
    paddingHorizontal: 10,
  },

  input: {
    fontSize: 18,
    padding: 10,
    color: "#3e3e3e",
    backgroundColor: "transparent",
    letterSpacing: 1,
  },

  icon: {
    position: "absolute",
    right: 20,
    top: 10,
    tintColor: "#3e3e3e",
    width: 25,
    height: 25,
  },

  errorMessage: {
    marginVertical: 3,
    color: "#ec3030",
    textAlign: "center",
  },
});
