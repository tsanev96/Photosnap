import { importAll } from "../../utils/imagesImport";

const homeImagesMobile = importAll(
  require.context("../../images/home/mobile", false, /\.(png|jpe?g|svg)$/)
);

const homeImagesTablet = importAll(
  require.context("../../images/home/tablet", false, /\.(png|jpe?g|svg)$/)
);

const homeImagesDesktop = importAll(
  require.context("../../images/home/desktop", false, /\.(png|jpe?g|svg)$/)
);

const storyImagesMobile = importAll(
  require.context("../../images/stories/mobile", false, /\.(png|jpe?g|svg)$/)
);
const storyImagesDesktop = importAll(
  require.context("../../images/stories/desktop", false, /\.(png|jpe?g|svg)$/)
);

export const contentImages = {
  image1: {
    mobile: homeImagesMobile[0].default,
    tablet: homeImagesTablet[0].default,
    desktop: homeImagesDesktop[0].default,
  },
  image2: {
    mobile: homeImagesMobile[1].default,
    tablet: homeImagesTablet[1].default,
    desktop: homeImagesDesktop[1].default,
  },
  image3: {
    mobile: homeImagesMobile[2].default,
    tablet: homeImagesTablet[2].default,
    desktop: homeImagesDesktop[2].default,
  },
};

export const storyImages = {
  image1: {
    mobile: storyImagesMobile[0].default,
    desktop: storyImagesDesktop[0].default,
    alt: "",
  },
  image2: {
    mobile: storyImagesMobile[1].default,
    desktop: storyImagesDesktop[1].default,
    alt: "",
  },
  image3: {
    mobile: storyImagesMobile[2].default,
    desktop: storyImagesDesktop[2].default,
    alt: "",
  },
  image4: {
    mobile: storyImagesMobile[3].default,
    desktop: storyImagesDesktop[3].default,
    alt: "",
  },
};
