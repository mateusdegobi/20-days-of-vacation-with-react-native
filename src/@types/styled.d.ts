import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      [key: string]: string;
    };
    font: {
      "font-family": string;
    };
    text: {
      h1: string;
      h2: string;
      h3: string;
      paragraph: string;
    };
  }
}
