import React, { FC } from "react";
import { Button } from "../Button/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./_button-arrow.scss";

interface PropsButtonArrow {
  text: string;
  theme?: "dark" | "light";
  isSpaceBetween?: boolean;
  onClick?: () => void;
}

export const ButtonArrow: FC<PropsButtonArrow> = ({
  text,
  theme = "dark",
  isSpaceBetween = false,
  onClick,
}) => {
  return (
    <div
      className={`button-arrow button-arrow__${theme} ${
        isSpaceBetween ? "button-arrow__space-between" : ""
      }`}
    >
      <Button onClick={onClick} type="secondary" theme={theme} text={text} />
      <FaLongArrowAltRight />
    </div>
  );
};
