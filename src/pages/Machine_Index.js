import React, { useState } from 'react';
import { Affix, Button, rem } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import Sidebar from '../components/Sidebar/index';
// import CApp from '../components/CoBot/App';
import StockSearch from '../views/StockSearch/Stock_Search_Index';
import DashboardContent from '../components/Stock_Portfolio/Market_News';
import ACpp from '../components/Stock_Portfolio/Coin_Load';


export default function MachinePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <br/>
<StockSearch/>
<ACpp/>
<DashboardContent/>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Button
              variant="outline"
            >
              I am still in Development.
            </Button>
      </Affix>
        <Footer/>
        </>
  );
}

