import React, { useState } from 'react';
import { Affix, Button, rem } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import DesignSection from '../components/DesignSection';
// import { TopLine, Heading, WhiteTopLine, Heading2, Subtitle2, Column1 } from '../components/InfoSection/InfoElements';
import Sidebar from '../components/Sidebar/index';
// import styled, { keyframes } from "styled-components";

// import Services from '../components/Services';
// import { HeroBg, VideoBg } from '../components/HeroSection/HeroElements';
// import InfoSection from '../components/InfoSection';
// import InfoSectionCanva from '../components/InfoSection/index_Canvas';

// import {
//   homeObjOne,
//   homeObjTwo,
//   homeObjThree,


// } from '../components/InfoSection/Data';








export default function AboutIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (

    <div style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#040404' }}>


  
       
    <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />


<DesignSection/>

{/* <HeroBg>
        <VideoBg autoPlay loop muted src={require('../Assets/videos/iStock_optic.mp4').default} type='video/mp4' />

      </HeroBg> */}
  
      {/* <Services/> */}


{/* < InfoSection {...homeObjOne} />
< InfoSectionCanva {...homeObjTwo} />
< InfoSection {...homeObjThree} /> */}

 

      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
            >
              I am still in Development.
            </Button>
      </Affix>

        <Footer/>
        {/* // </HeroContainer>  */}
        </div>
        
  );
}


