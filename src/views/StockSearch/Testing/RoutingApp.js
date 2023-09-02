// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import StockCardR from './StockRouting';
import StockDetailsDetails from './DetailsStocks';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RoutingApp = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
    const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbols = ['AAPL', 'MSFT', 'GOOGL']; // Example stock symbols

    const fetchData = async () => {
      const response = await Promise.all(
        symbols.map(async (symbol) => {
          const historicalApiResponse = await axios.get(
            `https://cloud.iexapis.com/stable/stock/${symbol}/chart/2y?token=${apiToken}`
          );

          return {
            symbol: symbol,
            historicalData: historicalApiResponse.data,
          };
        })
      );

      setStockData(response);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Container>
        <Routes>
          {stockData.map((stock, index) => (
            <Route
              key={index}
              path={`/${stock.symbol}`}
              element={
                <StockCardR
                  symbol={stock.symbol}
                  historicalData={stock.historicalData}
                />
              }
            />
          ))}
        </Routes>
      </Container>
      <Routes>
        {stockData.map((stock, index) => (
          <Route
            key={index}
            path={`/stock/${stock.symbol}`}
            element={<StockDetailsDetails />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default RoutingApp;
