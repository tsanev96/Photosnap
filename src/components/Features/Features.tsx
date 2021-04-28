import React from "react";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { featureImageContentData } from "./featuresData";

export const Features = () => {
  return (
    <div className="features">
      <ImageContent
        image={{
          mobile: featureImageContentData.image.mobile,
          tablet: featureImageContentData.image.tablet,
          desktop: featureImageContentData.image.desktop,
          alt: featureImageContentData.image.alt,
        }}
        isRowReversed={featureImageContentData.isRowReversed}
      >
        <InfoText
          headline={featureImageContentData.headline}
          copy={featureImageContentData.copy}
          theme={featureImageContentData.theme}
          isOpacity
        />
      </ImageContent>
    </div>
  );
};
