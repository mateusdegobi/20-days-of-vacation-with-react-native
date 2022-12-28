import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import FooterInfoArea from "./components/FooterInfoArea/FooterInfoArea";
import HeaderArea from "./components/HeaderArea/HeaderArea";
import IconArea from "./components/IconArea/IconArea";
import LinearBackground from "./components/LinearBackground";
import WeatherContextProvider from "./context/WeatherContext";

export type Periods = "day" | "night";

export default function Weather() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#1672ac" />

      <WeatherContextProvider>
        <LinearBackground>
          <HeaderArea />
          <IconArea />
          {/* <StatusArea /> */}
          <FooterInfoArea />
        </LinearBackground>
      </WeatherContextProvider>
    </SafeAreaView>
  );
}
