import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from './videos/125.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from './HeroElements';
import Artificialintelligenceabout from "../portfolio_react/components/about/about.artificialintelligence";
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



