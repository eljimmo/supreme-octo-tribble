import React, { useState, Suspense, useEffect, useMemo, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection/Index_Infosection2';
import InfoSection3 from '../components/InfoSection/Index_InfoSection3';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,

} from '../components/InfoSection/Data';
import DarkFooter from '../components/Footer/Dark_Footer';





export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />   

      <InfoSection {...homeObjOne} />

       <InfoSection2 {...homeObjTwo} />

      
        <InfoSection3 {...homeObjThree} /> 
        <DarkFooter />
 

    </>
  );
}




