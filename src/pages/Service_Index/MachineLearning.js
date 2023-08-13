import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import HeroMachineLearning from "../../components/portfolio_react/components/hero/hero.machinelearning";
// import '../components/portfolio_react/styles.css';
import '../../components/portfolio_react/styles.css';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Experience from "../../components/MachineLearning/src/components/experience/Expreience";

export default function MachinelearningIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
        <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
          <HeroMachineLearning/>
          <Experience/>
          <Footer/>
      </>
    );
  }