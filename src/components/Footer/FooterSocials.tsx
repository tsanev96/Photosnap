import React from "react";
import { footerSocials } from "./footerData";

export const FooterSocials = () => {
  return (
    <div className="footer__socials">
      {footerSocials.map((social) => (
        <div key={social.pathname} className="footer__social">
          <a href={social.pathname} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
};
