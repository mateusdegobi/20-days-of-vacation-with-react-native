import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeFolder from "../pages/HomeFolder";
import FolderItemsNav from "./FolderItemsNav";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="HomeFolder">
      <Stack.Screen
        name="HomeFolder"
        component={HomeFolder}
        options={{ headerShown: true, title: "Home" }}
      />

      <Stack.Screen
        name="ItemFolders"
        component={FolderItemsNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
