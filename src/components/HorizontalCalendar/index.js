import { useState, useRef, useEffect } from "react";
import { View, Text, FlatList, Pressable, Dimensions } from "react-native";
import { getToday, getDaysInMonth, extractDate } from "./util";
import CalendarStyle from "./Calendar.style";

const HorizontalCalendar = () => {
  const dates = getDaysInMonth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarListRef = useRef(null);

  // const ITEM_WIDTH = Dimensions.get("window").width;

  useEffect(() => {
    if (calendarListRef) {
      const itemIndex = selectedDate.getDate() - 1;
      calendarListRef.current.scrollToIndex({
        animated: true,
        index: itemIndex,
        viewPosition: 0.5,
      });
    }
  }, [selectedDate]);

  const Item = ({ item }) => {
    const { day, date } = extractDate(item);
    const currentSelectedDate = selectedDate.getDate();
    const pressHandle = () => {
      setSelectedDate(item);
    };

    return (
      <Pressable
        style={date === currentSelectedDate ? CalendarStyle.selected_item : ""}
        onPress={pressHandle}
        hitSlop={8}
      >
        <Text
          style={[
            date === currentSelectedDate
              ? CalendarStyle.selected_item_text
              : CalendarStyle.unselected_item_text,
            CalendarStyle.item_text,
          ]}
        >
          <Text>
            {day.substring(0, 3)}
            {"\n"}
            {"\n"}
          </Text>
          <Text>{date}</Text>
        </Text>
      </Pressable>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <View style={CalendarStyle.item}>
        <Item item={item} />
      </View>
    );
  };

  return (
    <View style={CalendarStyle.container}>
      <Text style={CalendarStyle.today}>{getToday()}</Text>
      <FlatList
        ref={calendarListRef}
        data={dates}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        initialNumToRender={dates.length}
        initialScrollIndex={selectedDate.getDate() - 1}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScrollToIndexFailed={() => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            calendarListRef.current.scrollToIndex({
              index: selectedDate.getDate() - 1,
              animated: true,
              viewOffset: 5,
              viewPosition: 0.5,
            });
          });
        }}
      />
    </View>
  );
};

export default HorizontalCalendar;
