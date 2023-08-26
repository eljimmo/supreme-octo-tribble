import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import '../../components/portfolio_react/styles.css';
import Videoapp from '../../components/VideoTexture/App';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Underlay from '../../components/Landing/Underlay';
import App from '../../components/Curl_Noise/App';

import {
  HeroContainerTransparent,
  // HeroContainer252525,
  // HeroContainerWhite,
  // HeroContainerWhite2,
  // HeroP,
  // HeroH1,
  // HeroContainer,
  // HeroContent

} from "../../components/HeroSection/HeroElements";
import TimeClock from '../../components/TimeClock/Index';
import CardApp from '../../components/Card_Component/Index';
// import About from  "../../components/portfolio_react/components/about/about_index";



export default function AboutIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          < HeroContainerTransparent>
          <App/>
          <TimeClock/>
          <Underlay/>
          </HeroContainerTransparent>
          <CardApp/>
          {/* <About/> */}
          <Videoapp/>
          <Footer/>
      </>
    );
  }