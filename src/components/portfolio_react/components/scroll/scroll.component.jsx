import React, { useState } from "react";
import { ReactComponent as ScrollArrow } from "../../assets/scroll.svg";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      {isVisible ? (
        <div onClick={scrollToTop} className="scroll_up">
          <ScrollArrow />
        </div>
      ) : null}
    </>
  );
};

export default Scroll;
