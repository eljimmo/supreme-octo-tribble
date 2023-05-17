import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { Affix, rem, Button } from '@mantine/core';
import Footer from '../components/Footer/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
// import CApp from '../components/Chatbot/index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';



export default function WelcomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
          <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainerTransparent>
      <FrostedApp/>
</HeroContainerTransparent>
<InfoSection {...homeObjOne} />
      {/* <Affix position={{ bottom: rem(20), left: rem(20) }}>
            <CApp/>
      </Affix> */}
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
              color="violet"
            >
               Galatians 6:7–9
            </Button>
      </Affix>
        <Footer/>
    </>
  );
}

