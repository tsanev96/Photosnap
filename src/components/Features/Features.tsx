import React from "react";
import { Box } from "../common/Box/Box";
import { Boxes } from "../common/Boxes/Boxes";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import {
  featureImageContentData,
  boxesFirstData,
  boxesSecondData,
} from "./featuresData";

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
      <Boxes>
        {boxesFirstData.map(({ headline, copy, icon }) => (
          <Box key={headline} headline={headline} copy={copy} icon={icon} />
        ))}
      </Boxes>
      <Boxes>
        {boxesSecondData.map(({ headline, copy, icon }) => (
          <Box key={headline} headline={headline} copy={copy} icon={icon} />
        ))}
      </Boxes>
    </div>
  );
};
