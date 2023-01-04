import styled, { css } from "styled-components/native";

export const BoxCard = styled.View`
  height: 290px;
  width: 227px;

  position: absolute;
  background: red;
  border-radius: 25px;
  padding: 15px 20px;

  align-self: center;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View`
  justify-content: center;
  width: 100%;
`;

interface IWrapperProps {
  rotate: string;
}

export const Wrapper = styled.View<IWrapperProps>`
  ${({ rotate: rotateValue }) => css`
    transform: rotateX(${rotateValue});
  `}
`;
