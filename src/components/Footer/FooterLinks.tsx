import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "./footerData";

export const FooterLinks = () => {
  const onClick = () => window.scrollTo(0, 0);
  return (
    <ul className="footer__links">
      {footerLinks.map((link) => (
        <li key={link.pathname}>
          <Link onClick={onClick} to={link.pathname}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
