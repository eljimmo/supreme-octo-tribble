
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
  width: 350px;
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


function erfinv(x) {
  const a1 =  0.254829592;
  const a2 = -0.284496736;
  const a3 =  1.421413741;
  const a4 = -1.453152027;
  const a5 =  1.061405429;
  const p  =  0.3275911;

  const sign = (x < 0) ? -1 : 1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y = (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t;
  
  return sign * Math.sqrt(-2.0 * Math.log(1.0 - x * y));
}

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

  const calculateConfidenceIntervals = () => {
    const confidenceLevels = [0.95, 0.5, 0.25]; // 95%, 50%, 25%
    const intervals = {};
  
    confidenceLevels.forEach(confidence => {
      const alpha = 1 - confidence;
      const zScore = Math.sqrt(2) * erfinv(1 - alpha);
  
      const confidenceInterval = historicalData.map(dataPoint => {
        const stdDev = Math.sqrt(dataPoint.variance); // Assuming you have variance data for each data point
        const marginOfError = zScore * (stdDev / Math.sqrt(historicalData.length));
        const lowerBound = dataPoint.close - marginOfError;
        const upperBound = dataPoint.close + marginOfError;
        return [lowerBound, upperBound];
      });

      intervals[`${confidence * 100}% Confidence`] = confidenceInterval;
    });

    return intervals;
  };

  const confidenceIntervals = calculateConfidenceIntervals();

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
          // Add confidence interval traces
          ...Object.keys(confidenceIntervals).map(confidenceLabel => ({
            x: historicalData.map(dataPoint => dataPoint.date),
            y: confidenceIntervals[confidenceLabel].map(interval => (interval[0] + interval[1]) / 2), // Midpoint of the interval
            type: 'scatter',
            mode: 'lines',
            name: confidenceLabel,
            line: {
              color: 'rgba(0, 0, 255, 0.5)', // Adjust color and opacity as needed
              width: 1
            },
            fill: 'tonexty', // Fill area between lines
            fillcolor: 'rgba(0, 0, 255, 0.2)' // Adjust fill color and opacity as needed
          })),
        ]}
        layout={{
          width: 300,
          height: 300,
          title: 'Stock Price Over Time with Confidence Intervals',
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
    const symbols = [
    // 'XOM',  
    'XPO', 
    'SYM', 
    'USLM', 
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

