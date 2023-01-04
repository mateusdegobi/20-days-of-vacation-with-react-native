import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import folderScreens from "../constants/screens";
import Header from "../components/Header/Header";

const Stack = createNativeStackNavigator();

export default function FolderItemsNav() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <Header isReturn /> }}>
      {folderScreens.map((screen) => (
        <Stack.Screen
          key={screen.screen}
          name={screen.screen}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}
