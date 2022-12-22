import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Counter from "./components/Counter/Counter";
import CounterButton from "./components/CounterButton/CounterButton";
import { Background, ContentArea } from "./styles";

import { KEY_API_WEATHER } from "@env";

export default function Stopwatch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const [customInterval, setCustomInterval] = useState<NodeJS.Timer>();
  const [isCounter, setIsCounter] = useState(false);

  const changeTime = () => {
    setSecond((curr) => {
      if (curr + 1 === 60) {
        setMinute((currMin) => currMin + 1);
        return 0;
      }
      return curr + 1;
    });
  };
  const stopTime = useCallback(() => {
    clearInterval(customInterval);
    setCustomInterval(0);
    setIsCounter(false);
  }, []);
  const clearTime = useCallback(() => {
    setIsCounter(false);
    setSecond(0);
    setMinute(0);
    setHour(0);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isCounter) {
      interval = setInterval(() => {
        changeTime();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCounter]);

  return (
    <Background>
      <ContentArea>
        <CounterButton
          isCounter={isCounter}
          onPress={() => setIsCounter((curr) => !curr)}
        />
        <Counter hour={hour} minute={minute} second={second} />
      </ContentArea>
    </Background>
  );
}
