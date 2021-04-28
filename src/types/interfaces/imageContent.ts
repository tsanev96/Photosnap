import { ImageDetails } from "./imageDetails";
import { ThemeVariants } from "./theme";

export interface ImageContent {
  image: ImageDetails;
  headline: string;
  copy?: string;
  button?: {
    text: string;
  };
  theme: "dark" | "light";
  isRowReversed: boolean;
}
