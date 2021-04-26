import React, { FC } from "react";
import "./_button.scss";
import { Link } from "react-router-dom";

interface PropsButton {
  text: string;
  pathname?: string;
  theme?: "dark" | "light";
}

export const Button: FC<PropsButton> = ({
  text,
  theme = "light",
  pathname,
}) => {
  const classes = `button ${
    theme === "light" ? "button__light" : "button__dark"
  }`;

  return (
    <>
      {pathname ? (
        <Link className={classes} to={pathname}>
          {text}
        </Link>
      ) : (
        <button className={classes}>{text}</button>
      )}
    </>
  );
};
