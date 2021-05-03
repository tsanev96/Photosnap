import React from "react";
import { Story } from "../common/Card/Story";
import { ImageContent } from "../common/ImageText/ImageContent";
import { InfoImageDetailed } from "../common/InfoImageDetailed/InfoImageDetailed";
import { Stories as StoriesContainer } from "../common/Stories/Stories";
import { storiesData, teaserStoryData } from "./storiesData";
import "./_stories.scss";

export const Stories = () => {
  return (
    <div className="stories-wrapper">
      <ImageContent
        image={{
          mobile: teaserStoryData.image.mobile,
          tablet: teaserStoryData.image.tablet,
          desktop: teaserStoryData.image.desktop,
          alt: teaserStoryData.image.alt,
        }}
      >
        <InfoImageDetailed
          smallHeadline={teaserStoryData.smallHeadline}
          headline={teaserStoryData.headline}
          imageTakenInfo={teaserStoryData.imageTakenInfo}
          description={teaserStoryData.description}
          image={{
            mobile: teaserStoryData.image.mobile,
            tablet: teaserStoryData.image.tablet,
            desktop: teaserStoryData.image.desktop,
            alt: teaserStoryData.image.alt,
          }}
        />
      </ImageContent>
      <StoriesContainer>
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
      </StoriesContainer>
    </div>
  );
};
