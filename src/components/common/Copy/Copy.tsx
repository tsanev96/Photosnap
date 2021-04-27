import React, { FC } from "react";

interface PropsCopy {
  text: string;
  theme?: "dark" | "light";
}

export const Copy: FC<PropsCopy> = ({ text, theme = "dark" }) => {
  return <p className={`copy copy__${theme}`}>{text}</p>;
};
