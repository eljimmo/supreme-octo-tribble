import React, { useState } from "react";
import { Scrollspy } from "@makotot/ghostui";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div id="header" className={navbar ? "sticky" : ""}>
      <div className="desktopHeader">
        <div>
          <a href="/" className="logo">
            <span>Maverick</span>
            <Logo className="headerLogo" />
          </a>
        </div>
        <Scrollspy
          className="desktopMenu"
          items={["hero", "about", "projects", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Scrollspy>
      </div>

      <div className="mobileHeader">
        <div>
          <a href="/" className="logo">
            <span>Maverick</span>
            <Logo className="headerLogo" />
          </a>
        </div>
        <Scrollspy
          className={navbar ? "mobileMenu sticky" : "mobileMenu"}
          items={["hero", "about", "projects", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Scrollspy>
      </div>
    </div>
  );
};

export default Header;
