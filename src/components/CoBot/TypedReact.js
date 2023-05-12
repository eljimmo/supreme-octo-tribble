import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedReact = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const options = {
        showCursor: true,
        strings: [
          "Click on the Bot icon to talk to Leibniz Bot",
          "Type in tell a joke, Leibniz Bot will tell you a joke.",
          "Created by the Leibniz Team."

        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000
      };

      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      };
    }, 1000);
  }, []);

  return (
    <div>
      <h3>
        <span ref={el} />
      </h3>
    </div>
  );
};

export default TypedReact;
