import React from 'react';
import {
    InfoWrapper2,
    // TopLine,
    // Heading1,
    TopLine1,
    Heading2,
    Wrapper,
    Wrapper2,
    RTopLine,
    Heading3,
    Heading4a,
    LilRTopLine,
    BlackTopLine,
    HeroContainer1,
    InfoContainer3,
    AnimatedGradientText1
  } from "../../../components/InfoSection/InfoElements";
  


function StockCardNegative({ stock }) {
  return (
    <div className="stock-card">
      {/* <img src={stock.logo} alt={`${stock.companyName} logo`} className="stock-logo" /> */}
      <Heading4a>{stock.companyName}</Heading4a>
      <LilRTopLine>Change: {stock.changePercent}%</LilRTopLine>
      <p>Price: ${stock.latestPrice}</p>
      {/* <p>Sector: {stock.sector}</p> */}
    </div>
  );
}

export default StockCardNegative;
