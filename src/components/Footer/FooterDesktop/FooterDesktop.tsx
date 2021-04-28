import React from "react";
import { FooterBottom } from "../FooterBottom";
import { FooterHeadline } from "../FooterHeadline";
import { FooterLinks } from "../FooterLinks";
import { FooterSocials } from "../FooterSocials";

export const FooterDesktop = () => {
  return (
    <div className="footer__desktop">
      <div className="footer__left-side">
        <div className="footer__headline-socials">
          <FooterHeadline />
          <div className="footer__links footer__links-tablet">
            <FooterLinks />
          </div>
          <FooterSocials />
        </div>
        <div className="footer__links footer__links-desktop">
          <FooterLinks />
        </div>
      </div>
      <div className="footer__right-side">
        <FooterBottom />
      </div>
    </div>
  );
};
