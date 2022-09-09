import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    paddingHorizontal: 15,
  },

  horizontal_calendar_container: {
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  header_text: {
    fontFamily: "InterBold",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  prompt: {
    color: "#9c9c9c",
  },

  calendar: {
    marginLeft: "auto",
  },
});

export default style;
