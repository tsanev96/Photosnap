import React, { FC } from "react";
import "./_boxes.scss";

export const Boxes: FC = ({ children }) => {
  return <div className="boxes">{children}</div>;
};
