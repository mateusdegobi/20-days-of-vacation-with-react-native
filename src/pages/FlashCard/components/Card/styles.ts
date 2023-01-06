import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

interface IBoxCardProps {
  back?: boolean;
}

export const BoxCard = styled(Animated.View)<IBoxCardProps>`
  height: 285px;
  width: 227px;

  background-color: ${({ back }) => (back ? "#340C30" : "white")};

  position: absolute;
  border-radius: 25px;
  padding: 15px 20px;

  align-self: center;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
`;
export const Content = styled.View`
  justify-content: center;
`;

interface IWrapperProps {
  rotate: string;
}

export const Wrapper = styled.Pressable<IWrapperProps>`
  ${({ rotate: rotateValue }) => css`
    transform: rotateY(${rotateValue});
    transform: rotateX(${rotateValue});
  `}
  /* margin-top: 100px; */
  height: 300px;
  width: 100%;
`;
