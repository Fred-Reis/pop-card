import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    marginLeft: 25,
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 4,
    marginTop: 10,
    color: "#3d3d3d",
  },

  list: {
    marginTop: 20,
    maxHeight: 200,
  },

  empty: {
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    color: "#3d3d3d",
  },

  emptyMessage: {
    color: "#3d3d3d",
    fontSize: 20,
    fontWeight: "500",
  },

  addCardButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
    marginLeft: 10,
  },
});
