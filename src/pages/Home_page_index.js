import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
} from '../components/InfoSection/Data';
import { Affix, Button, rem } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import ScApp from '../components/ScrollControl/src/App';
import Sidebar from '../components/Sidebar/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';


export default function HomePage() {
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
<ScApp/>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
              fullWidth="true"
            >
             Guidance Bot
            </Button>
      </Affix>
        <Footer/>
    </>
  );
}

