import { Component } from "react";
import Experience from "./components/experience/Expreience";
import Services from "./components/services/Services";
class MLApp extends Component {
  render() {
    return (
      <>
        <Experience />
        <Services />
      </>
    );
  }
}
export default MLApp;
