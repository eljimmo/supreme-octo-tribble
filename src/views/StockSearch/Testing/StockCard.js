import React from 'react';
import {
    InfoWrapper2,
    // TopLine,
    // Heading1,
    TopLine1,
    Heading2,
    Wrapper,
    Wrapper2,
    Heading3,
    LilGreenLine,
    Heading4a,
    BlackTopLine,
    HeroContainer1,
    InfoContainer3,
    AnimatedGradientText1
  } from "../../../components/InfoSection/InfoElements";
  


function StockCard({ stock }) {
  return (
    <div className="stock-card">
      {/* <img src={stock.logo} alt={`${stock.companyName} logo`} className="stock-logo" /> */}
      <Heading4a>{stock.companyName}</Heading4a>
      <LilGreenLine>Change: {stock.changePercent}%</LilGreenLine>
      <p>Price: ${stock.latestPrice}</p>
      {/* <p>Sector: {stock.sector}</p> */}
    </div>
  );
}

export default StockCard;
