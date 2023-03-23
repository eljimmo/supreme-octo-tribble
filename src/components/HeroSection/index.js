import React, { useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import { Button } from '../ButtonElements';
import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  AnimatedGradientText,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLink2,
  SidebarRoute,
  SideBtnWrap
} from '../Sidebar/SidebarElements';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLinks2,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../Navbar/NavbarElements';


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
          Artificial Intelligence
        </HeroP>
        <HeroP>
        Machine Learning software for Finance.
        </HeroP>
        <HeroP>
        Coming 2023.
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
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
          </Button> */}
                 <NavLinks2 to='signup'>Demo
                         {hover ? <ArrowForward /> : <ArrowRight />}
                         </NavLinks2>
        </HeroBtnWrapper>

      </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;