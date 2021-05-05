import React, { FC, useState, useEffect } from "react";
import "./_toggle-button.scss";

interface PropsToggleButton {
  onChange?: (toggled: boolean) => void;
}

export const ToggleButton: FC<PropsToggleButton> = ({ onChange }) => {
  useEffect(() => {
    if (onChange) {
      onChange(isToggleOn);
    }
  });

  const [isToggleOn, setIsToggleOn] = useState(false);

  const onToggleChange = () => setIsToggleOn((toggle) => !toggle);

  return (
    <label onChange={onToggleChange} className="toggle-button">
      <input type="checkbox" />
      <span className="toggle-button__slider" />
    </label>
  );
};
