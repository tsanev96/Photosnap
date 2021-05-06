import React from "react";
import { ActionBox } from "../common/ActionBox/ActionBox";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { Switch } from "../common/Switch/Switch";
import { imageTextDataOne, pricingPlans } from "./pricingData";
import "./_pricing.scss";

export const Pricing = () => {
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
      <Switch />
      <div className="pricing-plans">
        {pricingPlans.map((plan) => (
          <ActionBox
            key={plan.headline}
            headline={plan.headline}
            description={plan.description}
            button={{ text: "PICK PLAN" }}
            price={plan.price}
            theme={plan.theme}
          />
        ))}
      </div>
    </div>
  );
};
