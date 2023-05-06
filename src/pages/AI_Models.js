import React from 'react';
import { Affix, Button, rem } from '@mantine/core';
import Footer from '../components/Footer/index';
import InfoSection from '../components/InfoSection';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';
import {
  homeObjOne,
  homeObjThree,
} from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';


export default function AIPage() {

  return (
    <>
<HeroSection/>
<InfoSectionCanva {...homeObjOne} />
<InfoSection {...homeObjThree} />

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

