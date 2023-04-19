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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import DesignSection from '../components/DesignSection';
import VideoSection from '../components/Videos_Section';
import styled from "styled-components";
import { TopLine, Heading } from '../components/InfoSection/InfoElements';
import Sidebar from '../components/Sidebar/index';


import './pages.css'





const Title = styled.h6`
  font-size: 7em;
  z-index: 5;
  text-transform: capitalize;
  color: black;


  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
`;



export default function About_Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />



<DesignSection/>

<TopLine>
About The Leibniz Analytica Project:
</TopLine>

      <div class="wrapper">
  <div class="thing">
    About Leibniz</div>
  <Heading>Understanding the Math based approach utilized</Heading>

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

