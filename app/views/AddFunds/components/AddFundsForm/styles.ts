import { StyleSheet } from "react-native";

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

  inputsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    // backgroundColor: "#ddd",
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
    // backgroundColor: "#ddd",
  },
  icon: {
    marginRight: 5,
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
});
