import React, { FC } from "react";
import "./styles.scss";

interface PropsLine {
  theme?: "light" | "dark";
}

export const Line: FC<PropsLine> = ({ theme = "dark" }) => {
  return <div className={`line line__${theme}`} />;
};
