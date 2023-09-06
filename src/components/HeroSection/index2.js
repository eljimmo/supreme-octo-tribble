import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroContent
} from './HeroElements';
import App from '../../components/Dbismut/App';


export default function HeroSection2() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
      <App/>

        {/* <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' /> */}
      </HeroBg>
      <HeroContent>

      </HeroContent>
    </HeroContainer>
  );
}



