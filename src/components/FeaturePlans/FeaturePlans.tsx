import React from "react";
import { FeaturePlansDetails } from "../../types/interfaces/featurePlans";
import { FeaturePlansMobile } from "./FeaturePlansMobile";
import { FeaturePlansTablet } from "./FeaturePlansTablet";
import "./_feature-plans.scss";

export const FeaturePlans: React.FC<FeaturePlansDetails> = ({
  headline,
  plans,
}) => {
  return (
    <div className="feature-plans">
      <FeaturePlansMobile headline={headline} plans={plans} />
      <FeaturePlansTablet headline={headline} plans={plans} />
    </div>
  );
};
