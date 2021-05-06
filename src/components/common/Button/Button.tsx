import React, { FC } from "react";
import "./_button.scss";
import { Link } from "react-router-dom";

interface PropsButton {
  text: string;
  pathname?: string;
  theme?: "dark" | "light";
  type?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const Button: FC<PropsButton> = ({
  text,
  theme = "light",
  pathname,
  type = "primary",
  onClick,
  className = "",
}) => {
  const classes = `button button__${theme} button__${type} ${className}`;

  return (
    <>
      {pathname ? (
        <Link onClick={onClick} className={classes} to={pathname}>
          {text}
        </Link>
      ) : (
        <button onClick={onClick} className={classes}>
          {text}
        </button>
      )}
    </>
  );
};
