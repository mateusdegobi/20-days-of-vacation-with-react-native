import { useCallback, useEffect, useMemo, useState } from "react";
import { Appearance } from "react-native";
import { themeDark } from "../../constants/styles/themes/dark";
import { themeLight } from "../../constants/styles/themes/light";
import { IAppearanceProps, IColorSchemeProps, themeType } from "./types";

export default function useAppearance(): IAppearanceProps {
  const systemScheme = Appearance.getColorScheme();
  const initialScheme = systemScheme || "light";

  const [currentTheme, setCurrentTheme] = useState<themeType>(initialScheme);

  const theme = useMemo(() => {
    if (currentTheme === "dark") {
      return themeDark;
    }
    return themeLight;
  }, [currentTheme]);

  const handleChangeAppearance = useCallback(
    ({ colorScheme }: IColorSchemeProps) => {
      colorScheme && setCurrentTheme(colorScheme);
    },
    []
  );
  useEffect(() => {
    Appearance.addChangeListener(handleChangeAppearance);
  }, [handleChangeAppearance]);

  return {
    theme,
    currentTheme,
    setCurrentTheme,
  };
}
