import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Videoapp from '../../components/VideoTexture/App';
import HeroSection from '../../components/HeroSection/index';
import ScApp from '../../components/ScrollControl/src/App';
import SectorInfo from '../../components/portfolio_react/components/about/SectorInfo';
import ScrollBelt from  "../../components/portfolio_react/components/about/ScrollBeltIndex";
// import DashApp from '../../components/Stock_Portfolio/LineChartIndex';
// import { HeroContainerTransparent } from '../../components/HeroSection/HeroElements';
import HoverCardSector from '../../../src/views/StockSearch/Testing/SectorCard';
// import SectorInfoIndex from '../../../src/views/StockSearch/Testing/Sector_Index_App';
import BatchApp from '../../../src/views/StockSearch/Testing/BatchQuote';
import HeroMachineLearning from "../../components/portfolio_react/components/hero/hero.machinelearning";
import Experience from "../../components/MachineLearning/src/components/experience/Expreience";
import Underlay from '../../components/Landing/Underlay';
import App from '../../components/Curl_Noise/App';
import { HeroContainerTransparent } from "../../components/HeroSection/HeroElements";
import TimeClock from '../../components/TimeClock/Index';
// import CardApp from '../../components/Card_Component/Index';


export default function WelcomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
          <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
<HeroSection/>
<Videoapp/>
      <ScrollBelt/>
            <BatchApp/>
            <ScApp/>
            <HeroMachineLearning/>
            <Experience/>
            <HeroContainerTransparent>
          <App/>
          <TimeClock/>
          <Underlay/>
          </HeroContainerTransparent>
          <HoverCardSector/>

            {/* <RoutingApp/> */}
            <SectorInfo/>
            {/* <SectorInfoIndex/> */}
        <Footer/>
    </>
  );
}

