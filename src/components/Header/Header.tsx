import React, { useState } from "react";
import { headerLinks } from "./headerData";
import { Link } from "react-router-dom";
import "./_header.scss";
import { Line } from "../common/Line/Line";
import { Button } from "../common/Button/Button";

export const Header = () => {
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);

  return (
    <div className="header">
      <div className="header__front">
        <div className="header__headline">
          <div className="header__triangle-icon" />
          PHOTOSNAP
        </div>
        <div className="header__menu-wrap">
          <div
            className={`header__hamburger-menu ${
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

        <div className="header__links">
          <nav>
            <ul>
              {headerLinks.map((link) => (
                <li key={link.pathname}>
                  <Link to={link.pathname}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__invitation">
            <Button text="get an invite" />
          </div>
        </div>
      </div>

      <div
        className={`header__links-mobile ${
          isHamburgerMenuOpened ? "active" : ""
        }`}
      >
        <nav>
          <ul>
            {headerLinks.map((link) => (
              <li key={link.pathname}>
                <Link to={link.pathname}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Line />
        <div className="header__invitation">
          <Button text="get an invite" />
        </div>
      </div>
    </div>
  );
};
