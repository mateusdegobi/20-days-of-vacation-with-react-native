import React from "react";
import { CardContainer, WrapperCardAnimated } from "./styles";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ImageCard } from "../../style";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { StyleSheet } from "react-native";

export default function Card({ card, index, shuffleBack }) {
  const offset = useSharedValue({ x: 0, y: 0 });

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotateZ = useSharedValue(30);
  const scale = useSharedValue(1);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value = { x: translateX.value, y: translateY.value };
      scale.value = 1.05;
    })
    .onUpdate(({ translationX, translationY }) => {
      translateX.value = offset.value.x + translationX;
      translateY.value = offset.value.y + translationY;
    })
    .onEnd(() => {
      scale.value = 1;

      if (index === 1) {
        shuffleBack.value = true;
      }
    });

  const styleWrapper = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1500 },
      { rotateX: "30deg" },
      { rotate: `${10 / index}deg` },
      { translateX: translateX.value },
      { translateY: translateY.value }, //translateY.value },
      // { rotateY: `${rotateZ.value / 10}deg` },
      { rotateZ: `${0}deg` },
      { scale: scale.value },
    ],
  }));

  return (
    <CardContainer
      style={{ ...StyleSheet.absoluteFillObject }}
      pointerEvents="box-none"
    >
      <GestureDetector gesture={gesture}>
        <WrapperCardAnimated style={[styleWrapper]}>
          <ImageCard source={card.source} resizeMode="contain" />
        </WrapperCardAnimated>
      </GestureDetector>
    </CardContainer>
  );
}
