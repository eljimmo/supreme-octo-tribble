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


import './pages.css'



export default function Machine_page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto', background: 'white' }}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainerTransparent>


      <M_App/>
      </HeroContainerTransparent>
      <InfoSection {...homeObjFour} />



      <Machine_Services/>

      <div class="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#525252' }}>
  <div class="thing">                      
      Reinforcement Page. 

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
    </div>
  );
}

