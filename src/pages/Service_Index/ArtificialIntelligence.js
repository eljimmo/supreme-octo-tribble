import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import Testimonial from "../../components/portfolio_react/components/testimonial/testimonial.component";
import Heroartificialintelligence from "../../components/portfolio_react/components/hero/hero.artificialintelligence";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Videoapp from '../../components/VideoTexture/App';


export default function ArtificialIntelligenceIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Heroartificialintelligence/>
          <Testimonial/>
          <Videoapp/>
          <Footer/>
      </>
    );
  }