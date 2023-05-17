import React, { useState, useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  return (
    <div className="App">
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div>
            <div id="header" className={navbar ? "sticky" : ""}>
              <div className="desktopHeader">
                <div>
                  <a href="/" className="logo">
                    <span>Maverick</span>
                    <Logo className="headerLogo" />
                  </a>
                </div>
                <ul className="desktopMenu">
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[0]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#hero">Home</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[1]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[2]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#projects">Projects</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[3]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="mobileHeader">
                <div>
                  <a href="/" className="logo">
                    <span>Maverick</span>
                    <Logo className="headerLogo" />
                  </a>
                </div>
                <ul className="mobileMenu">
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[0]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#hero">Home</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[1]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#about">About</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === sectionRefs[2]
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#projects">Projects</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === "contact"
                        ? "active"
                        : ""
                    }
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div ref={sectionRefs[2]}>{props.children}</div>
          </div>
        )}
      </Scrollspy>
    </div>
  );
};

export default Header;
