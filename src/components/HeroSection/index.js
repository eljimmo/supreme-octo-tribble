import React, { useState } from 'react';
import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  AnimatedGradientText,
  HeroBtnWrapper,
  TButton,
} from './HeroElements';



function HeroSection() {
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
        <AnimatedGradientText>
        Leibniz Analytica
        </AnimatedGradientText>
        <HeroP>
          Artificial Intelligence.
        </HeroP>
        <HeroP>
        Machine Learning software for Finance.
        </HeroP>
        <HeroP>
        Coming 2023.
        </HeroP>


                    <HeroBtnWrapper>
          <TButton
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
            Get Started 
          </TButton>
        </HeroBtnWrapper>

                    <div>
        <HeroBtnWrapper>
          <TButton
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
            Financial Analysis 
          </TButton>
        </HeroBtnWrapper>
        </div>



        <HeroBtnWrapper>
          <TButton
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
            AI Simulations 
          </TButton>
        </HeroBtnWrapper>
      
      </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;