import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,


} from '../components/InfoSection/Data';
// import Services from '../components/Services';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import HeroSection_2 from '../components/HeroSection/HeroIndex_2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import DesignSection from '../components/DesignSection';
import VideoSection from '../components/Videos_Section';
// import Services from '../components/Services';
// import App from '../components/flex_pages/src/App';
import ScApp from '../components/ScrollControl/src/App';
// import HeroSection_3 from '../components/HeroSection/HeroIndex_3';
import Moksha from '../components/Moksha';
// import { HeroContainerCanva, HeroContainer, HeroContainer200, HeroContainerTransparent, HeroContainer400, HeroContent2, HeroContent3, HeroContent }  from "../components/HeroSection/HeroElements";
import Neuro_page from '../../src/components/ScrollControl/src/Neuro_Evo';
import './pages.css'



export default function Neuro_Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />



      <div class="wrapper">
  <div class="thing">Neuro-evolution.</div>
</div>

      <div style={{ color: 'white' }}>
      Neuro-evolution.
                          <br />
                          Neuro-evolution.
                                        <br />


                                        Neuro-evolution.
                                                      <br />
            </div>



      <div style={{ color: 'white' }}>
      Neuro-evolution.
                          <br />
                          Neuro-evolution.
                                        <br />


                                        Neuro-evolution.
                                                      <br />
            </div>


      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
            >
              I am still in Development.
            </Button>
      </Affix>
      {/* <HeroSection />    */}
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <VideoSection/> */}
      {/* <App/> */}
      {/* <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjOne}/> */}
        {/* <HeroSection_2 />  */}
        {/* <HeroSection_3 /> */}
        {/* <DesignSection /> */}
        {/* <ScApp/> */}
        {/* <HeroContainerTransparent> */}
        {/* <Moksha/> */}
        {/* </HeroContainerTransparent> */}
        {/* <Neuro_page/> */}
        {/* <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjTwo} /> */}

        <Footer/>
    </>
  );
}
