import React from 'react';
import Footer from '../components/Footer/index';
import Testimonial from "../components/portfolio_react/components/testimonial/testimonial.component";
import Hero from '../components/portfolio_react/components/hero/hero.component';
import About from '../components/portfolio_react/components/about/about.component';
import '../components/portfolio_react/styles.css';


export default function GeneralTermsIndex() {
    return (
      <>
      General terms
          <Hero/>
          <About/>
      <Testimonial/>
          <Footer/>
      </>
    );
  }