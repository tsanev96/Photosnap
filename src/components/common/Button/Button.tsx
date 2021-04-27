import React, { FC } from "react";
import "./_button.scss";
import { Link } from "react-router-dom";

interface PropsButton {
  text: string;
  pathname?: string;
  theme?: "dark" | "light";
  type?: "primary" | "secondary";
}

export const Button: FC<PropsButton> = ({
  text,
  theme = "light",
  pathname,
  type = "primary",
}) => {
  const classes = `button button__${theme} button__${type}`;

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
