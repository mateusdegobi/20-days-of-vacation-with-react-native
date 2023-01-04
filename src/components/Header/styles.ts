import styled from "styled-components/native";
import { headerHeight } from "./Header";

interface IContainerProps {
  height: number;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background: transparent;
  justify-content: center;
  padding: 10px;
`;
