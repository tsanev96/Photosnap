import React from "react";
import { Story } from "../common/Card/Story";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoText } from "../common/InfoText/InfoText";
import { Stories } from "../common/Stories/Stories";
import { imageTextData, storiesData } from "./homeData";

export const Home = () => {
  return (
    <div className="home">
      {imageTextData.map(
        ({ headline, copy, button, image, theme, isRowReversed }) => (
          <ImageContent
            key={headline}
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
              theme={theme}
              isOpacity
            />
          </ImageContent>
        )
      )}
      <Stories>
        {storiesData.map(({ headline, copy, image }) => (
          <Story
            key={headline}
            headline={headline}
            copy={copy}
            image={{
              mobile: image.mobile,
              desktop: image.desktop,
              alt: image.alt,
            }}
          />
        ))}
      </Stories>
    </div>
  );
};
