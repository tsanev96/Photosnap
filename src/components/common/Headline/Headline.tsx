import React, { FC } from "react";
import "./_headline.scss";

interface PropsHeadline {
  level: "h1" | "h2" | "h3" | "h4" | "h5";
  text: string;
  theme?: "dark" | "light";
}

export const Headline: FC<PropsHeadline> = ({
  level = "h1",
  text,
  theme = "light",
}) => {
  const classes = `headline ${level} headline__${theme}`;
  // NEEDS REWORK
  return <h1 className={classes}>{text}</h1>;
};
