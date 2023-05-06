import React from 'react';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
} from '../components/InfoSection/Data';
import { Affix, rem } from '@mantine/core';
import Footer from '../components/Footer/index';
import ScApp from '../components/ScrollControl/src/App';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
import ChatApp from '../components/Chatbot/App';
import StockSearch from '../views/StockSearch/Stock_Search_Index';


export default function HomePage() {
  return (
    <>
      <HeroContainerTransparent>
      <FrostedApp/>
</HeroContainerTransparent>
<InfoSection {...homeObjOne} />
<StockSearch/>
<ScApp/>
      <Affix position={{ bottom: rem(20), left: rem(20) }}>
            <ChatApp/>
      </Affix>
        <Footer/>
    </>
  );
}

