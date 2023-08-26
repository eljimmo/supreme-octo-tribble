import React from 'react';

function StockCard({ stock }) {
  return (
    <div className="stock-card">
      <img src={stock.logo} alt={`${stock.companyName} logo`} className="stock-logo" />
      <h3>{stock.companyName}</h3>
      <p>Change: {stock.changePercent}%</p>
      <p>Price: ${stock.latestPrice}</p>
      <p>Sector: {stock.sector}</p>
    </div>
  );
}

export default StockCard;
