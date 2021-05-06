import React, { FC } from "react";
import { PricingPlan } from "../../../types/interfaces/pricingPlan";
import { Button } from "../Button/Button";
import { ColorfulRectangle } from "../ColorfulRectangle/ColorfulRectangle";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";

export const ActionBoxTablet: FC<PricingPlan> = ({
  headline,
  description,
  button,
  payment,
  isMonthlyPayment,
  theme,
}) => {
  const classNameRoot = "action-box";
  return (
    <>
      {theme === "light" ? (
        <ColorfulRectangle className={`${classNameRoot}__rect`} />
      ) : null}
      <div className={`${classNameRoot}__left-side`}>
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
        {button && (
          <Button
            className={`${classNameRoot}__button`}
            theme={theme === "light" ? "dark" : "light"}
            text={button.text}
          />
        )}
      </div>
      <div className={`${classNameRoot}__right-side`}>
        <Headline
          className={`${classNameRoot}__price`}
          theme={theme}
          level="h2"
          text={isMonthlyPayment ? payment.monthly : payment.yearly}
        />
        <Copy
          className={`${classNameRoot}__payment-time`}
          isOpacity
          theme={theme}
          text={isMonthlyPayment ? "per month" : "per year"}
        />
      </div>
    </>
  );
};
