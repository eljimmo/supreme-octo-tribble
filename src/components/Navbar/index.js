import React, { useState, useEffect, Suspense } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLinks2,
  NavLogo,
  NavMenu,
} from './NavbarElements';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarLink2,
  SideBtnWrap
} from '../Sidebar/SidebarElements';
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
} from '../HeroSection/HeroElements';
import { Text, Cylinder, meshBounds, Line, Stage, useFBO, useVideoTexture, useAspect, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'



function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text fontSize={5} letterSpacing={-0.06} {...props}>
      LEIBNIZ
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [hover, setHover] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              Project Leibniz
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>


                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>

              <NavLinks2 to='/signup'>Sign Up
                         </NavLinks2>

         
              </NavItem>
              <NavItem>
              <NavLinks2 to='/signup'>Analytic Dashboard
                         </NavLinks2>
              </NavItem>
              {/* <NavItem>

              <NavLinks2 to='/login'>Log In
                         </NavLinks2>
         
              </NavItem> */}
         
              <NavLinks2 to='/signup'>
                AI Models
                         </NavLinks2>
             
                         <NavItem>
              <NavLinks2 to='/Reinforcement'>Reinforcement Learning
                         </NavLinks2>
              </NavItem>




              <NavItem>
              <NavLinks2 to='/neuroevolution'>Neuroevolution
                         </NavLinks2>
              </NavItem>



    

            </NavMenu>
        

            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
