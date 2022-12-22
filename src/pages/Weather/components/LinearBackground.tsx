import { View, Text } from "react-native";
import React from "react";
import { Background } from "../styles";
import { UseWeatherContext } from "../context/WeatherContext";

const dayTheme = ["#2292D8", "#073959"];
const nightTheme = ["#20232A", "#07101B"];

export default function LinearBackground({ children }) {
  const { currentPeriod } = UseWeatherContext();
  const currentBGTheme = currentPeriod === "day" ? dayTheme : nightTheme;

  return <Background colors={currentBGTheme}>{children}</Background>;
}
