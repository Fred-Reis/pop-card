import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },

  date: {
    fontSize: 14,
    color: "#3e3e3e",
    fontWeight: "700",
  },

  separator: {
    fontSize: 16,
    color: "#3e3e3e",
    fontWeight: "500",
  },

  value: {
    fontSize: 16,
    color: "#3e3e3e",
    fontWeight: "400",
  },

  stailments: {
    fontSize: 16,
    color: "#3e3e3e",
    fontWeight: "400",
  },

  statusContainer: {
    padding: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
});
