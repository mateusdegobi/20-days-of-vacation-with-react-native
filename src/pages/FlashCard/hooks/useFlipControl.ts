import { useRef } from "react";
import { Animated } from "react-native";

export default function useFlipControl() {
  const flipCard = useRef(new Animated.Value(0)).current;
  const opacityValueCard = useRef(new Animated.Value(1)).current;

  const interpolateFrontCard = flipCard.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const interpolateBackCard = flipCard.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const onFlip = () => {
    Animated.timing(flipCard, {
      toValue: 180,
      useNativeDriver: false,
    }).start();
  };
  const onResetFlip = () => {
    const opacityToZero = Animated.timing(opacityValueCard, {
      toValue: 0,
      useNativeDriver: false,
      duration: 0,
    });
    const flipBackCard = Animated.timing(flipCard, {
      toValue: 0,
      useNativeDriver: false,
    });
    const opacityToNormal = Animated.timing(opacityValueCard, {
      toValue: 1,
      useNativeDriver: false,
      duration: 0,
    });

    Animated.sequence([opacityToZero, flipBackCard, opacityToNormal]).start();
  };

  return {
    interpolateFrontCard,
    interpolateBackCard,
    opacityValueCard,
    onFlip,
    onResetFlip,
  };
}
