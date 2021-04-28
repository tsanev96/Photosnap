import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ColorfulTriangle } from "../../common/ColorfulTriangle/ColorfulTriangle";
import { Headline } from "../../common/Headline/Headline";
import { FooterLinks } from "../FooterMobile/FooterLinks";
import { FooterSocials } from "../FooterMobile/FooterSocials";

export const FooterDesktop = () => {
  return (
    <div className="footer__desktop">
      <div className="footer__left-side">
        <div className="footer__headline-socials">
          <div className="footer__headline">
            <ColorfulTriangle />
            <Headline theme="light" level="h3" text="PHOTOSNAP" />
          </div>
          <div className="footer__links footer__links-tablet">
            <FooterLinks />
          </div>
          <FooterSocials />
        </div>
        {/* <div className="footer__links">
          <FooterLinks />
        </div> */}
      </div>
      <div className="footer__right-side">
        <div className="footer__invitation">
          GET AN INVITE <FaLongArrowAltRight />
        </div>
        <div className="footer__copyright">
          Copyright 2019. All Rights Reserved
        </div>
      </div>
    </div>
  );
};
