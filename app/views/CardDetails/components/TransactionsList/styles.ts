import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  labelContainer: {
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    borderWidth: 1,
    borderColor: "#3d3d3d",
  },

  label: {
    color: "#3d3d3d",
    fontWeight: "500",
    fontSize: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 4,
    marginBottom: 10,
    color: "#3d3d3d",
    marginTop: 10,
  },

  list: {
    marginTop: 20,
    maxHeight: 350,
    width: "100%",
  },

  separator: {
    height: 1,
    backgroundColor: "#aaaaaa",
    marginVertical: 5,
  },
});
