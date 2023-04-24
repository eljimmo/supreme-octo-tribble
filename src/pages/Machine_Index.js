import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,


} from '../components/InfoSection/Data';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import HeroSection_2 from '../components/HeroSection/HeroIndex_2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import DesignSection from '../components/DesignSection';
import VideoSection from '../components/Videos_Section';
import ScApp from '../components/ScrollControl/src/App';
import Neuro_page from '../components/ScrollControl/src/Neuro_Evo';
import { HeroContainer, HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import Sidebar from '../components/Sidebar/index';
import M_App from '../components/Merged/App';
import Machine_Services from '../components/Services/Machine_Service';
import InfoSection6 from '../components/InfoSection/index_Infosection4';
import StockSearch from '../views/StockSearch/Stock_Search_Index';


import './pages.css'



export default function Machine_page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainerTransparent>
      {/* <StockSearch/> */}


      <M_App/>
      </HeroContainerTransparent>
      {/* <InfoSection6 {...homeObjFour} /> */}

<StockSearch/>

      {/* <Machine_Services/> */}











      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
            >
              I am still in Development.
            </Button>
      </Affix>


        <Footer/>
        </>
  );
}

