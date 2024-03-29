import React, { useState, useEffect } from 'react';
import { GiAbstract053 } from "react-icons/gi";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks2a,
  NavLogo,
  NavMenu,
} from './NavbarElements';



const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

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
              <GiAbstract053 />
            </MobileIcon>
            <NavMenu>


              <NavItem>
                <NavLinks2a
                  to='/home'
                >
                  Home
                </NavLinks2a>
              </NavItem>


              <NavItem>
                <NavLinks2a
                  to='/PersonalDashboard'
                >
                  dashboard
                </NavLinks2a>
              </NavItem> 


              {/* <NavItem>
                <NavLinks2a
                  to='/AssetAnalysis'
                >
                  Analysis
                </NavLinks2a>
              </NavItem> */}


              <NavItem>
                <NavLinks2a
                  to='/livebots'
                >
                  bots
                </NavLinks2a>
              </NavItem>


              <NavItem>
                <NavLinks2a
                  to='/botworkshop'
                >
                  botworkshop
                </NavLinks2a>
              </NavItem>

            </NavMenu>
        

            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
