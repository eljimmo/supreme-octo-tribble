import React from 'react';
import Plot from 'react-plotly.js';

const StockGaugeChart = ({ currentValue, lowValue, highValue }) => {
  const data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: currentValue,
      title: {
        text: "Stock Price",
        font: {
          color: "white", // Set the title font color to white
        },
      },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [lowValue, highValue] },
        steps: [
          { range: [lowValue, highValue], color: "lightgray" },
          { range: [lowValue, currentValue], color: "green" },
        ],
      },
      number: {
        font: {
          color: "white", // Set the font color of the currentValue to white
        },
      },
    },
  ];

  return (
    <Plot
      data={data}
      layout={{
        width: 300,
        height: 100,
        margin: { t: 10, b: 0 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
      }}
      config={{ displayModeBar: false }}
    />
  );
};

export default StockGaugeChart;
