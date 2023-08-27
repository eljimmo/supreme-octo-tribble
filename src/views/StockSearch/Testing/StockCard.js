import React from 'react';
import {
    LilGreenLine,
    Heading4a,
  } from "../../../components/InfoSection/InfoElements";
  import { Line } from 'react-chartjs-2';


// const chartData = {
//     labels: stockData.map(data => data.date),
//     datasets: [
//       {
//         label: 'Stock Price',
//         data: stockData.map(data => data.close),
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         fill: true,
//       },
//     ],
//   };

function StockCard({ stock }) {
  return (
    <div className="stock-card">
      <Heading4a>{stock.companyName}</Heading4a>
      <LilGreenLine>Change: {stock.changePercent}%</LilGreenLine>
      <p>Price: ${stock.latestPrice}</p>
      <p>PE Ratio {stock.peRatio}</p>
      <p>52 Week High: ${stock.week52High}</p>
      <p>52 Week Low: ${stock.week52Low}</p>
      <p>Symbol {stock.symbol}</p>
    </div>
  );
}

export default StockCard;
