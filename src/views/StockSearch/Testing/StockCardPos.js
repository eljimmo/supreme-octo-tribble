
import React from 'react';
import {
    LilGreenLine,
    Heading4a,
  } from "../../../components/InfoSection/InfoElements";
  // import { Line } from 'react-chartjs-2';
  import HoverCard from './HoverChart';




function StockCardPos({ stock }) {
  


  return (
    <div className="stock-card">
      <Heading4a>{stock.companyName}</Heading4a>
      <LilGreenLine>Change: {stock.changePercent}%</LilGreenLine>
      <HoverCard key={stock.symbol} stock={stock} />
    </div>
  );
}

export default StockCardPos;