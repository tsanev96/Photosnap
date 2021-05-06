import React, { FC } from "react";
import { PricingPlan } from "../../../types/interfaces/pricingPlan";
import { Button } from "../Button/Button";
import { ColorfulRectangle } from "../ColorfulRectangle/ColorfulRectangle";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";

export const ActionBoxMobile: FC<PricingPlan> = ({
  headline,
  description,
  button,
  price,
  theme,
}) => {
  const classNameRoot = "action-box";
  return (
    <>
      {theme === "light" ? (
        <ColorfulRectangle className={`${classNameRoot}__rect`} />
      ) : null}
      <Headline
        className={`${classNameRoot}__headline`}
        theme={theme}
        level="h5"
        text={headline}
      />
      <Copy
        className={`${classNameRoot}__description`}
        isOpacity
        theme={theme}
        text={description}
      />
      <Headline
        className={`${classNameRoot}__price`}
        theme={theme}
        level="h2"
        text={price.monthly}
      />
      <Copy
        className={`${classNameRoot}__payment-time`}
        isOpacity
        theme={theme}
        text="per month"
      />
      {button && (
        <Button
          className={`${classNameRoot}__button`}
          theme={theme === "light" ? "dark" : "light"}
          text={button.text}
        />
      )}
    </>
  );
};
