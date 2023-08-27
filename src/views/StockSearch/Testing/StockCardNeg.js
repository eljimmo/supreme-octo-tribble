import React from 'react';
import {
    Heading4a,
    LilRTopLine
  } from "../../../components/InfoSection/InfoElements";
import HoverCard from './HoverChart';
  


function StockCardNegative({ stock }) {
  return (
    <div className="stock-card">
      <Heading4a>{stock.companyName}</Heading4a>
      <LilRTopLine>Change: {stock.changePercent}%</LilRTopLine>
      <HoverCard key={stock.symbol} stock={stock} />
    </div>
  );
}

export default StockCardNegative;
