import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from './videos/125.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import FrostedApp from '../../components/FrostedGlass/index';



export default function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      {/* <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg> */}
      {/* <HeroContent> */}

      <FrostedApp/>


      {/* </HeroContent> */}
    </HeroContainer>
  );
}



