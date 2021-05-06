import React, { FC } from "react";
import "./_copy.scss";

interface PropsCopy {
  text: string;
  theme?: "dark" | "light";
  isOpacity?: boolean;
  size?: "sm" | "lg" | "xl";
  className?: string;
}

export const Copy: FC<PropsCopy> = ({
  text,
  theme = "dark",
  isOpacity = false,
  size = "lg",
  className = "",
}) => {
  return (
    <p
      className={`copy copy__${theme} copy__opacity-${isOpacity} copy__size-${size} ${className}`}
    >
      {text}
    </p>
  );
};
