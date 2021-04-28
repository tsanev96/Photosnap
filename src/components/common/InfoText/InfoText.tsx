import React, { FC } from "react";
import { ImageDetails } from "../../../types/interfaces/imageDetails";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow";
import { ColorfulRectangle } from "../ColorfulRectangle/ColorfulRectangle";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import "./_info-text.scss";

interface PropsInfoText {
  headline: string;
  copy?: string;
  button?: {
    text: string;
  };
  theme?: "dark" | "light";
  isOpacity?: true | false;
}

export const InfoText: FC<PropsInfoText> = ({
  headline,
  copy,
  button,
  theme = "dark",
  isOpacity = false,
}) => {
  return (
    <div className={`info-text info-text__${theme}`}>
      <div className="info-text__colorful-rect-container">
        <ColorfulRectangle />
      </div>
      <Headline level="h2" text={headline} theme={theme} />
      {copy && <Copy text={copy} theme={theme} isOpacity={isOpacity} />}
      {button && <ButtonArrow text={button.text} theme={theme} />}
    </div>
  );
};
