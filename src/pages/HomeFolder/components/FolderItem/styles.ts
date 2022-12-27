import styled from "styled-components/native";
import Text from "../../../../styles/Text";

export const Box = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin: 10px;
  width: 100px;
  height: 100px;

  border: 3px solid #f1f1f1;
  border-radius: 8px;
  background-color: #fff;
`;

export const Title = styled(Text)`
  font-size: 12px;
`;
