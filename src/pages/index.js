import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,

} from '../components/InfoSection/Data';
// reactstrap components

// import AnimatedCursor from "react-animated-cursor";


function Welcome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
                 {/* <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='	0, 102, 255'
      outerAlpha={0.2}
      innerScale={3.7}
      outerScale={2}
      trailingSpeed={9}
      outerStyle={{
        border: '3px outset #cc0000'
      }} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />

            <div className="content">
        </div>

        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />

    </>
  );
}

export default Welcome;
