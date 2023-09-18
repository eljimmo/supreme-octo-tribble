import React from 'react';
import Plot from 'react-plotly.js';

const OptimizerComparisonChart = ({ sgdData, adamData }) => {

    const sgdTrace = {
        x: sgdData.epochs,
        y: sgdData.loss,
        mode: 'lines',
        name: 'SGD'
    };

    const adamTrace = {
        x: adamData.epochs,
        y: adamData.loss,
        mode: 'lines',
        name: 'Adam'
    };

    const data = [sgdTrace, adamTrace];
    const layout = {
        title: 'Optimizer Loss Comparison',
        xaxis: {
            title: 'Epochs'
        },
        yaxis: {
            title: 'Loss'
        },
        paper_bgcolor: 'rgba(0,0,0,0)', // Transparent paper background
        plot_bgcolor: 'rgba(0,0,0,0)',  // Transparent plot background
        autosize: true,  // Adjust for better fit
    };

    return <Plot data={data} layout={layout} />;
}

export default OptimizerComparisonChart;
