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
      <Heading4a>{stock.companyName}</Heading4a>
      <LilRTopLine>Change: {stock.changePercent}%</LilRTopLine>
      <p>Price: ${stock.latestPrice}</p>
      <p>PE Ratio {stock.peRatio}</p>
      <p>52 Week High: ${stock.week52High}</p>
      <p>52 Week Low: ${stock.week52Low}</p>
      <p>Symbol {stock.symbol}</p>
    </div>
  );
}

export default StockCardNegative;
