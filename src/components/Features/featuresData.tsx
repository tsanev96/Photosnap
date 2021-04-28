import React from "react";
import imageContentMobile from "../../images/features/mobile/hero.jpg";
import imageContentTablet from "../../images/features/tablet/hero.jpg";
import imageContentDesktop from "../../images/features/desktop/hero.jpg";
import { ImageContent } from "../../types/interfaces/imageContent";
import {
  FaDragon,
  FaInfinity,
  FaMobileAlt,
  FaPaperPlane,
  FaSchlix,
} from "react-icons/fa";
import { MdDomain } from "react-icons/md";
import { BoxContent } from "../../types/interfaces/boxContent";
import imgBetaMobile from "../../images/shared/mobile/bg-beta.jpg";
import imgBetaTablet from "../../images/shared/tablet/bg-beta.jpg";
import imgBetaDesktop from "../../images/shared/desktop/bg-beta.jpg";

export const imageContentData: ImageContent = {
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

export const boxesFirstData: BoxContent[] = [
  {
    headline: "100% Responsive",
    copy:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    icon: <FaMobileAlt />,
  },
  {
    headline: "No Photo Upload Limit",
    copy:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: <FaInfinity />,
  },
  {
    headline: "Available to Embed",
    copy:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    icon: <FaPaperPlane />,
  },
];

export const boxesSecondData: BoxContent[] = [
  {
    headline: "Custom Domain",
    copy:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    icon: <MdDomain />,
  },
  {
    headline: "Boost Your Exposure",
    copy:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    icon: <FaSchlix />,
  },
  {
    headline: "Drag & Drop Image",
    copy:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    icon: <FaDragon />,
  },
];

export const imageInfoData: ImageContent = {
  image: {
    mobile: imgBetaMobile,
    tablet: imgBetaTablet,
    desktop: imgBetaDesktop,
    alt: "beta",
  },
  headline: "We’re in beta.Get your invite today!",
  button: {
    text: "GET AN INVITE",
  },
  theme: "light",
  isRowReversed: true,
};
