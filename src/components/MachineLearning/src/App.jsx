import { Component } from "react";
// import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
// import About from "./components/about/About";
import Experience from "./components/experience/Expreience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
// import Footer from "./components/footer/Footer";
class MLApp extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        {/* <Nav /> */}
        {/* <About /> */}
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        {/* <Footer /> */}
      </>
    );
  }
}
export default MLApp;
