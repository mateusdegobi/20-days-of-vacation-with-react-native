import React from "react";
import { Container } from "./style";
import Card from "./components/Card/Card";
import { useSharedValue } from "react-native-reanimated";
import cards from "../../constants/card-swipe/cardsToSwipe";

export default function CardSwipe() {
  const shuffleBack = useSharedValue(false);

  return (
    <Container>
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} shuffleBack={shuffleBack} />
      ))}
    </Container>
  );
}
