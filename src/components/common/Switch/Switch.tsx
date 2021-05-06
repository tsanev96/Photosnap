import React from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import "./_switch.scss";

interface PropsSwitch {
  isToggleOn: boolean;
  onChange: () => void;
}

export const Switch: React.FC<PropsSwitch> = ({ isToggleOn, onChange }) => {
  const classNameRoot = "switch";

  return (
    <div className={classNameRoot}>
      <span
        className={`${classNameRoot}__left ${isToggleOn ? "" : "selected"}`}
      >
        Monthly
      </span>
      <ToggleButton onChange={onChange} />
      <span
        className={`${classNameRoot}__right ${isToggleOn ? "selected" : ""}`}
      >
        Yearly
      </span>
    </div>
  );
};
