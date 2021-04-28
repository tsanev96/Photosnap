import React, { FC } from "react";
import "./_copy.scss";

interface PropsCopy {
  text: string;
  theme?: "dark" | "light";
  isOpacity?: boolean;
}

export const Copy: FC<PropsCopy> = ({
  text,
  theme = "dark",
  isOpacity = false,
}) => {
  return (
    <p className={`copy copy__${theme} copy__opacity-${isOpacity}`}>{text}</p>
  );
};
