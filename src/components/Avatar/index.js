import { View, Text, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Temporarily hardcode image url
const Avatar = () => {
  return (
    <View>
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.avatar_img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar_img: {
    borderRadius: "50%",
    width: Dimensions.get("screen").width * 0.15,
    height: Dimensions.get("screen").width * 0.15,
  },
});

export default Avatar;
