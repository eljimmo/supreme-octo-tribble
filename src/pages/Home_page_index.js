import React from 'react';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { Affix, rem, Button } from '@mantine/core';
import Footer from '../components/Footer/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';



export default function HomePage() {
  return (
    <>
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

