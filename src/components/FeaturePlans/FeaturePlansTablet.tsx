import React, { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { FeaturePlansDetails } from "../../types/interfaces/featurePlans";
import { Copy } from "../common/Copy/Copy";
import { Headline } from "../common/Headline/Headline";

export const FeaturePlansTablet: FC<FeaturePlansDetails> = ({
  headline,
  plans,
}) => {
  return (
    <div className="feature-plans__tablet">
      <Headline text={headline} level="h3" centered />
      <div className="feature-plans__upper">
        <Headline level="h2" text={headline} />
        <Copy text="BASIC" />
        <Copy text="PRO" />
        <Copy text="BUSINESS" />
      </div>

      <div className="feature-plans__bottom">
        {plans.map((plan) => (
          <div className="feature-plans__feature">
            <Headline level="h5" text={plan.feature} />
            <div className="icon">{plan.basic && <FaCheck />}</div>
            <div className="icon">{plan.pro && <FaCheck />}</div>
            <div className="icon">{plan.business && <FaCheck />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
