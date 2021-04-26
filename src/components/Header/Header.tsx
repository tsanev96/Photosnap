import React, { useState } from "react";
import { headerLinks } from "./headerData";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Line } from "../common/Line/Line";

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
      </div>

      <div className={`header__links ${isHamburgerMenuOpened ? "active" : ""}`}>
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
        <div className="header__invitation active">
          <Link to="/invitation">Get an invite</Link>
        </div>
      </div>
    </div>
  );
};
