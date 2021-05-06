import React, { FC } from "react";
import { PricingPlan } from "../../../types/interfaces/pricingPlan";
import { Button } from "../Button/Button";
import { Copy } from "../Copy/Copy";
import { Headline } from "../Headline/Headline";
import { ActionBoxMobile } from "./ActionBoxMobile";
import { ActionBoxTablet } from "./ActionBoxTablet";
import "./_action-box.scss";

export const ActionBox: FC<PricingPlan> = ({
  headline,
  description,
  button,
  price,
  theme = "dark",
}) => {
  const classNameRoot = "action-box";

  return (
    <div className={`${classNameRoot} ${classNameRoot}__${theme}`}>
      <div className={`${classNameRoot}__mobile`}>
        <ActionBoxMobile
          headline={headline}
          description={description}
          button={button}
          price={price}
          theme={theme}
        />
      </div>
      <div className={`${classNameRoot}__tablet`}>
        <ActionBoxTablet
          headline={headline}
          description={description}
          button={button}
          price={price}
          theme={theme}
        />
      </div>
    </div>
  );
};
