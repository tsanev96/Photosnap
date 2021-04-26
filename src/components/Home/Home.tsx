import React from "react";
import { ImageText } from "../common/ImageText/ImageText";
import img1 from "../../images/home/mobile/create-and-share.jpg";

export const Home = () => {
  return (
    <>
      <ImageText
        image={{ mobile: img1, tablet: img1, desktop: img1, alt: "" }}
      />
    </>
  );
};
