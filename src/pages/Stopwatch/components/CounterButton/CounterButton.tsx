import { View, Text } from "react-native";
import React from "react";
import { ButtonArea, TextIndicator } from "./styles";

interface ICounterButtonProps {
  isCounter: boolean;
  onPress: () => void;
}
export default function CounterButton({
  isCounter,
  onPress,
}: ICounterButtonProps) {
  return (
    <ButtonArea onPress={onPress}>
      <TextIndicator>{!isCounter ? "START" : "STOP"}</TextIndicator>
    </ButtonArea>
  );
}
