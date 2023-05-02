import React from 'react';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
} from '../components/InfoSection/Data';
import { Affix, Button, rem } from '@mantine/core';
import Footer from '../components/Footer/index';
import ScApp from '../components/ScrollControl/src/App';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
import ChatApp from '../components/Chatbot/App';


export default function HomePage() {
  return (
    <>
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
            <ChatApp/>
      </Affix>
        <Footer/>
    </>
  );
}

