import React, { useState } from 'react';
import StockSelector from './StockSelector';
import StockChart from './StockChart';

function App() {
  const [selectedStock, setSelectedStock] = useState('');

  const handleStockSelect = stockSymbol => {
    setSelectedStock(stockSymbol);
  };

  return (
    <div className="App">
      <h1>Stock Data Visualization</h1>
      <StockSelector onSelect={handleStockSelect} />
      <StockChart selectedStock={selectedStock} />
    </div>
  );
}

export default App;
