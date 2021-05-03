import { ImageDetails } from "./imageDetails";

export interface TeaserStory {
  smallHeadline: string;
  headline: string;
  imageTakenInfo: {
    data: string;
    by: string;
  };
  description: string;
  image: ImageDetails;
}
