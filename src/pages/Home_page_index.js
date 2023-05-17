import React from 'react';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { Affix, rem, Button } from '@mantine/core';
import Footer from '../components/Footer/index';
import ScApp from '../components/ScrollControl/src/App';
import { HeroContainerTransparent } from '../components/HeroSection/HeroElements';
import FrostedApp from '../components/FrostedGlass/index';
import StockSearch from '../views/StockSearch/Stock_Search_Index';
import Services from '../components/Services/index2';
// import CApp from '../components/CoBot/App';
// import DashboardContent from '../components/Stock_Portfolio/Market_News';
// import ACpp from '../components/Stock_Portfolio/Coin_Load';


export default function HomePage() {
  return (
    <>
      <HeroContainerTransparent>
      <FrostedApp/>
</HeroContainerTransparent>
<InfoSection {...homeObjOne} />
<StockSearch/>
{/* <ACpp/> */}
<Services/>
{/* <DashboardContent/> */}
<ScApp/>
      <Affix position={{ bottom: rem(20), left: rem(20) }}>
            {/* <CApp/> */}
      </Affix>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
              color="violet"
            >
              Financial AI Agents
            </Button>
      </Affix>
        <Footer/>
    </>
  );
}

