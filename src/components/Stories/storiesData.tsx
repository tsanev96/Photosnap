import { importAll } from "../../utils/imagesImport";

export const storyImageMobile = importAll(
  require.context("../../images/stories/mobile", false, /\.(png|jpe?g|svg)$/)
);

export const storiesData = [
  {
    headline: "The Mountains",
    copy: "by John Appleseed",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[0].default,
      desktop: storyImageMobile[0].default,
      alt: "",
    },
  },
  {
    headline: "Sunset Cityscapes",
    copy: "by John Appleseed",
    buttonText: "by Benjamin Cruz",
    image: {
      mobile: storyImageMobile[1].default,
      desktop: storyImageMobile[1].default,
      alt: "",
    },
  },
  {
    headline: "18 Days Voyage",
    copy: "by Alexei Borodin",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[2].default,
      desktop: storyImageMobile[2].default,
      alt: "",
    },
  },
  {
    headline: "Architecturals",
    copy: "by Samantha Brooke",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[3].default,
      desktop: storyImageMobile[3].default,
      alt: "",
    },
  },
  {
    headline: "World Tour 2019",
    copy: "by Timothy Wagner",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[4].default,
      desktop: storyImageMobile[4].default,
      alt: "",
    },
  },
  {
    headline: "Unforeseen Corners",
    copy: "by William Malcolm",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[5].default,
      desktop: storyImageMobile[5].default,
      alt: "",
    },
  },
  {
    headline: "King on Africa: Part II",
    copy: "by Tim Hillenburgr",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[6].default,
      desktop: storyImageMobile[6].default,
      alt: "",
    },
  },
  {
    headline: "The Trip to Nowhere",
    copy: "by Felicia Rourke",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[7].default,
      desktop: storyImageMobile[7].default,
      alt: "",
    },
  },
  {
    headline: "Running Free",
    copy: "by Michelle",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[8].default,
      desktop: storyImageMobile[8].default,
      alt: "",
    },
  },
  {
    headline: "Behind the Waves",
    copy: "by Lamarr Wilson",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[9].default,
      desktop: storyImageMobile[9].default,
      alt: "",
    },
  },
  {
    headline: "Calm Waters",
    copy: "by Samantha Brooke",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[10].default,
      desktop: storyImageMobile[10].default,
      alt: "",
    },
  },
  {
    headline: "The Milky Way",
    copy: "by Benjamin Cruz",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[11].default,
      desktop: storyImageMobile[11].default,
      alt: "",
    },
  },
  {
    headline: "Night at The Dark Forest",
    copy: "by  Mohammed Abdul",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[12].default,
      desktop: storyImageMobile[12].default,
      alt: "",
    },
  },
  {
    headline: "World Tour 2019",
    copy: "by Timothy Wagner",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[13].default,
      desktop: storyImageMobile[13].default,
      alt: "",
    },
  },
  {
    headline: "Somwarpet’s Beauty",
    copy: "by Michelle",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[14].default,
      desktop: storyImageMobile[14].default,
      alt: "",
    },
  },
  {
    headline: "Land of Dreams",
    copy: "by William Malcolm",
    buttonText: "READ STORY",
    image: {
      mobile: storyImageMobile[15].default,
      desktop: storyImageMobile[15].default,
      alt: "",
    },
  },
];
