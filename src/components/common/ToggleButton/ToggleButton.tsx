import React, { FC } from "react";
import "./_toggle-button.scss";

interface PropsToggleButton {
  onClick?: () => void;
}

export const ToggleButton: FC<PropsToggleButton> = ({ onClick }) => {
  return (
    <label onClick={onClick} className="toggle-button">
      <input type="checkbox" />
      <span className="toggle-button__slider" />
    </label>
  );
};
