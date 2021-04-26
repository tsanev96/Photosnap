import React, { FC } from "react";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagram,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ColorfulTriangle } from "../common/ColorfulTriangle/ColorfulTriangle";
import { Headline } from "../common/Headline/Headline";
import { footerLinks } from "./footerData";
import "./_footer.scss";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__headline">
        <ColorfulTriangle />
        <Headline theme="light" level="h3" text="PHOTOSNAP" />
      </div>
      <div className="footer__socials">
        <div className="footer__social">
          <a href="https://www.facebook.com/">
            <FaFacebookSquare />
          </a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/">
            <FaYoutube />
          </a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/">
            <FaTwitterSquare />
          </a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/">
            <FaPinterestSquare />
          </a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/">
            <FaInstagram />
          </a>
        </div>
      </div>
      <ul className="footer__links">
        {footerLinks.map((link) => (
          <li>
            <Link to={link.pathname}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="footer__invitation">
        GET AN INVITE <FaLongArrowAltRight />
      </div>
      <div className="footer__copyright">
        Copyright 2019. All Rights Reserved
      </div>
    </div>
  );
};
