import React, { FC, useState } from "react";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Line } from "../Line/Line";
import { StoryPopUp } from "../StoryPopUp/StoryPopUp";
import "./_story.scss";

interface PropsStory {
  headline: string;
  copy: string;
  image: {
    mobile: string;
    desktop: string;
    alt: string;
  };
}

export const Story: FC<PropsStory> = ({ headline, copy, image }) => {
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const closePopUp = () => setIsPopUpOpened(false);

  const openPopUp = () => setIsPopUpOpened(true);

  return (
    <div className="story">
      <Headline level="h4" text={headline} theme="light" />
      <Copy text={copy} theme="light" />
      <Line theme="light" />
      <ButtonArrow
        onClick={openPopUp}
        isSpaceBetween
        text="read story"
        theme="light"
      />
      <img
        className={`story__mobile-image ${isPopUpOpened ? "show" : ""}`}
        src={image.mobile}
        alt={image.alt}
      />
      <img
        className="story__desktop-image"
        src={image.desktop}
        alt={image.alt}
      />
      <StoryPopUp
        headline={headline}
        copy={copy}
        image={{ mobile: image.mobile, desktop: image.desktop, alt: "" }}
        onClick={closePopUp}
        isPopUpOpened={isPopUpOpened}
      />
    </div>
  );
};
