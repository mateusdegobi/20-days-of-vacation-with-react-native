import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeFolder from "../pages/HomeFolder";
import FolderItemsNav from "./FolderItemsNav";
import { StatusBar, View } from "react-native";
import Header from "../components/Header/Header";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="HomeFolder">
      <Stack.Screen name="HomeFolder" component={HomeFolder} />

      <Stack.Screen
        name="ItemFolders"
        component={FolderItemsNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
