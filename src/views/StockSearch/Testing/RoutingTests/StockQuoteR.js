import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Plot from 'react-plotly.js';
// import StockDetails from './StockDeets';
// import StockRow from './RoutingTests/StockRow';

import { WhiteTopLine, Heading12, WhiteSmallText } from "../../../../components/InfoSection/InfoElements";

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
`;

const StockRow = ({ symbol }) => {
  const [stockData, setStockData] = useState({
    price: null,
    date: null,
    time: null,
    dollar_change: null,
    percent_change: null,
  });

  const changeStyle = () => {
    return {
      color: stockData.dollar_change >= 0 ? "#4caf50" : "#e53935",
      fontSize: "0.8rem",
      marginLeft: 5,
      changeSymbol: stockData.dollar_change >= 0 ? "+" : "-",
    };
  };

  const applyData = (latestPrice, yesterdaysClose) => {
    const dollar_change = (latestPrice.price - yesterdaysClose.price).toFixed(2);
    const percent_change =
      (((latestPrice.price - yesterdaysClose.price) / yesterdaysClose.price) * 100).toFixed(2) + "%";

    setStockData({
      price: latestPrice.price,
      date: latestPrice.date,
      time: latestPrice.time,
      dollar_change: parseFloat(dollar_change),
      percent_change: `(${percent_change})`,
    });
  };

  useEffect(() => {
    const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e'; // Replace with your actual IEX API token

    const fetchData = async () => {
      try {
        const historicalApiResponse = await fetch(
          `https://cloud.iexapis.com/stable/stock/${symbol}/chart/2y?token=${apiToken}`
        );
        const historicalData = await historicalApiResponse.json();

        const latestApiResponse = await fetch(
          `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiToken}`
        );
        const latestData = await latestApiResponse.json();

        applyData(latestData, historicalData[historicalData.length - 2]); // Use the second-to-last data point for yesterday's close
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, [symbol]);

  const changeStyleData = changeStyle();

  return (
    <li className="list-group-item">
      <b>{symbol}</b> ${stockData.price}
      <span
        className="change"
        style={{
          color: changeStyleData.color,
          fontSize: changeStyleData.fontSize,
          marginLeft: changeStyleData.marginLeft,
        }}
      >
        {changeStyleData.changeSymbol}${Math.abs(stockData.dollar_change)}&nbsp;{stockData.percent_change}
      </span>
      <Link to={`/stock/${symbol}`}>
        <Heading12>
        <button className="btn btn-sm btn-outline-secondary float-right">View Details</button>
        </Heading12>
      </Link>
    </li>
  );
};

const StockQuoteR = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const symbols = ['XPO', 'SYM', 'USLM', 'ACIC', 'HOV'];

    const fetchData = async () => {
      const response = await Promise.all(
        symbols.map(async symbol => {
          return {
            symbol: symbol,
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
        <ul className="list-group">
          {stockData.map((stock, index) => (
            <StockRow key={index} symbol={stock.symbol} />
          ))}
        </ul>
      </SectorInfoContainer>
  );
};

export default StockQuoteR;
