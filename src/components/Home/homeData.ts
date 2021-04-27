import { ImageContent } from "../../types/interfaces/imageContent";
import img1mobile from "../../images/home/mobile/create-and-share.jpg";
import img2mobile from "../../images/home/mobile/beautiful-stories.jpg";
import img3mobile from "../../images/home/mobile/designed-for-everyone.jpg";
import img1tablet from "../../images/home/tablet/create-and-share.jpg";
import img2tablet from "../../images/home/tablet/beautiful-stories.jpg";
import img3tablet from "../../images/home/tablet/designed-for-everyone.jpg";
import img1desktop from "../../images/home/desktop/create-and-share.jpg";
import img2desktop from "../../images/home/desktop/beautiful-stories.jpg";
import img3desktop from "../../images/home/desktop/designed-for-everyone.jpg";

export const imageTextData: ImageContent[] = [
  {
    image: {
      mobile: img1mobile,
      tablet: img1tablet,
      desktop: img1desktop,
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
      mobile: img2mobile,
      tablet: img2tablet,
      desktop: img2desktop,
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
      mobile: img3mobile,
      tablet: img3tablet,
      desktop: img3desktop,
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
