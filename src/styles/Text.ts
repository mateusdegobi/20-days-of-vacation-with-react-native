import styled, { css } from "styled-components/native";

interface ITextProps {
  color?: string;
  size?: number;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

const Text = styled.Text<ITextProps>`
  ${({ color, size, weight }) => css`
    color: ${color || "#333"};
    font-size: ${size || 13}px;
    font-weight: ${weight || "normal"};
  `}
`;

export default Text;
