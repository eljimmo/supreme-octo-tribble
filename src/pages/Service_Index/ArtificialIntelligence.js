import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import Testimonial from "../../components/portfolio_react/components/testimonial/testimonial.component";
import Heroartificialintelligence from "../../components/portfolio_react/components/hero/hero.artificialintelligence";
// import Artificialintelligenceabout from "../../components/portfolio_react/components/about/about.artificialintelligence";
// import '../components/portfolio_react/styles.css';
import '../../components/portfolio_react/styles.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
// import HeroSection2 from '../../components/HeroSection/index2';
// import App from '../../components/Dbismut/App';
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
          <Videoapp/>
          <Heroartificialintelligence/>
          <Testimonial/>
          <Footer/>
      </>
    );
  }