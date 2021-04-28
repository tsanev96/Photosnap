import { ImageDetails } from "./imageDetails";

// InfoTextImage component where we have image as a background

export interface InfoImageContent {
  image: ImageDetails;
  headline: string;
  button: {
    text: string;
  };
  theme: "dark" | "light";
}
