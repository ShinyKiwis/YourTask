import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 2,
    paddingBottom: 30,
  },
  selected_item: {
    backgroundColor: "#1488d9",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: -16,
  },
  item: {
    marginTop: 40,
    marginEnd: 18,
  },
  item_text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  unselected_item_text: {
    color: "#9c9c9c",
  },
  selected_item_text: {
    color: "#FFF",
  },
  today: {
    color: "#1488d8",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default style;
