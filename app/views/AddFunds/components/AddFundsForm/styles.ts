import { StyleSheet } from "react-native";
import { optional } from "zod";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    marginBottom: 10,
    color: "#3e3e3e",
    textAlign: "center",
  },

  optionalLabel: {
    marginBottom: 0,
    alignSelf: "flex-start",
    color: "#3e3e3e",
    fontSize: 12,
  },

  inputsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },

  dropDownContainer: {
    backgroundColor: "white",
    padding: 16,
    width: "70%",
  },

  dropdown: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingLeft: 20,
  },

  dropDownLabel: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  errorMessage: {
    marginVertical: 3,
    color: "#ec3030",
    textAlign: "center",
  },
});
