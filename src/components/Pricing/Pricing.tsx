import React, { useState, useEffect } from "react";
import { ActionBox } from "../common/ActionBox/ActionBox";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { InfoTextImage } from "../common/InfoTextImage/InfoTextImage";
import { Switch } from "../common/Switch/Switch";
import { FeaturePlans } from "../FeaturePlans/FeaturePlans";
import { imageInfoData } from "../Features/featuresData";
import { imageTextDataOne, pricingPlans, planFeatures } from "./pricingData";
import "./_pricing.scss";

export const Pricing = () => {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const onToggleChange = () => {
    setIsToggleOn((toggle) => !toggle);
  };

  useEffect(() => {
    if (isToggleOn) setIsMonthlyPayment(false);
    else setIsMonthlyPayment(true);
  }, [isToggleOn]);

  return (
    <div className="pricing-page">
      <ImageContent
        image={{
          mobile: imageTextDataOne.image.mobile,
          tablet: imageTextDataOne.image.tablet,
          desktop: imageTextDataOne.image.desktop,
          alt: imageTextDataOne.image.alt,
        }}
        isRowReversed={imageTextDataOne.isRowReversed}
      >
        <InfoText
          headline={imageTextDataOne.headline}
          copy={imageTextDataOne.copy}
          button={
            imageTextDataOne.button && { text: imageTextDataOne.button.text }
          }
          theme={imageTextDataOne.theme}
          isOpacity
        />
      </ImageContent>
      <Switch isToggleOn={isToggleOn} onChange={onToggleChange} />
      <div className="pricing-plans">
        {pricingPlans.map((plan) => (
          <ActionBox
            key={plan.headline}
            headline={plan.headline}
            description={plan.description}
            button={{ text: "PICK PLAN" }}
            payment={plan.payment}
            theme={plan.theme}
            isMonthlyPayment={isMonthlyPayment}
          />
        ))}
      </div>
      <FeaturePlans
        headline={planFeatures.headline}
        plans={planFeatures.plans}
      />
      <InfoTextImage
        headline={imageInfoData.headline}
        theme={imageInfoData.theme}
        image={{
          mobile: imageInfoData.image.mobile,
          tablet: imageInfoData.image.tablet,
          desktop: imageInfoData.image.desktop,
          alt: imageInfoData.image.alt,
        }}
        button={{ text: imageInfoData.button.text }}
      />
    </div>
  );
};
