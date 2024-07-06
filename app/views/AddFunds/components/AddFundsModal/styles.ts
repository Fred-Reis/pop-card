import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    minWidth: "100%",
    padding: 20,
    paddingTop: 0,
    position: "relative",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3d3d3d",
    textAlign: "center",
  },

  closeButtonWrapper: {
    position: "absolute",
    right: 20,
    top: 0,
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
    marginHorizontal: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#3d3d3d",
    margin: 15,
  },
});
