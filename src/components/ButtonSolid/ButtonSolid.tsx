import { TouchableOpacityProps, View } from "react-native";
import React from "react";
import { Container } from "./styles";
import Text from "../../styles/Text";

interface IButtonSolidProps extends TouchableOpacityProps {
  disabled?: boolean;
  children?: any;
}

export default function ButtonSolid({ disabled, children, ...rest }: IButtonSolidProps) {
  return (
    <Container disabled={disabled} {...rest}>
      <Text color="white" size={16} weight="600">
        {children}
      </Text>
    </Container>
  );
}
