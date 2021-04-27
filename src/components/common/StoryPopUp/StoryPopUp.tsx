import React, { FC } from "react";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import "./_story-pop-up.scss";

interface PropsStoryPop {
  headline: string;
  copy: string;
  image: {
    mobile: string;
    desktop: string;
    alt: string;
  };
  onClick?: () => void;
  isPopUpOpened: boolean;
}

export const StoryPopUp: FC<PropsStoryPop> = ({
  headline,
  copy,
  image,
  isPopUpOpened,
  onClick,
}) => {
  return (
    <div className={`story-pop-up ${isPopUpOpened ? "show" : ""}`}>
      <div className="story-pop-up__content">
        <button onClick={onClick} className="story-pop-up__close">
          close
        </button>
        <div className="story-pop-up__image-container">
          <img src={image.mobile} alt={image.alt} />
        </div>
        <div className="story-pop-up__info">
          <Headline level="h3" text={headline} />
          <Copy text={copy} />
        </div>
      </div>
    </div>
  );
};
