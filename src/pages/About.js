import React from 'react';
import Footer from '../components/Footer/index';
import Hero from '../components/portfolio_react/components/hero/hero.component';
import '../components/portfolio_react/styles.css';
import InfoSectionCanva from '../components/InfoSection/index_Canvas';
import {
  homeObjFour
} from '../components/InfoSection/Data';
import Heroartificialintelligence from "../components/portfolio_react/components/hero/hero.artificialintelligence";
import Artificialintelligenceabout from "../components/portfolio_react/components/about/about.artificialintelligence";
import Experience from "../components/MachineLearning/src/components/experience/Expreience";


export default function AboutIndex() {
    return (
      <>
          <Hero/>
          <InfoSectionCanva {...homeObjFour} />
          <Heroartificialintelligence/>
          <Artificialintelligenceabout/>
          <Experience/>
          <Footer/>
      </>
    );
  }