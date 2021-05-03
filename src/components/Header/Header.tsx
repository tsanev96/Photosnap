import React, { useState } from "react";
import { headerLinks } from "./headerData";
import { Link } from "react-router-dom";
import { Line } from "../common/Line/Line";
import { Button } from "../common/Button/Button";
import { Headline } from "../common/Headline/Headline";
import { ColorfulTriangle } from "../common/ColorfulTriangle/ColorfulTriangle";
import "./_header.scss";

export const Header = () => {
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);

  const classNameWrapper = "header";
  return (
    <div className={classNameWrapper}>
      <div className={`${classNameWrapper}__front`}>
        <div className={`${classNameWrapper}__headline`}>
          <ColorfulTriangle />
          <Link to="/">
            <Headline level="h3" theme="dark" text="PHOTOSNAP" />
          </Link>
        </div>
        <div className={`${classNameWrapper}__menu-wrap`}>
          <div
            className={`${classNameWrapper}__hamburger-menu ${
              isHamburgerMenuOpened ? "active" : ""
            }`}
            onClick={() => setIsHamburgerMenuOpened(!isHamburgerMenuOpened)}
          >
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className={`${classNameWrapper}__links`}>
          <nav>
            <ul>
              {headerLinks.map((link) => (
                <li key={link.pathname}>
                  <Link to={link.pathname}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`${classNameWrapper}__invitation`}>
            <Button text="get an invite" theme="light" />
          </div>
        </div>
      </div>

      <div
        className={`${classNameWrapper}__links-mobile ${
          isHamburgerMenuOpened ? "active" : ""
        }`}
      >
        <nav>
          <ul>
            {headerLinks.map((link) => (
              <li key={link.pathname}>
                <Link
                  onClick={() => setIsHamburgerMenuOpened(false)}
                  to={link.pathname}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Line />
        <div className={`${classNameWrapper}__invitation`}>
          <Button text="get an invite" />
        </div>
      </div>
    </div>
  );
};
