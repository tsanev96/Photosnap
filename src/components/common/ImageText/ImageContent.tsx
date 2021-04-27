import React, { FC } from "react";
import "./_image-content.scss";

interface PropsImageText {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
  isRowReversed?: boolean;
}

export const ImageContent: FC<PropsImageText> = ({
  image,
  isRowReversed = false,
  children,
}) => {
  return (
    <div
      className={`image-content ${
        isRowReversed ? "image-content__row-reversed" : ""
      }`}
    >
      <div className="image-content__img-container">
        <img
          className="image-content__mobile"
          src={image.mobile}
          alt={image.alt}
        />
        <img
          className="image-content__tablet"
          src={image.tablet}
          alt={image.alt}
        />
        <img
          className="image-content__desktop"
          src={image.desktop}
          alt={image.alt}
        />
      </div>
      <div className="image-content__content">{children}</div>
    </div>
  );
};
