import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import Videoapp from '../../components/VideoTexture/App';
import HeroSection from '../../components/HeroSection/index';
import ScApp from '../../components/ScrollControl/src/App';
import ScrollBelt from  "../../components/portfolio_react/components/about/ScrollBeltIndex";
import HeroMachineLearning from "../../components/portfolio_react/components/hero/hero.machinelearning";
import Experience from "../../components/MachineLearning/src/components/experience/Expreience";
import Underlay from '../../components/Landing/Underlay';
import App from '../../components/Curl_Noise/App';
import TimeClock from '../../components/TimeClock/Index';
import Heroartificialintelligence from "../../components/portfolio_react/components/hero/hero.artificialintelligence";
import styled from 'styled-components';
import ChooseUs from './WhyLeibniz';
import App2 from '../../../src/components/Curl_Noise/App2';


const HeroContainerTransparent = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
}
`;

export default function WelcomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
<HeroSection/>
<Videoapp/>
      <ScrollBelt/>
      <Heroartificialintelligence/>
            <ScApp/>
            <HeroMachineLearning/>
            <TimeClock/>

            <Experience/>

            <HeroContainerTransparent>

          <App/>
          <Underlay/>
          </HeroContainerTransparent>

          {/* <App2/> */}
            <Videoapp/>
        <Footer/>
    </>
  );
}

