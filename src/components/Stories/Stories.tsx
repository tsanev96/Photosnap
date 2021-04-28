import React from "react";
import { Story } from "../common/Card/Story";
import { Stories as StoriesContainer } from "../common/Stories/Stories";
import { storiesData } from "./storiesData";

export const Stories = () => {
  return (
    <div>
      {/* {Object.values(storyImageMobile).map((el) => (
        <img src={el.default} alt="" />
      ))} */}

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
        some
      </StoriesContainer>
    </div>
  );
};
