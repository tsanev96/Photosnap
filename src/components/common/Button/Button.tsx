import React, { FC } from "react";
import "./_button.scss";

interface PropsButton {
  text: string;
  theme?: "dark" | "light";
}

export const Button: FC<PropsButton> = ({ text, theme = "light" }) => {
  return (
    <button
      className={`button ${
        theme === "light" ? "button__light" : "button__dark"
      }`}
    >
      {text}
    </button>
  );
};
