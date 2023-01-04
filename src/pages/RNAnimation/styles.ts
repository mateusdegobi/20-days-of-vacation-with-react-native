import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const BoxStart = styled(Animated.View)`
  width: 100px;
  height: 100px;

  background-color: tomato;
  justify-content: center;
  align-items: center;
`;

export const Box1 = styled(Animated.View)`
  width: 50%;
  height: 50%;
  background-color: aliceblue;
  position: absolute;
  backface-visibility: hidden;
`;
