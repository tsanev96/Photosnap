import { ImageContentCols } from "../../types/interfaces/imageContentCols";
import heroImageMobile from "../../images/pricing/mobile/hero.jpg";
import heroImageTablet from "../../images/pricing/tablet/hero.jpg";
import heroImageDesktop from "../../images/pricing/desktop/hero.jpg";

export const imageTextDataOne: ImageContentCols = {
  image: {
    mobile: heroImageMobile,
    tablet: heroImageTablet,
    desktop: heroImageDesktop,
    alt: "photographer",
  },
  headline: "PRICING",
  copy:
    "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  theme: "light",
  isRowReversed: true,
};

export const pricingPlan = [
  {
    headline: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: {
      monthly: "$19.00",
      yearly: "$19.00",
    },
    theme: "dark",
  },
  {
    headline: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    price: {
      monthly: "$39.00",
      yearly: "$39.00",
    },
    theme: "light",
  },
  {
    headline: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: {
      monthly: "$99.00",
      yearly: "$99.00",
    },
    theme: "dark",
  },
];
