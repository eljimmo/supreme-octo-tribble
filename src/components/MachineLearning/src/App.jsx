import { Component } from "react";
import Experience from "./components/experience/Expreience";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
class MLApp extends Component {
  render() {
    return (
      <>
        <Experience />
        <Services />
        <Testimonials />
      </>
    );
  }
}
export default MLApp;
