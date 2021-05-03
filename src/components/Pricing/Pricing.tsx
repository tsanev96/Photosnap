import React from "react";
import { ActionBox } from "../common/ActionBox/ActionBox";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { imageTextDataOne, pricingPlan } from "./pricingData";

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
      {pricingPlan.map((plan) => (
        <ActionBox
          headline={plan.headline}
          description={plan.description}
          button={{ text: "PICK PLAN" }}
          price={plan.price}
          theme={plan.theme}
        />
      ))}
    </div>
  );
};
