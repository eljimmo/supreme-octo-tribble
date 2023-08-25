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
  HeroContainer252525,
  HeroContainerWhite,
  HeroContainerWhite2,
  HeroP,
  HeroH1,
  HeroContainer,
  HeroContent

} from "../../components/HeroSection/HeroElements";
// import App from '../../components/Perf_App/App';
// import App2 from '../../components/FrostedGlass/App2';
// import App from '../../components/Flower/App';
import Videoapp2 from '../../components/VideoTexture/VApp_2';
import TimeClock from '../../components/TimeClock/Index';
import MarketNews from '../../components/Stock_Portfolio/Market_News';
// import App from '../../components/ShadowParallax/Index';
import CardApp from '../../components/Card_Component/Index'; 



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
          {/* <Videoapp2/> */}
          <TimeClock/>
          <Underlay/>
          </HeroContainerTransparent>

           {/* <HeroContainer252525>
          <HeroContent>
                      <App/>

            </HeroContent>
          </HeroContainer252525> */}


          {/* <MarketNews/> */}
          <CardApp/>
          <Videoapp/>

          <Footer/>
      </>
    );
  }