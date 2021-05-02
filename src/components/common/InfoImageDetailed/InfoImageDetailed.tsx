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
  return (
    <div
      className={`info-image-detailed info-image-detailed__${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <Copy theme={theme} text={smallHeadline} isOpacity size="sm" />
      <Headline theme={theme} level="h2" text={headline} />
      <div className="info-image-detailed__author">
        <Copy theme={theme} text={imageTakenInfo.data} isOpacity size="sm" />
        <Copy theme={theme} text={imageTakenInfo.by} isOpacity size="sm" />
      </div>
      <Copy theme={theme} text={description} isOpacity />
      <ButtonArrow theme={theme} text="READ THE STORY" />
    </div>
  );
};
