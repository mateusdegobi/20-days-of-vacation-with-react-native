import { View } from "react-native";
import React, { useState } from "react";
import Text from "../../styles/Text";
import { IndicatorsArea } from "./styles";
import Card from "./components/Card/Card";
import ProgressBar from "./components/ProgressBar/ProgressBar";

export default function FlashCard() {
  const [percent, setPercent] = useState(66);

  return (
    <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
      <View>
        <ProgressBar percent={percent} />
        <IndicatorsArea>
          <View>
            <Text>6/9</Text>
            <Text>5</Text>
          </View>
          <View>
            <Text>{percent}%</Text>
          </View>

          <View></View>
        </IndicatorsArea>
      </View>

      {["", "", "", "", ""].map((item, index) => (
        <Card index={index} />
      ))}
    </View>
  );
}
