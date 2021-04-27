import React, { FC } from "react";
import { ButtonArrow } from "../ButtonArrow/ButtonArrow";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { Line } from "../Line/Line";
import "./_card.scss";

interface PropsCard {
  headline: string;
  copy: string;
  image: {
    mobile: string;
    desktop: string;
    alt: string;
  };
}

export const Card: FC<PropsCard> = ({ headline, copy, image }) => {
  return (
    <div className="card">
      <Headline level="h4" text={headline} theme="light" />
      <Copy text={copy} theme="light" />
      <Line theme="light" />
      <ButtonArrow isSpaceBetween text="read story" theme="light" />
      <img className="card__mobile-image" src={image.mobile} alt={image.alt} />
      <img
        className="card__desktop-image"
        src={image.desktop}
        alt={image.alt}
      />
    </div>
  );
};
