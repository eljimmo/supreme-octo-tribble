import React, { useEffect } from "react";
import Typed from "typed.js";
import { PurpleServicesH2 } from "./ServicesElements";

const TypedReact2 = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const options = {
        showCursor: true,
        strings: [
          "Artificial Intelligence as a Service",
          "Create your own AI Agent, get stock recommendations and predictions.",
          "Created by the Project Leibniz Team."

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
    <div color="white">
      <PurpleServicesH2>
        <span ref={el} />
      </PurpleServicesH2>
    </div>
  );
};

export default TypedReact2;
