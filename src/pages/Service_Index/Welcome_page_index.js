import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Videoapp from '../../components/VideoTexture/App';
import HeroSection from '../../components/HeroSection/index';
import ScApp from '../../components/ScrollControl/src/App';
import MiniApp from '../../components/MiniMap/App';
import SectorInfo from '../../components/portfolio_react/components/about/SectorInfo';
import ScrollBelt from  "../../components/portfolio_react/components/about/ScrollBeltIndex";


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
      <SectorInfo/>

<br/>
<br/>

            {/* <BOTA/> */}
            <ScApp/>
        <Footer/>
    </>
  );
}

