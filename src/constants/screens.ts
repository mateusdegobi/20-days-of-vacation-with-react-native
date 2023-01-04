import CardSwipe from "../pages/CardSwipe";
import FlashCard from "../pages/FlashCard";
import MapPage from "../pages/MapPage";
import RNAnimation from "../pages/RNAnimation";
import Stopwatch from "../pages/Stopwatch";
import Weather from "../pages/Weather";

export enum FolderScreenNames {
  "Stopwatch" = "Stopwatch",
  "Weather" = "Weather",
  "MapPage" = "MapPage",
  "CardSwipe" = "CardSwipe",
  "RNReanimated" = "RNReanimated",
  "FlashCard" = "FlashCard",
}

export interface IFolderScreens {
  component: () => JSX.Element;
  title: string;
  icon?: JSX.Element;
  screen: FolderScreenNames;
}

const folderScreens: IFolderScreens[] = [
  {
    component: Stopwatch,
    title: "Stopwatch",
    screen: FolderScreenNames.Stopwatch,
  },
  {
    component: Weather,
    title: "Weather",
    screen: FolderScreenNames.Weather,
  },
  {
    component: MapPage,
    title: "Map",
    screen: FolderScreenNames.MapPage,
  },
  {
    component: CardSwipe,
    title: "Card Swipe",
    screen: FolderScreenNames.CardSwipe,
  },
  {
    component: RNAnimation,
    title: "RN Animation",
    screen: FolderScreenNames.RNReanimated,
  },
  {
    component: FlashCard,
    title: "FlashCard App (RN Animated)",
    screen: FolderScreenNames.FlashCard,
  },
];

export default folderScreens;
