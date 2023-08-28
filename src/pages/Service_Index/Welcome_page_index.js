import React, { useState } from 'react';
import InfoSection from '../../components/InfoSection';
import InfoSectionCanva from '../../components/InfoSection/index_Canvas';
import { homeObjOne, homeObjTwo } from '../../components/InfoSection/Data';
import Footer from '../../components/Footer/index';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Videoapp from '../../components/VideoTexture/App';
import HeroSection from '../../components/HeroSection/index';
import ScApp from '../../components/ScrollControl/src/App';



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

{/* <InfoSection {...homeObjOne} />
<InfoSectionCanva {...homeObjTwo} /> */}
<br/>
<br/>

            {/* <BOTA/> */}
            <ScApp/>
            {/* <HeroSection2/> */}
            {/* <App/> */}
            {/* <TilesApp/> */}

        <Footer/>
    </>
  );
}

