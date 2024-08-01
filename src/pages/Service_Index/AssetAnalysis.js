import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';



export default function AssetAnalysis() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
<Navbar toggle={toggle} />
<Sidebar isOpen={isOpen} toggle={toggle} />

        <Footer/>
    </>
  );
}


