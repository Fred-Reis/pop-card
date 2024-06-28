import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    width: "100%",
    padding: 20,
    paddingTop: 0,
  },

  headerTitle: {
    fontSize: 18,
    color: "#3d3d3d",
  },

  closeButton: {
    fontSize: 24,
    fontWeight: "bold",
    transform: [{ rotate: "45deg" }],
    lineHeight: 22,
    color: "#3d3d3d",
  },

  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#3d3d3d",
    margin: 15,
  },
});
