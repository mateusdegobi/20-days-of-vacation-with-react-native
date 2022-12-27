import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import folderScreens from "../../constants/screens";
import FolderItem from "./components/FolderItem/FolderItem";

export default function HomeFolder() {
  const nav = useNavigation();

  const redirectPage = useCallback((path_screen: string) => {
    nav.navigate("ItemFolders", { screen: path_screen });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={folderScreens}
        renderItem={(props) => FolderItem(props, redirectPage)}
        numColumns={3}
      />
    </View>
  );
}
