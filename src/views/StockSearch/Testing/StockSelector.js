import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockSelector({ onSelect }) {
  const [stockSymbols, setStockSymbols] = useState([]);
  const [selectedStock, setSelectedStock] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_0e682b29c77d48f9804e3dd05453bf0e')
      .then(response => {
        setStockSymbols(response.data);
      })
      .catch(error => {
        console.error('Error fetching stock symbols:', error);
      });
  }, []);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = symbol => {
    setSelectedStock(symbol);
    onSelect(symbol);
  };

  const filteredStocks = stockSymbols.filter(symbol => {
    return symbol.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      symbol.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <label htmlFor="stockSearch">Search for a stock:</label>
      <input
        type="text"
        id="stockSearch"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter stock symbol or name"
      />
      <ul>
        {filteredStocks.map(symbol => (
          <li key={symbol.symbol} onClick={() => handleSelect(symbol.symbol)}>
            {symbol.name} ({symbol.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockSelector;
