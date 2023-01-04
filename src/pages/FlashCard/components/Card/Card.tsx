import { View, StyleSheet } from "react-native";
import React from "react";
import { BoxCard, Content, Wrapper } from "./styles";
import Text from "../../../../styles/Text";

interface ICardProps {
  index: number;
}

export default function Card({ index }: ICardProps) {
  const rotateValueCard = `${10 * (index * 0.8)}deg`;

  const flipFront = {};
  const flipBack = {};

  return (
    <Content style={{ ...StyleSheet.absoluteFillObject }}>
      <Wrapper rotate={rotateValueCard}>
        <BoxCard>
          <Text weight="700" size={20}>
            Card
          </Text>
        </BoxCard>
        <BoxCard>
          <Text weight="700" size={20}>
            Card
          </Text>
        </BoxCard>
      </Wrapper>
    </Content>
  );
}
