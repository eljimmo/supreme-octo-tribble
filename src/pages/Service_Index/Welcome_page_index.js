  import React, { useState } from 'react';
  import Footer from '../../components/Footer/index';
  import Videoapp from '../../components/VideoTexture/App';
  import HeroSection from '../../components/HeroSection/index';
  import ScApp from '../../components/ScrollControl/src/App';
  // import ScrollBelt from  "../../components/portfolio_react/components/about/ScrollBeltIndex";
  import HeroMachineLearning from "../../components/portfolio_react/components/hero/hero.machinelearning";
  // import Experience from "../../components/MachineLearning/src/components/experience/Expreience";
  import Underlay from '../../components/Landing/Underlay';
  import Underlay2 from '../../components/Landing/Underlay2';
  import Overlay from '../../components/Landing/Overlay';
  // import Overlay from '../../components/Landing/Overlay';
  // import { Underlay } from '../../components/FrostedGlass/Herooverlay'

  // import App from '../../components/Curl_Noise/App';
  import App4 from '../../components/Curl_Noise/App4';
  import App2 from '../../components/Curl_Noise/App2';
  // import TimeClock from '../../components/TimeClock/Index';
  import Heroartificialintelligence from "../../components/portfolio_react/components/hero/hero.artificialintelligence";
  import styled from 'styled-components';
  import Navbar from '../../components/Navbar';
  import Sidebar from '../../components/Sidebar/index';
  // import BackgroundApp from '../../components/FrostedGlass/heroindex';
  // import MachineApp from '../../components/FrostedGlass/MachineIndex';


  const HeroContainerTransparent = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

`;


const AppWrapper = styled.div`
  margin-top: 50px; /* Adjust the margin to move the component lower */
`;

const Spacer = styled.div`
  height: 50px; /* Adjust the height to move the component lower */
`;
// const HeroContainer = styled.div`
// background: 
// /* Diagonal split - top left to bottom right */
// linear-gradient(to bottom right, transparent 50%, transparent 50%), 
// url('container.jpg') left top,

// /* Diagonal split - top right to bottom left */
// linear-gradient(to bottom left, transparent 50%, transparent 50%), 
// url('containers.jpg') right top;

// background-size: 50% 100%, 50% 100%; /* Adjust the size as needed */
// background-repeat: no-repeat;
// display: flex;
// justify-content: center;
// align-items: center;
// padding: 0 30px;
// height: 800px;
// position: relative;
// z-index: 1;

// `;



  export default function WelcomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
  {/* <HeroSection/> */}
  <Navbar toggle={toggle} />
  <Sidebar isOpen={isOpen} toggle={toggle} />

  {/* <HeroContainerTransparent> */}
  {/* <Spacer> */}
              
                {/* <App2/> */}
                {/* </Spacer> */}
                {/* <Underlay/> */}
              {/* </HeroContainerTransparent> */}
              {/* <HeroContainerTransparent>
                <App4/>
                <Underlay/>
              </HeroContainerTransparent> */}
              <HeroContainerTransparent>
                <App4/>
                {/* <Underlay2/> */}
              </HeroContainerTransparent>

              {/* <HeroContainerTransparent> */}
                {/* <App4/> */}
                {/* <Underlay/> */}
              {/* </HeroContainerTransparent> */}
              {/* <Videoapp/> */}
                      <ScApp/>

                                            {/* <HeroContainer>
                                            <Heroartificialintelligence/>
                                            </HeroContainer> */}

                {/* <HeroSection/> */}

          <Footer/>
      </>
    );
  }


