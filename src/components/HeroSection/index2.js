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
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
      {/* <Artificialintelligenceabout/> */}
      {/* <FrostedApp/> */}
      <App/>

        {/* <HeroH1>Virtual Artificial Assistants in Finance</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
}


