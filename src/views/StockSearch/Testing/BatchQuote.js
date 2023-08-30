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
const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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
      layout={{
        width: 300,
        height: 200,
        title: 'Stock Price Over Time',
        paper_bgcolor: 'transparent', // Set the background color to transparent
        plot_bgcolor: 'transparent', // Set the background color to transparent

      }}
    />
  </SectorCard>
);


const BatchApp = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
    const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbols = ['AAPL', 'XOM', 'AMZN', 'QQQ', 'SPY']; // Example stock symbols

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
    <SectorInfoContainer>
      <WhiteTopLine>Stock Quotes</WhiteTopLine>
      {stockData.map((stock, index) => (
        <StockCard
          key={index}
          symbol={stock.symbol}
          latestPrice={stock.latestPrice}
          historicalData={stock.historicalData}
        />
      ))}
    </SectorInfoContainer>
  );
};

export default BatchApp;
