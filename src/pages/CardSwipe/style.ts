import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [-wWidth, 0, wWidth];
const aspectRatio = 722 / 368;
const CARD_WIDTH = wWidth - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;
const DURATION = 250;

export const Container = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export const ImageCard = styled.Image`
  //background-color: white;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  /* shadow-color: #000; */
  /* shadowOffset: {
      width: 0,
      height: 2,
    }; */
  /* shadowOpacity: 0.25;
    shadowRadius: 3.84; */
  elevation: 5;
`;
