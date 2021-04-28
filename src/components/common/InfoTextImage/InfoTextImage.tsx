import React, { FC } from "react";
import { ImageDetails } from "../../../types/interfaces/imageDetails";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow";
import { ColorfulRectangle } from "../ColorfulRectangle/ColorfulRectangle";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import "./_info-text-image.scss";

interface PropsInfoTextImage {
  headline: string;
  button: {
    text: string;
  };
  image: ImageDetails;
  theme: "dark" | "light";
}

export const InfoTextImage: FC<PropsInfoTextImage> = ({
  headline,
  button,
  image,
  theme = "light",
}) => {
  return (
    <div className="info-text-image">
      <div className="info-text-image__colorful-rect">
        <ColorfulRectangle />
      </div>
      <div className="info-text-image__content">
        <Headline theme={theme} text={headline} level="h2" />
        <ButtonArrow theme={theme} text={button.text} />
      </div>
      <Image image={image} />
    </div>
  );
};
