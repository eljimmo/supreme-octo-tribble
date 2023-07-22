import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { Affix, rem, Button } from '@mantine/core';
import Footer from '../components/Footer/index';
import { HeroContainerTransparent, HeroContainerCanva, HeroContainer } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
import BOTA from '../components/CoBot/App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';
// import ScApp from '../components/ScrollControl/src/App';
import Heroartificialintelligence from "../components/portfolio_react/components/hero/hero.artificialintelligence";
import Artificialintelligenceabout from "../components/portfolio_react/components/about/about.artificialintelligence";
import Experience from "../components/MachineLearning/src/components/experience/Expreience";
// import SectorData from "../components/CoBot/widgets/SectorData";
import Videoapp from '../components/VideoTexture/App';
// import Rootapp from '../components/Portals/index';
import Portalapp from '../components/Portals/App';
import HeroSection from '../components/HeroSection/index';

export default function WelcomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
          <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <HeroContainerCanva>
      <FrostedApp/>
</HeroContainerCanva> */}
<HeroSection/>
<Videoapp/>

{/* <Heroartificialintelligence/> */}

<InfoSection {...homeObjOne} />
{/* <ScApp/> */}
{/* <Affix position={{ bottom: rem(20), left: rem(20) }}> */}
  {/* <Button
              variant="outline"
              color="violet"
            > */}
            <BOTA/>
            {/* BOTA BOT */}
            {/* </Button> */}

      {/* </Affix> */}
      {/* <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
              color="green"
            >
               Galatians 6:7–9
            </Button>
      </Affix> */}
          {/* <Artificialintelligenceabout/> */}
          {/* <HeroContainerCanva> */}
           {/* </HeroContainerCanva> */}
          {/* <Experience/> */}
          {/* <HeroContainerCanva> */}
                      {/* <Videoapp/> */}

          {/* <Rootapp/> */}
          {/* <Portalapp/> */}
          {/* </HeroContainerCanva> */}



        <Footer/>
    </>
  );
}

