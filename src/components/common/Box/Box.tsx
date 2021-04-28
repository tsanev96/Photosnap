import React, { FC } from "react";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import "./_box.scss";

interface PropsBox {
  headline: string;
  copy: string;
  icon: JSX.Element;
}

export const Box: FC<PropsBox> = ({ headline, copy, icon }) => {
  return (
    <div className="box">
      <div className="box__icon">{icon}</div>
      <Headline text={headline} level="h4" />
      <Copy text={copy} isOpacity />
    </div>
  );
};
