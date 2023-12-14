import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
// import Videoapp from '../../components/VideoTexture/App';
import HeroSection from '../../components/HeroSection/index';
import ScApp from '../../components/ScrollControl/src/App';
import ScrollBelt from  "../../components/portfolio_react/components/about/ScrollBeltIndex";
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
<Navbar toggle={toggle} />
<Sidebar isOpen={isOpen} toggle={toggle} />
<HeroContainerTransparent>
<BackgroundApp/>
</HeroContainerTransparent>
      <ScrollBelt/>
            <ScApp/>
            <HeroContainerTransparent>

            <MachineApp/>

            </HeroContainerTransparent>

        <Footer/>
    </>
  );
}

