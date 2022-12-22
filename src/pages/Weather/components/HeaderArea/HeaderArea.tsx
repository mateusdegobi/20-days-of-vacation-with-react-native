import React from "react";
import { Container } from "./styles";
import { UseWeatherContext } from "../../context/WeatherContext";
import Text from "../../../../styles/Text";
import Icon from "../../../../components/Icon";
import { TouchableOpacity } from "react-native";

export default function HeaderArea() {
  const { currentPeriod } = UseWeatherContext();

  return (
    <Container>
      <Text color="#f0f0f0">{currentPeriod}</Text>
      <Text color="#f0f0f0"></Text>
      <TouchableOpacity onPress={() => false}>
        <Icon icon="settings" activeColor="#f0f0f0" />
      </TouchableOpacity>
    </Container>
  );
}
