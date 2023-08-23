import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import '../../components/portfolio_react/styles.css';
import Videoapp from '../../components/VideoTexture/App';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
// import App from '../../components/Landing/App';
import Underlay from '../../components/Landing/Underlay';

import {
  HeroContainerTransparent,
  HeroContainer252525,
  HeroContainerWhite,
  HeroContainerWhite2

} from "../../components/HeroSection/HeroElements";
// import App from '../../components/Perf_App/App';
// import App2 from '../../components/FrostedGlass/App2';
// import App from '../../components/Flower/App';
import Videoapp2 from '../../components/VideoTexture/VApp_2';

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
          <Videoapp2/>
          {/* <App/> */}
          <Underlay/>
          </HeroContainerTransparent>
          <Videoapp/>

          <Footer/>
      </>
    );
  }