import { View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Text from "../../styles/Text";
import { useNavigation } from "@react-navigation/native";
import Icon from "../Icon";
import { Container } from "./styles";

interface IHeaderProps {
  isReturn: boolean;
  title: string;
}

export const headerHeight = 40;

export default function Header({ isReturn, title }: IHeaderProps) {
  const { goBack } = useNavigation();

  return (
    <Container height={headerHeight}>
      {isReturn && (
        <TouchableOpacity onPress={goBack}>
          <Icon icon="arrowLeft" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
