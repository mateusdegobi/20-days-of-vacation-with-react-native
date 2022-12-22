import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Stopwatch from "../pages/Stopwatch";
import Weather from "../pages/Weather";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="Weather">
      <Stack.Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
