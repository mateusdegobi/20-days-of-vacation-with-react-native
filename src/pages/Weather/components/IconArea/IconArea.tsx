import React from "react";
import { Image } from "react-native";

import Icon from "../../../../components/Icon";
import Text from "../../../../styles/Text";

import { UseWeatherContext } from "../../context/WeatherContext";

import { Container } from "./styles";

export default function IconArea() {
  const { weatherDescription, temperature, city, iconCode } = UseWeatherContext();

  return (
    <Container>
      <Image
        source={{ uri: `http://openweathermap.org/img/wn/${iconCode}@4x.png` }}
        style={{ width: 200, height: 200, }}
      />
      <Text color="#f0f0f0" size={15} weight={"400"}>
        ({weatherDescription})
      </Text>
      <Text color="#f0f0f0" size={40} weight={"700"}>
        {temperature.toFixed(0)}º
      </Text>
      <Text color="#e8e5e5" size={18} weight={"500"}>
        {city}
      </Text>
    </Container>
  );
}
