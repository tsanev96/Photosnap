import React, { FC } from "react";
import { ImageDetails } from "../../../types/interfaces/imageDetails";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import "./_info-image-detailed.scss";

interface PropsInfoImageDetailed {
  smallHeadline: string;
  headline: string;
  imageTakenInfo: {
    data: string;
    by: string;
  };
  description: string;
  image: ImageDetails;
  theme?: "dark" | "light";
}

export const InfoImageDetailed: FC<PropsInfoImageDetailed> = ({
  smallHeadline,
  headline,
  imageTakenInfo,
  description,
  image,
  theme = "light",
}) => {
  const classNameWrapper = "info-image-detailed";

  return (
    <div
      className={`${classNameWrapper} ${classNameWrapper}__${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <Copy theme={theme} text={smallHeadline} isOpacity size="sm" />
      <Headline theme={theme} level="h2" text={headline} />
      <div className={`${classNameWrapper}__author`}>
        <Copy theme={theme} text={imageTakenInfo.data} isOpacity size="sm" />
        <Copy theme={theme} text={imageTakenInfo.by} isOpacity size="sm" />
      </div>
      <Copy theme={theme} text={description} isOpacity />
      <ButtonArrow theme={theme} text="READ THE STORY" />
      <div className={`${classNameWrapper}__img-container`}>
        <img
          className={`${classNameWrapper}__tablet`}
          src={image.tablet}
          alt={image.alt}
        />
        <img
          className={`${classNameWrapper}__desktop`}
          src={image.desktop}
          alt={image.alt}
        />
      </div>
    </div>
  );
};
