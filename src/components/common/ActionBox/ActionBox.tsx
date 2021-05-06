import React, { FC } from "react";
import { PricingPlan } from "../../../types/interfaces/pricingPlan";
import { ActionBoxMobile } from "./ActionBoxMobile";
import { ActionBoxTablet } from "./ActionBoxTablet";
import "./_action-box.scss";

export const ActionBox: FC<PricingPlan> = ({
  headline,
  description,
  button,
  payment,
  theme = "dark",
  isMonthlyPayment,
}) => {
  const classNameRoot = "action-box";

  return (
    <div className={`${classNameRoot} ${classNameRoot}__${theme}`}>
      <div className={`${classNameRoot}__mobile`}>
        <ActionBoxMobile
          headline={headline}
          description={description}
          button={button}
          payment={payment}
          theme={theme}
          isMonthlyPayment={isMonthlyPayment}
        />
      </div>
      <div className={`${classNameRoot}__tablet`}>
        <ActionBoxTablet
          headline={headline}
          description={description}
          button={button}
          payment={payment}
          theme={theme}
          isMonthlyPayment={isMonthlyPayment}
        />
      </div>
    </div>
  );
};
