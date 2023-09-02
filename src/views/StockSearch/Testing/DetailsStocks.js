import React from 'react';
import { useParams } from 'react-router-dom';
import Plot from 'react-plotly.js';

const StockDetailsPage = ({ stockData }) => {
  const { symbol } = useParams();
  const stock = stockData.find(stock => stock.symbol === symbol);

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>Stock Details for {stock.symbol}</h2>
      <Plot
        data={[
          {
            x: stock.historicalData.map(dataPoint => dataPoint.date),
            y: stock.historicalData.map(dataPoint => dataPoint.close),
            type: 'scatter',
            mode: 'lines',
            name: 'Stock Price',
            line: {
              color: 'rgb(0, 177, 0)',
              width: 3,
            },
          },
        ]}
        layout={{
          width: 800, // Adjust the width as needed
          height: 400, // Adjust the height as needed
          title: 'Stock Price Over the Past Two Years',
          xaxis: { title: 'Date' },
          yaxis: { title: 'Price' },
        }}
      />
    </div>
  );
};

export default StockDetailsPage;
