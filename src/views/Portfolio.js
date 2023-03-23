import React from "react";
// react plugin for creating notifications over the dashboard
// import AnimatedCursor from "react-animated-cursor";
import Portfolio_Tab from './StockSearch/SSCompos/Tabs/Portfolio_Index';
// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Portfolio_Layout() {
  return (
    <>
          <div className="content">
          <Portfolio_Tab/>
    {/* <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='	0, 102, 255'
      outerAlpha={0.2}
      innerScale={3.7}
      outerScale={2}
      trailingSpeed={9}
      outerStyle={{
        border: '3px outset #cc0000'
      }} /> */}
        
      </div>
    </>
  );
}

export default Portfolio_Layout;
