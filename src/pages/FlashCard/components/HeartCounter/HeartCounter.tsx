import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef } from "react";
import Icon from "../../../../components/Icon";

interface IHeartCounterProps {
  total: number;
  current: number;
}

export default function HeartCounter({ current, total }: IHeartCounterProps) {
  const hearts: number[] = new Array(total).fill(0);
  const heartsFilled = hearts.map((heart, index) => {
    if (index < current) {
      return 1;
    }
    return heart;
  });

  interface IHeartIconProps {
    value: number;
  }

  function HeartIcon({ value }: IHeartIconProps) {
    const valueToOpacity = value ? value : 0.3;
    const opacityValue = useRef(new Animated.Value(valueToOpacity)).current;

    return (
      <Animated.View style={{ paddingHorizontal: 8, opacity: opacityValue }}>
        <Icon icon="heartActive" size={24} />
      </Animated.View>
    );
  }

  return (
    <FlatList
      data={heartsFilled}
      horizontal
      renderItem={({ item }) => <HeartIcon value={item} />}
    />
  );
}
