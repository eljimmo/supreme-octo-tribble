import React, { useState } from 'react';
import Footer from '../components/Footer/index';
import Testimonial from "../components/portfolio_react/components/testimonial/testimonial.component";
import Hero from '../components/portfolio_react/components/hero/hero.component';
import About from '../components/portfolio_react/components/about/about.component';
import '../components/portfolio_react/styles.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';


export default function AboutIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
          <Hero/>
          <About/>
      <Testimonial/>
          <Footer/>
      </>
    );
  }