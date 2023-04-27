import React, { useState } from 'react';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import { HeroContainer, HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import Sidebar from '../components/Sidebar/index';
import M_App from '../components/Merged/App';

// import StockSearch from '../views/StockSearch/Stock_Search_Index';


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

{/* <StockSearch/> */}

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

