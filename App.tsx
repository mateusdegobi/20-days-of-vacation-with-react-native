import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import useAppearance from "./src/hooks/useAppearance";

import HomeNavigation from "./src/routes/HomeNavigation";

export default function App() {
  const { theme } = useAppearance();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <HomeNavigation />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  );
}
