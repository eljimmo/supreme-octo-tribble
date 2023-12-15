  import React, { useState } from 'react';
  import Footer from '../../components/Footer/index';
  // import Videoapp from '../../components/VideoTexture/App';
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
  import Navbar from '../../components/Navbar';
  import Sidebar from '../../components/Sidebar/index';
  import BackgroundApp from '../../components/FrostedGlass/heroindex';
  import MachineApp from '../../components/FrostedGlass/MachineIndex';


  const HeroContainerTransparent = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
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
  <Navbar toggle={toggle} />
  <Sidebar isOpen={isOpen} toggle={toggle} />
                      {/* <HeroContainerTransparent>
                        <Heroartificialintelligence/>
                      </HeroContainerTransparent> */}
  {/* <BackgroundApp/> */}
        {/* <ScrollBelt/> */}
              <ScApp/>
              <HeroMachineLearning/>
              <TimeClock/>
              <Experience/>
              <HeroContainerTransparent>
                        <Heroartificialintelligence/>
                      </HeroContainerTransparent>
              {/* <HeroContainerTransparent>
                <App/>
              </HeroContainerTransparent> */}
          <Footer/>
      </>
    );
  }


