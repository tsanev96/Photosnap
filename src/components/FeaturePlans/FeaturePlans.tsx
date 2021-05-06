import React from "react";
import { FaCheck } from "react-icons/fa";
import { FeaturePlansDetails } from "../../types/interfaces/featurePlans";
import { Copy } from "../common/Copy/Copy";
import { Headline } from "../common/Headline/Headline";
import "./_feature-plans.scss";

export const FeaturePlans: React.FC<FeaturePlansDetails> = ({
  headline,
  plans,
}) => {
  return (
    <div className="feature-plans">
      <Headline level="h5" text={headline} />

      <div className="feature-plans__features">
        {plans.map((plan) => (
          <div>
            <Headline level="h5" text={plan.feature} />
            <div className="feature-plans__plans">
              <div>
                <Copy text="BASIC" isOpacity />
                <div>{plan.basic && <FaCheck />}</div>
              </div>
              <div>
                <Copy text="PRO" isOpacity />
                <div>{plan.pro && <FaCheck />}</div>
              </div>
              <div>
                <Copy text="BUSINESS" isOpacity />
                <div>{plan.business && <FaCheck />}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
