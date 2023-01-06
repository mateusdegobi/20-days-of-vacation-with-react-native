import { Animated } from "react-native";
import styled from "styled-components/native";

export const ProgressView = styled.View`
  width: 100%;

  height: 24px;
  background: #d9d9d9;
  border-radius: 5px;
`;

interface IProgressProps {
  progress: number;
}

export const ProgressIndicator = styled(Animated.View)<IProgressProps>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #340c30;
  border-radius: 5px;
`;
