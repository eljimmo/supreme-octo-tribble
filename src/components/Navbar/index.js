import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks2,
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
              <FaBars />
            </MobileIcon>
            <NavMenu>


              <NavItem>
                <NavLinks2
                  to='/About'
                >
                  About
                </NavLinks2>
              </NavItem>


              <NavItem>
                <NavLinks2
                  to='/neuroevolution'
                >
                  Neuro Evolution
                </NavLinks2>
              </NavItem>


              <NavItem>
                <NavLinks2
                  to='/machinelearning'
                >
                  Machine Learning
                </NavLinks2>
              </NavItem>


              <NavItem>
                <NavLinks2
                  to='/About'
                >
                  AI Models
                </NavLinks2>
              </NavItem>

              {/* <NavItem>

              <NavLinks2 to='/signup'>Sign Up
                         </NavLinks2>

         
              </NavItem> */}



              {/* <NavItem>
              <NavLinks2 to='/signup'>Analytic Dashboard
                         </NavLinks2>
              </NavItem> */}


              
              {/* <NavItem>

              <NavLinks2 to='/login'>Log In
                         </NavLinks2>
         
              </NavItem> */}
         
              {/* <NavLinks2 to='/AImodels'>
                AI Models
                         </NavLinks2> */}
             
                         {/* <NavItem>
              <NavLinks2 to='/home'>Home
                         </NavLinks2>
              </NavItem> */}




              <NavItem>
              {/* <NavLinks2 to='/neuroevolution'>Neuroevolution
                         </NavLinks2> */}
              </NavItem>



    

            </NavMenu>
        

            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
