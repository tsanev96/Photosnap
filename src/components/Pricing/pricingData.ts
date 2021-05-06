import { ImageContentCols } from "../../types/interfaces/imageContentCols";
import heroImageMobile from "../../images/pricing/mobile/hero.jpg";
import heroImageTablet from "../../images/pricing/tablet/hero.jpg";
import heroImageDesktop from "../../images/pricing/desktop/hero.jpg";
import { PricingPlan } from "../../types/interfaces/pricingPlan";
import { FeaturePlansDetails } from "../../types/interfaces/featurePlans";

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

export const pricingPlans: PricingPlan[] = [
  {
    headline: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    payment: {
      monthly: "$19.00",
      yearly: "$100.00",
    },
    theme: "dark",
  },
  {
    headline: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    payment: {
      monthly: "$39.00",
      yearly: "$150.00",
    },
    theme: "light",
  },
  {
    headline: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    payment: {
      monthly: "$99.00",
      yearly: "$250.00",
    },
    theme: "dark",
  },
];

export const planFeatures: FeaturePlansDetails = {
  headline: "THE FEATURES",
  plans: [
    {
      feature: "UNLIMITED STORY POSTING",
      basic: true,
      pro: true,
      business: true,
    },
    {
      feature: "UNLIMITED PHOTO UPLOAD",
      basic: true,
      pro: true,
      business: true,
    },
    {
      feature: "EMBEDDING CUSTOM CONTENT",
      basic: false,
      pro: true,
      business: true,
    },
    {
      feature: "CUSTOMIZE METADATA",
      basic: false,
      pro: true,
      business: true,
    },
    {
      feature: "ADVANCED METRICS",
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: "PHOTO DOWNLOADS",
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: "SEARCH ENGINE INDEXING",
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: "CUSTOM ANALYTICS",
      basic: false,
      pro: false,
      business: true,
    },
  ],
};
