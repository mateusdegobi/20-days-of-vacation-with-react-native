import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeNavigation from "./src/routes/HomeNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HomeNavigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
