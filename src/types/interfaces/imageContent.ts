import { ThemeVariants } from "./theme";

export interface ImageContent {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
  headline: string;
  copy: string;
  button?: {
    text: string;
  };
  theme: "dark" | "light";
  isRowReversed: boolean;
}
