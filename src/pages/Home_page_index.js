import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
} from '../components/InfoSection/Data';
import { Affix, Button, rem } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import ScApp from '../components/ScrollControl/src/App';
import Sidebar from '../components/Sidebar/index';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
import StockSearch from '../views/StockSearch/Stock_Search_Index';
// import Services from '../components/Services';
// import TOXApp from '../components/Toxicity_Sent/App';
// import Series_Simulations_Modeling from '../views/StockSearch/SSCompos/Tabs/Analytic_Dash/Time_Series';
// import ChatApp from '../components/Chatbot/App';




export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />


      <HeroContainerTransparent>
      <FrostedApp/>

      
</HeroContainerTransparent>

<StockSearch/>



      {/* <Series_Simulations_Modeling/> */}

      


<InfoSection {...homeObjOne} />


{/* <Services/> */}

<ScApp/>




      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
              fullWidth="true"
            >
              Click on the Robot to chat with our Guidance Bot
            </Button>

{/* <ChatApp/> */}




      </Affix>


        <Footer/>
    </>
  );
}

