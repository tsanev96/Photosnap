import React, { FC } from "react";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import "./_info-text.scss";

interface PropsInfoText {
  headline: string;
  copy: string;
  button: {
    text: string;
  };
  theme?: "dark" | "light";
}

export const InfoText: FC<PropsInfoText> = ({
  headline,
  copy,
  button,
  theme = "dark",
}) => {
  return (
    <div className={`info-text info-text__${theme}`}>
      <Headline level="h2" text={headline} theme={theme} />
      <Copy text={copy} theme={theme} />
      <ButtonArrow text={button.text} theme={theme} />
    </div>
  );
};
