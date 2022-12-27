import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";
import { IFolderScreens } from "../../../../constants/screens";

import { Box, Title } from "./styles";

export default function FolderItem(
  props: ListRenderItemInfo<IFolderScreens>,
  redirectPage: (screen: string) => void
) {
  const { title, path_screen } = props.item;

  const handleRedirect = () => redirectPage(path_screen);

  return (
    <Box onPress={handleRedirect}>
      <Title>{title}</Title>
    </Box>
  );
}
