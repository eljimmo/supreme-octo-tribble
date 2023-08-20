import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import '../../components/portfolio_react/styles.css';
import Videoapp from '../../components/VideoTexture/App';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import App from '../../components/Landing/App';
import Underlay from '../../components/Landing/Underlay';

import {
  HeroContainer,
  HeroContainer252525
} from "../../components/HeroSection/HeroElements";

export default function AboutIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Videoapp/>
          <HeroContainer252525>
          <App/>
          <Underlay/>
            </HeroContainer252525>
          <Footer/>
      </>
    );
  }