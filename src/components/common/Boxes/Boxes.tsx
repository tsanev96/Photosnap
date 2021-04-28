import React, { FC } from "react";
import "./_boxes.scss";

interface BoxesProps {
  twoColsTablet?: boolean;
}

export const Boxes: FC<BoxesProps> = ({ children, twoColsTablet = false }) => {
  return (
    <div className={`boxes ${twoColsTablet && "boxes__two-cols-tablet"}`}>
      {children}
    </div>
  );
};
