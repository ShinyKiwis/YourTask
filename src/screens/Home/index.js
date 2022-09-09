import { View, Text } from "react-native";
import HomeStyle from "./Home.style";
import Avatar from "../../components/Avatar";
import HorizontalCalendar from "../../components/HorizontalCalendar";

import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={HomeStyle.header}>
      <Avatar />
      <View>
        <Text style={HomeStyle.header_text}>
          <Text style={HomeStyle.prompt}>Welcome back!{"\n"}</Text>
          <Text style={{ color: "#1488d8" }}>Jasmine</Text>
        </Text>
      </View>
      <Ionicons
        name="md-calendar-sharp"
        size={35}
        color="#1488d8"
        style={HomeStyle.calendar}
      />
    </View>
  );
};

const Home = () => {
  return (
    <View style={HomeStyle.container}>
      <View>
        <Header />
        <HorizontalCalendar />
      </View>
    </View>
  );
};

export default Home;
