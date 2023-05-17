import React from 'react';
import Footer from '../components/Footer/index';
import Testimonial from "../components/portfolio_react/components/testimonial/testimonial.component";
// import Header from "../components/portfolio_react/components/header/header.component";
// import Hero from "../components/portfolio_react/components/hero/hero.component";
// import About from "../components/portfolio_react/components/about/about.component";
// import Projects from "../components/portfolio_react/components/projects/projects.component"; 
// import Header from '../components/portfolio_react/components/header/header.component';
import Hero from '../components/portfolio_react/components/hero/hero.component';
import About from '../components/portfolio_react/components/about/about.component';
import '../components/portfolio_react/styles.css';


export default function AboutIndex() {
    return (
      <>
          {/* <Header/>
          <Hero/>
          <About/>
          <Projects/> */}
          {/* <Projects/> */}
          <Hero/>
          <About/>

      <Testimonial/>
          <Footer/>
      </>
    );
  }