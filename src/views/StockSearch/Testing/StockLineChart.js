import React from 'react';
import { Line } from 'react-chartjs-2';

const StockLineChart = ({ historicalData }) => {
  const calculateMovingAverage = (data, period) => {
    const movingAverages = [];
    for (let i = period - 1; i < data.length; i++) {
      const sum = data
        .slice(i - period + 1, i + 1)
        .reduce((acc, item) => acc + item.close, 0);
      movingAverages.push(sum / period);
    }
    return movingAverages;
  };

  const labels = historicalData.map((dataPoint, index) => index + 1); // Index-based labels
  const closePrices = historicalData.map(dataPoint => dataPoint.close);
  const movingAverage10 = calculateMovingAverage(historicalData, 10);
  const movingAverage25 = calculateMovingAverage(historicalData, 25);
  const movingAverage50 = calculateMovingAverage(historicalData, 50);
  const movingAverage100 = calculateMovingAverage(historicalData, 100);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Close Price',
        data: closePrices,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: '10-Day Moving Average',
        data: movingAverage10,
        borderColor: 'green',
        fill: false,
      },
      {
        label: '25-Day Moving Average',
        data: movingAverage25,
        borderColor: 'red',
        fill: false,
      },
      {
        label: '50-Day Moving Average',
        data: movingAverage50,
        borderColor: 'purple',
        fill: false,
      },
      {
        label: '100-Day Moving Average',
        data: movingAverage100,
        borderColor: 'orange',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Day',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default StockLineChart;
