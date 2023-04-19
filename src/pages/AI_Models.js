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
// import { HeroContainerCanva, HeroContainer, HeroContainer200, HeroContainerTransparent, HeroContainer400, HeroContent2, HeroContent3, HeroContent }  from "../components/HeroSection/HeroElements";
import Neuro_page from '../../src/components/ScrollControl/src/Neuro_Evo';
import './pages.css'
import Sidebar from '../components/Sidebar/index';



export default function AI_page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />


      <div class="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#525252' }}>
  <div class="thing">AI MODELS.</div>
</div>

      <div style={{ color: 'white' }}>
      AI MODELS.
                          <br />
                          AI MODELS.
                                        <br />


                                        AI MODELS.
                                                      <br />
            </div>


      <div style={{ color: 'white' }}>
AI Models                          
<br />
AI Models                          
                                        <br />


                                        AI Models                          
                                                      <br />
            </div>

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

