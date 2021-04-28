import React, { FC } from "react";
import { FooterDesktop } from "./FooterDesktop/FooterDesktop";
import { FooterMobile } from "./FooterMobile/FooterMobile";
import "./_footer.scss";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <FooterMobile />
      <FooterDesktop />
    </div>
  );
};
