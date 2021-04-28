import React from "react";
import { FooterBottom } from "../FooterBottom";
import { FooterHeadline } from "../FooterHeadline";
import { FooterLinks } from "../FooterLinks";
import { FooterSocials } from "../FooterSocials";

export const FooterMobile = () => {
  return (
    <div className="footer__mobile">
      <FooterHeadline />
      <FooterSocials />
      <FooterLinks />
      <FooterBottom />
    </div>
  );
};
