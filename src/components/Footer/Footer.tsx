import React, { FC } from "react";
import { ColorfulTriangle } from "../common/ColorfulTriangle/ColorfulTriangle";
import { Headline } from "../common/Headline/Headline";
import { FooterBottom } from "./FooterBottom";
import { FooterLinks } from "./FooterLinks";
import { FooterSocials } from "./FooterSocials";
import "./_footer.scss";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__headline">
        <ColorfulTriangle />
        <Headline theme="light" level="h3" text="PHOTOSNAP" />
      </div>
      <FooterSocials />
      <FooterLinks />
      <FooterBottom />
    </div>
  );
};
