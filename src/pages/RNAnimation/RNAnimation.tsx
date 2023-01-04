import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  StatusBar,
} from "react-native";
import { headerHeight } from "../../components/Header/Header";
import Text from "../../styles/Text";
import { Box1, BoxStart, Container } from "./styles";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const WIDTH_DEVICE = Dimensions.get("window").width;
const HEIGHT_DEVICE =
  Dimensions.get("window").height - headerHeight - STATUSBAR_HEIGHT;

export default function RNAnimation() {
  const scaleXAnimatedBoxStart = useRef(new Animated.Value(100)).current;
  const scaleYAnimatedBoxStart = useRef(new Animated.Value(100)).current;
  const rotateAnimatedBox1 = useRef(new Animated.Value(0)).current;

  const handleScaleUpBoxStart = () => {
    const animationY = Animated.timing(scaleYAnimatedBoxStart, {
      toValue: HEIGHT_DEVICE,
      useNativeDriver: false,
      duration: 700,
    });
    const animationX = Animated.spring(scaleXAnimatedBoxStart, {
      toValue: WIDTH_DEVICE,
      useNativeDriver: false,
    });
    const spinBox = Animated.timing(rotateAnimatedBox1, {
      toValue: 180,
      useNativeDriver: true,
      duration: 2000,
    });

    Animated.sequence([animationX, animationY, spinBox]).start();
  };

  const spinFront = rotateAnimatedBox1.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const spinBack = rotateAnimatedBox1.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "0deg"],
  });

  return (
    <Container>
      <Pressable onPress={handleScaleUpBoxStart}>
        <BoxStart
          style={{
            width: scaleXAnimatedBoxStart,
            height: scaleYAnimatedBoxStart,
          }}
        >
          <Box1 style={{ transform: [{ rotateY: spinFront }] }}>
            <Text>Front</Text>
          </Box1>
          <Box1 style={{ transform: [{ rotateY: spinBack }] }}>
            <Text>Back</Text>
          </Box1>
        </BoxStart>
      </Pressable>
    </Container>
  );
}
