import React from "react";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { imageTextData } from "./homeData";

export const Home = () => {
  return (
    <div className="home">
      {imageTextData.map(
        ({ headline, copy, button, image, theme, isRowReversed }) => (
          <ImageContent
            image={{
              mobile: image.mobile,
              tablet: image.tablet,
              desktop: image.desktop,
              alt: image.alt,
            }}
            isRowReversed={isRowReversed}
          >
            <InfoText
              headline={headline}
              copy={copy}
              button={{ text: button.text }}
              isOpacity
            />
          </ImageContent>
        )
      )}
    </div>
  );
};
