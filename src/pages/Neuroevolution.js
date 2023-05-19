import React, { useState } from 'react';
import Footer from '../components/Footer/index';
import Testimonial from "../components/portfolio_react/components/testimonial/testimonial.component";
import HeroNeuroevolution from '../components/portfolio_react/components/hero/hero.neuroevolution';
import NeuroevolutionAbout from '../components/portfolio_react/components/about/about.neuroevol';
import '../components/portfolio_react/styles.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';
import {
  homeObjSix
} from '../components/InfoSection/Data';

export default function NeuroevolutionIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <HeroNeuroevolution/>
          <InfoSectionCanva {...homeObjSix} />
          <NeuroevolutionAbout/>
          <Testimonial/>
          <Footer/>
      </>
    );
  }