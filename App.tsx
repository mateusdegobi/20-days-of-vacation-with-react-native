import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import HomeNavigation from "./src/routes/HomeNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}
