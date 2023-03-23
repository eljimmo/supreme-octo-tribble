import React from "react";
// import AnimatedCursor from "react-animated-cursor";
import Artificial_Tab from './StockSearch/SSCompos/Tabs/Artificial_Index';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Artificial_Layout() {
  return (
    <>
      <div className="content">
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
      <Artificial_Tab/>
      </div>
    </>
  );
}

export default Artificial_Layout;
