import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from 'react-plotly.js';

const StockPriceChart = ({ symbol }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await axios.get(
          `https://cloud.iexapis.com/stable/stock/${symbol}/chart`,
          {
            params: {
              token: "pk_0e682b29c77d48f9804e3dd05453bf0e", // Replace with your IEX API token
            },
          }
        );
        setStockData(response.data);
      } catch (error) {
        console.error(`Error fetching stock data for ${symbol}`, error);
      }
    }

    fetchStockData();
  }, [symbol]);

  const dates = stockData.map((data) => data.date);
  const prices = stockData.map((data) => data.close);
  const high = stockData.map((data) => data.high);
  const low = stockData.map((data) => data.low);

  return (
    <div>
      <h2>{symbol} Stock Price Chart</h2>
      <Plot
        data={[
          {
            x: dates,
            y: prices,
            type: "scatter",
            mode: "lines",
            marker: { color: "blue" },
          },
          {type: 'scatter', x: dates, y: high},
          {type: 'markers', x: dates, y: low},


        ]}

        layout={{ paper_bgcolor: 'black', width: 800, height: 400, title: `${symbol} Stock Price Chart` }}
      />
    </div>
  );
};

export default StockPriceChart;
