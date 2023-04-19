import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,


} from '../components/InfoSection/Data';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import HeroSection_2 from '../components/HeroSection/HeroIndex_2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import DesignSection from '../components/DesignSection';
import VideoSection from '../components/Videos_Section';
import ScApp from '../components/ScrollControl/src/App';
import Neuro_page from '../../src/components/ScrollControl/src/Neuro_Evo';
import { HeroContainer } from '../components/HeroSection/HeroElements';
import Sidebar from '../components/Sidebar/index';

import './pages.css'



export default function Reinforc_page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer >

      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />





      <div class="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#525252' }}>
  <div class="thing">                      
      Reinforcement Page.
      </div>
</div>

      <div style={{ color: 'white' }}>
      Reinforcement Page.
                                <br />
                                Reinforcement Page.
                                                                        <br />


                                                                        Reinforcement Page.
                                                                                                                              <br />
            </div>




      <div style={{ color: 'white' }}>
Reinforcement Page
                          <br />
                          Reinforcement Page
                                        <br />


                                        Reinforcement Page
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
        </HeroContainer >
  );
}

