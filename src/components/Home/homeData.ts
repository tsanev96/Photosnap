import { ImageContent } from "../../types/interfaces/imageContent";
import { imagesContent } from "./homeImages";

import storyImageOne from "../../images/home/desktop/designed-for-everyone.jpg";
export const imageTextData: ImageContent[] = [
  {
    image: {
      mobile: imagesContent.image1.mobile,
      tablet: imagesContent.image1.tablet,
      desktop: imagesContent.image1.desktop,
      alt: "",
    },
    headline: "Create and share your photo stories.",
    copy:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    button: {
      text: "GET AN INVITE",
    },
    theme: "light",
    isRowReversed: true,
  },
  {
    image: {
      mobile: imagesContent.image2.mobile,
      tablet: imagesContent.image2.tablet,
      desktop: imagesContent.image2.desktop,
      alt: "",
    },
    headline: "BEAUTIFUL STORIES EVERY TIME",
    copy:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    button: {
      text: "VIEW THE STORIES",
    },
    theme: "dark",
    isRowReversed: false,
  },
  {
    image: {
      mobile: imagesContent.image2.mobile,
      tablet: imagesContent.image2.tablet,
      desktop: imagesContent.image2.desktop,
      alt: "",
    },
    headline: "DESIGNED FOR EVERYONE",
    copy:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    button: {
      text: "VIEW THE STORIES",
    },
    theme: "dark",
    isRowReversed: true,
  },
];

export const cards = [
  {
    headline: "The Mountains",
    copy: "by John Appleseed",
    buttonText: "READ STORY",
    image: {},
  },
  {
    headline: "Sunset Cityscapes",
    copy: "by Benjamin Cruz",
    buttonText: "READ STORY",
    image: {},
  },
  {
    headline: "18 Days Voyage",
    copy: "by Alexei Borodin",
    buttonText: "READ STORY",
    image: {},
  },
  {
    headline: "Architecturals",
    copy: "by Samantha Brooke",
    buttonText: "READ STORY",
    image: {},
  },
];
