import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

function StockChart({ selectedStock }) {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    if (selectedStock) {
      axios.get(`https://cloud.iexapis.com/stable/stock/${selectedStock}/chart/1y?token=pk_0e682b29c77d48f9804e3dd05453bf0e`)
        .then(response => {
          setStockData(response.data);
        })
        .catch(error => {
          console.error('Error fetching stock data:', error);
        });
    }
  }, [selectedStock]);

  const chartData = {
    options: {
      chart: {
        id: 'stock-chart',
      },
      xaxis: {
        type: 'datetime',
      },
    },
    series: [
      {
        name: 'Stock Price',
        data: stockData.map(data => ({
          x: new Date(data.date).getTime(),
          y: data.close,
        })),
      },
    ],
  };

  return (
    <div>
      {selectedStock ? (
        <div>
          <h2>Stock Price Chart</h2>
          <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
      ) : (
        <p>Please select a stock to view the chart.</p>
      )}
    </div>
  );
}

export default StockChart;
