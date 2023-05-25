import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { Affix, rem, Button } from '@mantine/core';
import Footer from '../components/Footer/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
import CoBOTApp from '../components/CoBot/App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';
import ScApp from '../components/ScrollControl/src/App';
// import DashboardContent from '../components/Stock_Portfolio/Market_News';
// import SectorData from "../components/Stock_Portfolio/Sector_Data";




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

<ScApp/>
<Affix position={{ bottom: rem(20), left: rem(20) }}>
            <CoBOTApp/>
      </Affix>
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

