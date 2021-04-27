import React from "react";
import { ImageText } from "../common/ImageText/ImageText";
import img1 from "../../images/home/mobile/create-and-share.jpg";
import { InfoText } from "../common/InfoText/InfoText";

export const Home = () => {
  return (
    <>
      <ImageText image={{ mobile: img1, tablet: img1, desktop: img1, alt: "" }}>
        <InfoText
          headline="some headline"
          copy="some copy"
          button={{ text: "click me" }}
        />
      </ImageText>
      <ImageText image={{ mobile: img1, tablet: img1, desktop: img1, alt: "" }}>
        <InfoText
          headline="some headline"
          copy="some copy"
          button={{ text: "click me" }}
          theme="light"
        />
      </ImageText>
    </>
  );
};
