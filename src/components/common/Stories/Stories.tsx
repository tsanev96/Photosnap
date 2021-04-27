import React, { FC } from "react";
import "./_stories.scss";

export const Stories: FC = ({ children }) => {
  return <div className="stories">{children}</div>;
};
