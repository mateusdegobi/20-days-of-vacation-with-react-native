import styled from "styled-components/native";

interface IContainerProps {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  background-color: #340c30;
  height: 48px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  ${(props) => props.disabled && "background: #505050; color: #B7B7B7"}
`;
