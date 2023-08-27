import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import StockCard from './StockCardPos';
import StockCardNegative from './StockCardNeg';
import HoverCard from './HoverChart';
import {
    BTopLine,
    RTopLine,
    WhiteTopLine,
    AnimatedGradientSmall
    
  } from "../../../components/MachineLearning/src/components/experience/elements";


function CardApp() {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    axios.get('https://cloud.iexapis.com/stable/stock/market/list/gainers?token=pk_0e682b29c77d48f9804e3dd05453bf0e')
      .then(response => {
        setGainers(response.data);
      })
      .catch(error => {
        console.error('Error fetching gainers:', error);
      });

    axios.get('https://cloud.iexapis.com/stable/stock/market/list/losers?token=pk_0e682b29c77d48f9804e3dd05453bf0e')
      .then(response => {
        setLosers(response.data);
      })
      .catch(error => {
        console.error('Error fetching losers:', error);
      });
  }, []);

  return (
    <div className="App">
      <br/>
      <AnimatedGradientSmall>Top Daily Stock Gainers and Losers</AnimatedGradientSmall>
      <div className="stock-list">
        <div className="stock-section">
          <BTopLine>Gainers</BTopLine>
          {gainers.map(stock => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
        <div className="stock-section">
          <RTopLine>Losers</RTopLine>
          {losers.map(stock => (
            <StockCardNegative key={stock.symbol} stock={stock} />
          ))}

        {/* {losers.map(stock => (
            <HoverCard key={stock.symbol} stock={stock} />
          ))} */}

        </div>
      </div>
    </div>
  );
}

export default CardApp;
