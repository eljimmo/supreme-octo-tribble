import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const StockGraph = () => {
  const [symbol, setSymbol] = useState('AAPL'); // Replace with the stock symbol you want to analyze
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    // Function to fetch historical stock data from IEX Cloud API
    const fetchHistoricalData = async () => {
      try {
        const response = await axios.get(
          `https://cloud.iexapis.com/stable/stock/${symbol}/chart/2y?token=pk_0e682b29c77d48f9804e3dd05453bf0e`
        );
        setHistoricalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHistoricalData();
  }, [symbol]);

  // Calculate confidence levels (95%, 25%)
  const calculateConfidenceLevels = () => {
    // You can implement your statistical analysis here
    // For example, you can use libraries like numpy or scipy for Python-like calculations

    // Placeholder for demonstration purposes
    const confidence95 = historicalData.map(dataPoint => dataPoint.close * 0.95);
    const confidence25 = historicalData.map(dataPoint => dataPoint.close * 1.25);

    return { confidence95, confidence25 };
  };

  const { confidence95, confidence25 } = calculateConfidenceLevels();

  // Plotly chart data for confidence levels
  const chartData = [
    {
      x: historicalData.map(dataPoint => dataPoint.date),
      y: historicalData.map(dataPoint => dataPoint.close),
      type: 'scatter',
      mode: 'lines',
      name: 'Stock Price',
    },
    {
      x: historicalData.map(dataPoint => dataPoint.date),
      y: confidence95,
      type: 'scatter',
      mode: 'lines',
      name: '95% Confidence',
      line: { color: 'green' },
    },
    {
      x: historicalData.map(dataPoint => dataPoint.date),
      y: confidence25,
      type: 'scatter',
      mode: 'lines',
      name: '25% Confidence',
      line: { color: 'red' },
    },
  ];

  return (
    <div>
      <h1>Stock Price and Confidence Levels</h1>
      <Plot
        data={chartData}
        layout={{
          width: 800,
          height: 400,
          title: 'Stock Price and Confidence Levels',
        }}
      />
    </div>
  );
};

export default StockGraph;
