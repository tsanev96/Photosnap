import React, { useState } from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import "./_switch.scss";

export const Switch = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const onToggleChange = () => setIsToggleOn((toggle) => !toggle);

  const classNameRoot = "switch";

  return (
    <div className={classNameRoot}>
      <span
        className={`${classNameRoot}__left ${isToggleOn ? "" : "selected"}`}
      >
        Monthly
      </span>
      <ToggleButton onChange={onToggleChange} />
      <span
        className={`${classNameRoot}__right ${isToggleOn ? "selected" : ""}`}
      >
        Yearly
      </span>
    </div>
  );
};
