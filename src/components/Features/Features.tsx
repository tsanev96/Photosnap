import React from "react";
import { Box } from "../common/Box/Box";
import { Boxes } from "../common/Boxes/Boxes";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { InfoTextImage } from "../common/InfoTextImage/InfoTextImage";
import {
  imageContentData,
  boxesFeatureData,
  imageInfoData,
} from "./featuresData";

export const Features = () => {
  return (
    <div className="features">
      <ImageContent
        image={{
          mobile: imageContentData.image.mobile,
          tablet: imageContentData.image.tablet,
          desktop: imageContentData.image.desktop,
          alt: imageContentData.image.alt,
        }}
        isRowReversed={imageContentData.isRowReversed}
      >
        <InfoText
          headline={imageContentData.headline}
          copy={imageContentData.copy}
          theme={imageContentData.theme}
          isOpacity
        />
      </ImageContent>
      <Boxes twoColsTablet>
        {boxesFeatureData.map(({ headline, copy, icon }) => (
          <Box key={headline} headline={headline} copy={copy} icon={icon} />
        ))}
      </Boxes>
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
