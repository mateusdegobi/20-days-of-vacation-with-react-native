import React from "react";
import Text from "../../../../styles/Text";
import { UseWeatherContext } from "../../context/WeatherContext";
import { Box, Container } from "./styles";

export default function FooterInfoArea() {
  const {humidity, windSpeed} = UseWeatherContext();

  return (
    <Container>
      <Box>
        <Text color="#d6d6d6" size={13} weight="400">
          Vento
        </Text>
        <Text color="#f0f0f0" size={18} weight="600">
          {windSpeed}km
        </Text>
      </Box>
      <Box>
        <Text color="#d6d6d6" size={13} weight="400">
          Umidade
        </Text>
        <Text color="#f0f0f0" size={18} weight="600">
          {humidity}%
        </Text>
      </Box>
      <Box>
        <Text color="#d6d6d6" size={13} weight="400">
          Precipitação
        </Text>
        <Text color="#f0f0f0" size={18} weight="600">
          -
        </Text>
      </Box>
    </Container>
  );
}
