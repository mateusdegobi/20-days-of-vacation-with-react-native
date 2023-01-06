import { StyleSheet, Animated, Keyboard } from "react-native";
import React, { useEffect, useRef } from "react";
import { BoxCard, Content, Wrapper } from "./styles";
import Text from "../../../../styles/Text";

interface ICardProps {
  index: number;
  question: string;
  answer: string;
  interpolateFront: Animated.AnimatedInterpolation<string | number>;
  interpolateBack: Animated.AnimatedInterpolation<string | number>;
  opacityValueCard: Animated.AnimatedInterpolation<string | number>;
  heightBox: Animated.AnimatedInterpolation<number>;
}

export default function Card({
  index,
  question,
  answer,
  interpolateFront,
  interpolateBack,
  opacityValueCard,
  heightBox,
}: ICardProps) {
  const rotateValueCard = `${2 * (index * 0.8)}deg`;

  const TextAnimated = Animated.createAnimatedComponent(Text);

  return (
    <Content style={{ ...StyleSheet.absoluteFillObject }}>
      <Wrapper rotate={rotateValueCard}>
        <BoxCard
          style={{
            transform: [
              { perspective: 1000 },
              { rotateY: interpolateFront },
              { translateX: 0 },
            ],
            height: heightBox,
          }}
        >
          <Text color="#340C30" weight="700" size={20}>
            {question}
          </Text>
        </BoxCard>
        <BoxCard
          back
          style={{
            transform: [
              { perspective: 1000 },
              { rotateY: interpolateBack },
              { translateX: 0 },
            ],
          }}
        >
          <TextAnimated
            color="white"
            weight="700"
            size={20}
            style={{ opacity: opacityValueCard }}
          >
            {answer}
          </TextAnimated>
        </BoxCard>
      </Wrapper>
    </Content>
  );
}
