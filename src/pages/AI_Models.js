import React, { useState } from 'react';
// import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import {
  // homeObjOne,
  homeObjTwo,
  homeObjThree,
  // homeObjSix,


} from '../components/InfoSection/Data';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';

// import Services from '../components/Services';
import { Affix, Button, rem } from '@mantine/core';
// import HeroSection_2 from '../components/HeroSection/HeroIndex_2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
// import DesignSection from '../components/DesignSection';
// import VideoSection from '../components/Videos_Section';
// import Services from '../components/Services';
// import App from '../components/flex_pages/src/App';
// import ScApp from '../components/ScrollControl/src/App';
// import HeroSection_3 from '../components/HeroSection/HeroIndex_3';
// import { HeroContainerCanva, HeroContainer, HeroContainer200, HeroContainerTransparent, HeroContainer400, HeroContent2, HeroContent3, HeroContent }  from "../components/HeroSection/HeroElements";
// import Neuro_page from '../../src/components/ScrollControl/src/Neuro_Evo';
import Sidebar from '../components/Sidebar/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements'; 
// import P_App_1 from '../components/Perfomance/index';
// import InfoSection6 from '../components/InfoSection/index_Infosection4';
// import Services from '../components/Services';
// import StockSearch from '../views/StockSearch/Stock_Search_Index';
import KamdoApp from '../components/Kamdo/index';

export default function AIPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContainerTransparent>
      <KamdoApp/>
</HeroContainerTransparent>
{/* <InfoSection {...homeObjOne} /> */}
  <InfoSectionCanva {...homeObjTwo} />
<InfoSection {...homeObjThree} /> 
{/* <InfoSection {...homeObjSix} /> */}



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

