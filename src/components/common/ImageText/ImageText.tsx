import React, { FC } from "react";

interface PropsImageText {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    alt: string;
  };
}

export const ImageText: FC<PropsImageText> = ({ image, children }) => {
  return (
    <div className="image-text">
      <div className="image-text__img-container">
        <img src={image.desktop} alt={image.alt} />
      </div>
      <div className="image-text__content">{children}</div>
    </div>
  );
};
