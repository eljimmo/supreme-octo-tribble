// StockCardRouting.js
// StockCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Plot from 'react-plotly.js';

const Card = styled.div`
  border: 1px solid #00b100;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  cursor: pointer;
`;

const StockCardR = ({ symbol, historicalData }) => {
  const plotData = [
    {
      x: historicalData.map((dataPoint) => dataPoint.date),
      y: historicalData.map((dataPoint) => dataPoint.close),
      type: 'scatter',
      mode: 'lines',
      name: 'Stock Price',
      line: {
        color: 'rgb(0, 177, 0)',
        width: 3,
      },
    },
  ];

  return (
    <Link to={`/stock/${symbol}`} style={{ textDecoration: 'none' }}>
      <Card>
        <h3>{symbol}</h3>
        <Plot
          data={plotData}
          layout={{
            width: 280,
            height: 180,
            title: 'Stock Price Over Time',
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
          }}
          config={{ displayModeBar: false }}
        />
      </Card>
    </Link>
  );
};

export default StockCardR;
