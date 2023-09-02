import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import InfoSectionCanva from '../../components/InfoSection/index_Canvas';
import {
  homeObjSix
} from '../../components/InfoSection/Data';

export default function NeuroevolutionIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <InfoSectionCanva {...homeObjSix} />
          <Footer/>
      </>
    );
  }