import React, { FC } from "react";
import { Button } from "../Button/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./_button-arrow.scss";

interface PropsButtonArrow {
  text: string;
  theme?: "dark" | "light";
}

export const ButtonArrow: FC<PropsButtonArrow> = ({ text, theme = "dark" }) => {
  return (
    <div className={`button-arrow button-arrow__${theme}`}>
      <Button type="secondary" theme={theme} text={text} />
      <FaLongArrowAltRight />
    </div>
  );
};
