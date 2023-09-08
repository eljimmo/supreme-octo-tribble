// StockDetails.js
import React, { useState, useEffect } from 'react';

const StockDetails = ({ match }) => {
  const { symbol } = match.params; // Get the symbol from the route parameter
  const [stockInfo, setStockInfo] = useState(null);

  useEffect(() => {
    // Fetch stock details based on the symbol and update the state
    const fetchStockDetails = async () => {
      try {
        const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e'; // Your API token
        const response = await fetch(
          `https://cloud.iexapis.com/stable/stock/${symbol}/advanced-stats?token=${apiToken}`
        );
        const data = await response.json();
        setStockInfo(data);
      } catch (error) {
        console.error('Error fetching stock details', error);
      }
    };

    fetchStockDetails();
  }, [symbol]);

  if (!stockInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Stock Details - {symbol}</h1>
      {/* Display the stock information here */}
      <pre>{JSON.stringify(stockInfo, null, 2)}</pre>
    </div>
  );
};

export default StockDetails;
