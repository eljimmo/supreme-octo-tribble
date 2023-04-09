import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection/Index_Infosection2';
import InfoSection3 from '../components/InfoSection/Index_InfoSection3';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,

} from '../components/InfoSection/Data';
// import Services from '../components/Services';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import Services from '../components/Services/index';





export default function Welcome() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>

      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <HeroSection />   
      <Affix position={{ bottom: rem(20), right: rem(20) }}>

            <Button
              variant="outline"
      
            >
              I am still in Development.
            </Button>

      </Affix>
      <InfoSection {...homeObjOne} />

       <InfoSection2 {...homeObjTwo} />

      
        <InfoSection3 {...homeObjThree} />


        < Services /> 

        {/* <Group grow>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group> */}

    </>
  );
}




