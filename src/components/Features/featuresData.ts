import imageContentMobile from "../../images/features/mobile/hero.jpg";
import imageContentTablet from "../../images/features/tablet/hero.jpg";
import imageContentDesktop from "../../images/features/desktop/hero.jpg";
import { ImageContent } from "../../types/interfaces/imageContent";

export const featureImageContentData: ImageContent = {
  image: {
    mobile: imageContentMobile,
    tablet: imageContentTablet,
    desktop: imageContentDesktop,
    alt: "",
  },
  headline: "FEATURES",
  copy:
    "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
  theme: "light",
  isRowReversed: true,
};
