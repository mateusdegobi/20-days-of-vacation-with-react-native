import React from "react";
import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type themeType = "light" | "dark";

export interface IColorSchemeProps {
  colorScheme: ColorSchemeName;
}

export interface IAppearanceProps {
  currentTheme: themeType;
  theme: DefaultTheme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<themeType>>;
}
