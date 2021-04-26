import React, { FC } from "react";
import "./_button.scss";

interface PropsButton {
  text: string;
}

export const Button: FC<PropsButton> = ({ text }) => {
  return <button className="button">{text}</button>;
};
