import React from 'react';
import Plot from 'react-plotly.js';

const StockBulletGaugeChart = ({ value, reference }) => {
  const gaugeData = [
    {
      type: 'indicator',
      mode: 'number+delta',
      value: value,
      title: {
        text: 'Return on $100 Investment 52 Weeks Ago',
        font: { size: 16 },
      },
      delta: {
        reference: reference,
        increasing: { color: 'green' },
        decreasing: { color: 'red' },
      },
      gauge: {
        axis: { range: [null, 100] },
        bar: { color: 'white' },
        steps: [
          { range: [0, 20], color: 'red' },
          { range: [20, 50], color: 'yellow' },
          { range: [50, 100], color: 'green' },
        ],
      },
    },
  ];

  return (
    <Plot
      data={gaugeData}
      layout={{
        width: 350,
        height: 100,
        margin: { t: 0, r: 0, b: 0, l: 0 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
      }}
      config={{ displayModeBar: false }}
    />
  );
};

export default StockBulletGaugeChart;
