import { ImageContentCols } from "../../types/interfaces/imageContentCols";
import { contentImages, storyImages } from "./homeImages";
import { FaMobileAlt, FaInfinity, FaPaperPlane } from "react-icons/fa";
import { BoxContent } from "../../types/interfaces/boxContent";

export const imageTextData: ImageContentCols[] = [
  {
    image: {
      mobile: contentImages.image1.mobile,
      tablet: contentImages.image1.tablet,
      desktop: contentImages.image1.desktop,
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
      mobile: contentImages.image2.mobile,
      tablet: contentImages.image2.tablet,
      desktop: contentImages.image2.desktop,
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
      mobile: contentImages.image3.mobile,
      tablet: contentImages.image3.tablet,
      desktop: contentImages.image3.desktop,
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

export const storiesData = [
  {
    headline: "The Mountains",
    copy: "by John Appleseed",
    buttonText: "READ STORY",
    image: {
      mobile: storyImages.image1.mobile,
      desktop: storyImages.image1.desktop,
      alt: storyImages.image1.alt,
    },
  },
  {
    headline: "Sunset Cityscapes",
    copy: "by Benjamin Cruz",
    buttonText: "READ STORY",
    image: {
      mobile: storyImages.image2.mobile,
      desktop: storyImages.image2.desktop,
      alt: storyImages.image2.alt,
    },
  },
  {
    headline: "18 Days Voyage",
    copy: "by Alexei Borodin",
    buttonText: "READ STORY",
    image: {
      mobile: storyImages.image3.mobile,
      desktop: storyImages.image3.desktop,
      alt: storyImages.image3.alt,
    },
  },
  {
    headline: "Architecturals",
    copy: "by Samantha Brooke",
    buttonText: "READ STORY",
    image: {
      mobile: storyImages.image4.mobile,
      desktop: storyImages.image4.desktop,
      alt: storyImages.image4.alt,
    },
  },
];

export const cardsData: BoxContent[] = [
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
