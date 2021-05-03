import React, { FC } from "react";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import "./_action-box.scss";

interface PropsActionBox {
  headline: string;
  description: string;
  button: {
    text: string;
  };
  price: {
    monthly: string;
    yearly: string;
  };
  theme?: "dark" | "light";
}
export const ActionBox: FC<PropsActionBox> = ({
  headline,
  description,
  button,
  price,
  theme = "dark",
}) => {
  const classNameWrapper = "action-box";

  return (
    <div className={`${classNameWrapper} ${classNameWrapper}__${theme}`}>
      <Headline
        className={`${classNameWrapper}__headline`}
        theme={theme}
        level="h5"
        text={headline}
      />
      <Copy
        className={`${classNameWrapper}__description`}
        isOpacity
        theme={theme}
        text={description}
      />
      <Headline
        className={`${classNameWrapper}__price`}
        theme={theme}
        level="h2"
        text={price.monthly}
      />
      <Copy
        className={`${classNameWrapper}__payment-time`}
        isOpacity
        theme={theme}
        text="per month"
      />
      <Button
        className={`${classNameWrapper}__button`}
        theme={theme === "light" ? "dark" : "light"}
        text={button.text}
      />
    </div>
  );
};
