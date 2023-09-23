import React from 'react';
import Plot from 'react-plotly.js';

const OptimizerComparisonChart = ({ sgdData, adamData, rmspropData, adagradData }) => {

    
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

    const rmspropTrace = {
        x: rmspropData.epochs,
        y: rmspropData.loss,
        mode: 'lines',
        name: 'RMSprop'
    };

    const adagradTrace = {
        x: adagradData.epochs,
        y: adagradData.loss,
        mode: 'lines',
        name: 'Adagrad'
    };


    const isMobile = window.innerWidth <= 800;
    const fontSize = isMobile ? 8 : 16;  // Reduced the mobile font size to 8
    const legendSize = isMobile ? 8 : 12;
    
    const legendPlacement = isMobile ? 
        { orientation: 'h', x: 0, y: -0.2, font: { size: legendSize } } :  {};

    const chartSize = isMobile ? { width: window.innerWidth - 20, height: 300 } : {};

    const layout = {
        ...chartSize, 
        title: {
            text: 'Optimizer Loss Comparison',
            font: {
                size: fontSize
            }
        },
        xaxis: {
            title: {
                text: 'Epochs',
                font: {
                    size: fontSize
                }
            }
        },
        yaxis: {
            title: {
                text: 'Loss',
                font: {
                    size: fontSize
                }
            }
        },
        legend: {
            ...legendPlacement
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        autosize: true,
    };

    return <Plot data={[sgdTrace, adamTrace, rmspropTrace, adagradTrace]} layout={layout} responsive={true} />;
}

export default OptimizerComparisonChart;
