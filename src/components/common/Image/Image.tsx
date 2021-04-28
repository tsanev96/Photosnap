import React, { FC } from "react";
import { ImageDetails } from "../../../types/interfaces/imageDetails";
import "./_image.scss";

interface PropsImage {
  image: ImageDetails;
}

export const Image: FC<PropsImage> = ({ image }) => {
  return (
    <div className="image">
      <img className="image__mobile" src={image.mobile} alt={image.alt} />
      <img className="image__tablet" src={image.tablet} alt={image.alt} />
      <img className="image__desktop" src={image.desktop} alt={image.alt} />
    </div>
  );
};
