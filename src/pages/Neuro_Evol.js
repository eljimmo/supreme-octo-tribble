import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFive,


} from '../components/InfoSection/Data';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import HeroSection_2 from '../components/HeroSection/HeroIndex_2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import DesignSection from '../components/DesignSection';
import VideoSection from '../components/Videos_Section';

import ScApp from '../components/ScrollControl/src/App';
// import { HeroContainerCanva, HeroContainer, HeroContainer200, HeroContainerTransparent, HeroContainer400, HeroContent2, HeroContent3, HeroContent }  from "../components/HeroSection/HeroElements";
import Neuro_page from '../../src/components/ScrollControl/src/Neuro_Evo';
import './pages.css'
import Sidebar from '../components/Sidebar/index';
import { HeroContainer, HeroContainerTransparent } from '../components/HeroSection/HeroElements';
// import Kamdo_App from '../components/Kamdo/index';
import K_App from '../components/Kamdo/App';
import Frosted_App from '../components/FrostedGlass/index';
import InfoSection6 from '../components/InfoSection/index_Infosection4';



export default function Neuro_Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />


      <HeroContainerTransparent>
      <Frosted_App/>

</HeroContainerTransparent>
<InfoSection6 {...homeObjFive} />



      <div class="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#525252' }}>
  <div class="thing">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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

