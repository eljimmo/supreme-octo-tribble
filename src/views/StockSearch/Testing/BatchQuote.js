import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Plotly from 'react-plotly.js';
import Plot from 'react-plotly.js';

import { WhiteTopLine, Heading4a } from "../../../components/InfoSection/InfoElements";

const SectorCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;

const StockCard = ({ symbol, latestPrice, historicalData }) => (
  <SectorCard>
    <WhiteTopLine>Stock Symbol: {symbol}</WhiteTopLine>
    <Heading4a>Latest Price: {latestPrice}</Heading4a>
    <Plot
      data={[
        {
          x: historicalData.map(dataPoint => dataPoint.date),
          y: historicalData.map(dataPoint => dataPoint.close),
          type: 'scatter',
          mode: 'lines',
          name: 'Stock Price',
        },
      ]}
      layout={{ width: 300, height: 200, title: 'Stock Price Over Time' }}
    />
  </SectorCard>
);

const BatchApp = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
    const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbols = ['AAPL', 'GOOGL', 'AMZN']; // Example stock symbols

    const fetchData = async () => {
      const response = await Promise.all(
        symbols.map(async symbol => {
          const historicalApiResponse = await fetch(
            `https://cloud.iexapis.com/stable/stock/${symbol}/chart/2y?token=${apiToken}`
          );
          const historicalData = await historicalApiResponse.json();

          const latestApiResponse = await fetch(
            `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiToken}`
          );
          const latestData = await latestApiResponse.json();

          return {
            symbol: symbol,
            latestPrice: latestData.latestPrice,
            historicalData: historicalData,
          };
        })
      );

      setStockData(response);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Stock Quotes</h1>
      {stockData.map((stock, index) => (
        <StockCard
          key={index}
          symbol={stock.symbol}
          latestPrice={stock.latestPrice}
          historicalData={stock.historicalData}
        />
      ))}
    </div>
  );
};

export default BatchApp;


// import React, { useState, useEffect } from 'react';
// import { Heading4a, Heading1, WhiteTopLine, Heading  } from "../../../components/InfoSection/InfoElements";

// const SectorCard = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin: 10px;
//   padding: 10px;
//   width: 300px;
// `;

// const StockCard = ({ symbol, latestPrice }) => (
//   <div className="card">
//     <WhiteTopLine className="card-header">
//       Stock Symbol: {symbol}
//     </WhiteTopLine>
//     <Heading4a className="card-body">
//       Latest Price: {latestPrice}
//     </Heading4a>
//   </div>
// );

// const StockList = ({ stockData }) => (
//   <div className="stock-list">
//     {stockData.map((stock, index) => (
//       <StockCard
//         key={index}
//         symbol={stock.symbol}
//         latestPrice={stock.latestPrice}
//       />
//     ))}
//   </div>
// );

// const BatchApp = () => {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//     // Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
//     const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
//     const symbols = ['AAPL', 'GOOGL', 'AMZN']; // Example stock symbols

//     const fetchData = async () => {
//       const response = await Promise.all(
//         symbols.map(async symbol => {
//           const apiResponse = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiToken}`);
//           const data = await apiResponse.json();
//           return {
//             symbol: data.symbol,
//             latestPrice: data.latestPrice,
//           };
//         })
//       );

//       setStockData(response);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="app">
//       <Heading>Stock Quotes</Heading>
//       <StockList stockData={stockData} />
//     </div>
//   );
// };

// export default BatchApp;


