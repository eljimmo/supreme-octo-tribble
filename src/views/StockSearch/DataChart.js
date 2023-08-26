import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function App() {
  const [stockData, setStockData] = useState([]);
  
  useEffect(() => {
    // Replace 'YOUR_IEX_API_KEY' with your actual IEX API key
    const apiKey = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbol = 'AAPL'; // Example stock symbol
    
    axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/1y?token=${apiKey}`)
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const chartData = {
    labels: stockData.map(data => data.date),
    datasets: [
      {
        label: 'Stock Price',
        data: stockData.map(data => data.close),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="App">
      <h1>Stock Price Chart</h1>
      <Line data={chartData} />
    </div>
  );
}

export default App;