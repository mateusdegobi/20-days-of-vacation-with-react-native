import { View, Text } from "react-native";
import React from "react";

interface ICounterProps {
  hour: number;
  minute: number;
  second: number;
}
export default function Counter({ hour, minute, second }: ICounterProps) {
  return (
    <View>
      <Text>
        {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:
        {second < 10 ? `0${second}` : second}
      </Text>
    </View>
  );
}
