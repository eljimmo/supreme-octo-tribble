import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';

import {
  homeObjOne,
  // homeObjTwo,
  // homeObjThree,
  // homeObjFive,


} from '../components/InfoSection/Data';
import { Affix, Button, rem } from '@mantine/core';
// import HeroSection_2 from '../components/HeroSection/HeroIndex_2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
// import DesignSection from '../components/DesignSection';
// import VideoSection from '../components/Videos_Section';

import ScApp from '../components/ScrollControl/src/App';
// import { HeroContainerCanva, HeroContainer, HeroContainer200, HeroContainerTransparent, HeroContainer400, HeroContent2, HeroContent3, HeroContent }  from "../components/HeroSection/HeroElements";
// import './pages.css'
import Sidebar from '../components/Sidebar/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import Kamdo_App from '../components/Kamdo/index';
import Frosted_App from '../components/FrostedGlass/index';
// import InfoSection6 from '../components/InfoSection/index_Infosection4';
import StockSearch from '../views/StockSearch/Stock_Search_Index';



export default function Home_Page() {
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


{/* <HeroContainerTransparent>
      <Kamdo_App/>
</HeroContainerTransparent> */}

{/* <StockSearch/> */}






{/* <InfoSection {...homeObjOne} /> */}

{/* 
<HeroContainerTransparent>
      <DesignSection/>
</HeroContainerTransparent> */}


<ScApp/>




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

