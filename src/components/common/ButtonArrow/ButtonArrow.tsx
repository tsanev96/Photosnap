import React, { FC } from "react";
import { Button } from "../Button/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

interface PropsButtonArrow {
  text: string;
  theme: "dark" | "light";
}

export const ButtonArrow: FC<PropsButtonArrow> = ({ text, theme }) => {
  return (
    <div className={`button-arrow button-arrow__${theme}`}>
      <Button text={text} />
      <FaLongArrowAltRight />
    </div>
  );
};
