import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Plot from 'react-plotly.js';
import { WhiteTopLine, Heading4a, Heading12, WhiteSmallText } from "../../../components/InfoSection/InfoElements";

const SectorCard = styled.div`
  border: 1px solid #00b100;
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
  //make the background transparent
  background: transparent;

`;


const StockCard = ({ symbol, latestPrice, historicalData }) => {
  // Create an array to store the line color for each data point
  const lineColors = historicalData.map((dataPoint, index, data) => {
    if (index === 0) {
      return 'green'; // First data point, default to green
    } else {
      const todayClose = dataPoint.close;
      const yesterdayClose = data[index - 1].close;
      return todayClose < yesterdayClose ? 'red' : 'green';
    }
  });

  const calculateReturn = () => {
    if (historicalData.length >= 52) {
      const price52WeeksAgo = historicalData[52 - 1].close; // Close price 52 weeks ago
      const sharesPurchased = 100 / price52WeeksAgo; // Number of shares bought with $100
      const currentValue = sharesPurchased * latestPrice; // Current value of the investment

  return currentValue.toFixed(2); // Return the current value with 2 decimal places
    }
    return 'N/A'; // Not enough historical data
  };

  const investmentReturn = calculateReturn();

    
  
  return (
    <SectorCard>
      <WhiteTopLine>Stock Symbol: {symbol}</WhiteTopLine>
      <Heading4a>Latest Price: {latestPrice}</Heading4a>
      <WhiteSmallText>Return on $100 Investment 52 Weeks Ago: ${investmentReturn}</WhiteSmallText>

      <Plot
        data={[
          {
            x: historicalData.map(dataPoint => dataPoint.date),
            y: historicalData.map(dataPoint => dataPoint.close),
            type: 'scatter',
            mode: 'lines',
            name: 'Stock Price',
            line: {
              color: 'rgb(0, 177, 0)',
              width: 3
            },
          },
        ]}
        layout={{
          width: 300,
          height: 300,
          title: 'Stock Price Over Time',
          paper_bgcolor: 'transparent',
          plot_bgcolor: 'transparent',
        }}
        config={{ displayModeBar: false }}
              />

      <Link to={`/stock/${symbol}`}>
        <Heading12>
        <button className="btn btn-sm btn-outline-secondary float-right">View Details</button>
        </Heading12>
      </Link>

    </SectorCard>
  );
};


const BatchApp = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
// Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
        const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbols = ['XOM', 
    'AMZN', 
    'QQQ', 
    'SPY', 
    'BAC', 
    'XPO', 
    'SYM', 
    'USLM', 
    'ACIC', 
    'HOV'
  ]; // Example stock symbols

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

