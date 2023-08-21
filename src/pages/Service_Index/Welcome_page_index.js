import React, { useState } from 'react';
import InfoSection from '../../components/InfoSection';
// import InfoSection3 from '../components/InfoSection/Index_InfoSection3';
import { homeObjOne } from '../../components/InfoSection/Data';
// import { homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Footer from '../../components/Footer/index';
// import BOTA from '../../components/CoBot/App';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Videoapp from '../../components/VideoTexture/App';
import HeroSection from '../../components/HeroSection/index';
import ScApp from '../../components/ScrollControl/src/App';
// import App from '../../components/Dbismut/App';
// import HeroSection2 from '../../components/HeroSection/index2';


export default function WelcomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
          <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <Videoapp/> */}

<HeroSection/>
<Videoapp/>

<InfoSection {...homeObjOne} />
            {/* <BOTA/> */}
            <ScApp/>
            {/* <HeroSection2/> */}
            {/* <App/> */}
            {/* <TilesApp/> */}

        <Footer/>
    </>
  );
}

