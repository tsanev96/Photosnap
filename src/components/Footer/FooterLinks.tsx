import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "./footerData";

export const FooterLinks = () => {
  return (
    <ul className="footer__links">
      {footerLinks.map((link) => (
        <li key={link.pathname}>
          <Link to={link.pathname}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};
