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
import { HeroContainer, HeroContainerTransparent } from '../components/HeroSection/HeroElements'; 
import P_App from '../components/Perfomance/index';


export default function AI_page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainerTransparent>
      <P_App/>
</HeroContainerTransparent>

      <div class="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#525252' }}>
  

  <div class="thing">
    
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, arcu non iaculis fringilla, mauris leo pretium velit, at consectetur ante magna sed ante. In lacinia et dolor sed tincidunt. Vestibulum ut leo lacus. Nulla iaculis porttitor mi, vel pellentesque turpis sollicitudin et. Vivamus mollis condimentum lacus, id aliquet elit dictum nec. Donec elementum quis nulla vel malesuada. Curabitur arcu risus, pulvinar quis convallis quis, imperdiet vitae ipsum. Pellentesque interdum pellentesque elit, id eleifend ante molestie sed.
    
    </div>
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

