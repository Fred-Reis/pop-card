import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#dddddd",

    padding: 25,
  },

  title: {
    color: "#3e3e3e",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 25,
  },

  subTitle: {
    color: "#3e3e3e",
    fontSize: 16,

    marginBottom: 15,
  },

  buttonContainer: {
    alignSelf: "center",
    marginVertical: 20,
  },

  dataWrapper: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,

    flexDirection: "row",
  },

  dataMessage: {
    textTransform: "capitalize",
    color: "#3e3e3e",
    fontSize: 20,
    textAlign: "left",
  },
});
