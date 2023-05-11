import React from 'react';
import InfoSection from '../components/InfoSection';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';
import {
  homeObjOne,
  homeObjThree,
} from '../components/InfoSection/Data';
import { Affix, rem } from '@mantine/core';
import Footer from '../components/Footer/index';
import ScApp from '../components/ScrollControl/src/App';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
// import ChatApp from '../components/Chatbot/App';
import StockSearch from '../views/StockSearch/Stock_Search_Index';
import Services from '../components/Services/index2';
import CoBotAvatar from '../components/CoBot/App';
import DashboardContent from '../components/Stock_Portfolio/Market_News';


export default function HomePage() {
  return (
    <>
      <HeroContainerTransparent>
      <FrostedApp/>
</HeroContainerTransparent>
<InfoSection {...homeObjOne} />
<StockSearch/>
<Services/>
<DashboardContent/>
<ScApp/>
      <Affix position={{ bottom: rem(20), left: rem(20) }}>
            {/* <ChatApp/> */}
            <CoBotAvatar/>
      </Affix>
      <InfoSectionCanva {...homeObjThree} />
        <Footer/>
    </>
  );
}

