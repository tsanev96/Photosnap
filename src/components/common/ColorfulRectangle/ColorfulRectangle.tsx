import React, { FC } from "react";
import "./_colorful-rectangle.scss";

interface PropsColorfulRectangle {
  className?: string;
}

export const ColorfulRectangle: FC<PropsColorfulRectangle> = ({
  className = "",
}) => {
  return <div className={`${className} colorful-rectangle`} />;
};
