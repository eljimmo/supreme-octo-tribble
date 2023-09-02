// StockDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const StockDetails = () => {
  const { symbol } = useParams(); // Access the stock symbol from the URL parameter

  // Fetch additional details for the selected stock symbol here

  return (
    <div>
      <h2>Stock Details for {symbol}</h2>
      {/* Display additional stock details */}
    </div>
  );
};

export default StockDetails;
