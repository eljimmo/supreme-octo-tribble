import React, { useState } from 'react';
import {
  HeroContainer,
} from './HeroElements';
import FrostedApp from '../../components/FrostedGlass/index';



export default function HeroSection() {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };
  return (
    <HeroContainer id='home'>
      <FrostedApp/>
    </HeroContainer>
  );
}



