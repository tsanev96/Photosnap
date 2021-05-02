// import imageContent1mobile from "../../images/home/mobile/1.jpg";
// import imageContent2mobile from "../../images/home/mobile/2.jpg";
// import imageContent3mobile from "../../images/home/mobile/3.jpg";
// import imageContent1tablet from "../../images/home/tablet/1.jpg";
// import imageContent2tablet from "../../images/home/tablet/2.jpg";
// import imageContent3tablet from "../../images/home/tablet/3.jpg";
// import imageContent1desktop from "../../images/home/desktop/1.jpg";
// import imageContent2desktop from "../../images/home/desktop/2.jpg";
// import imageContent3desktop from "../../images/home/desktop/3.jpg";
// import storyImage1mobile from "../../images/stories/mobile/4.jpg";
// import storyImage1desktop from "../../images/stories/desktop/4.jpg";
// import storyImage2mobile from "../../images/stories/mobile/cityscapes.jpg";
// import storyImage2desktop from "../../images/stories/desktop/cityscapes.jpg";
// import storyImage3mobile from "../../images/stories/mobile/18-days-voyage.jpg";
// import storyImage3desktop from "../../images/stories/desktop/18-days-voyage.jpg";
// import storyImage4mobile from "../../images/stories/mobile/architecturals.jpg";
// import storyImage4desktop from "../../images/stories/desktop/architecturals.jpg";

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

console.log(storyImagesMobile);

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
