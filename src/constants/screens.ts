export enum FolderScreenNames {
  "Stopwatch" = "Stopwatch",
  "Weather" = "Weather",
  "MapPage" = "MapPage",
}

export interface IFolderScreens {
  title: string;
  icon?: JSX.Element;
  path_screen: FolderScreenNames;
}

const folderScreens: IFolderScreens[] = [
  {
    title: "Stopwatch",
    path_screen: FolderScreenNames.Stopwatch,
  },
  {
    title: "Weather",
    path_screen: FolderScreenNames.Weather,
  },
  {
    title: "Map",
    path_screen: FolderScreenNames.MapPage,
  },
];

export default folderScreens;
