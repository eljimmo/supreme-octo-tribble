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




    // const data = [sgdTrace, adamTrace, rmspropTrace, adagradTrace];



  const isMobile = window.innerWidth <= 600;
  const fontSize = isMobile ? 5 : 14;  // Reduced the mobile font size to 8
  const legendSize = isMobile ? 5 : 11;

  const legendPlacement = isMobile ? 
    { orientation: 'h', x: 0, y: -0.2, font: { size: legendSize } } :  {};

  // Adjust the width and height based on your requirements
  const chartSize = isMobile ? { width: 275, height: 175 } : {};

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
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 4
    }
  };

  return <Plot data={[sgdTrace, adamTrace, rmspropTrace, adagradTrace]} layout={layout} responsive={true} />;
}

export default OptimizerComparisonChart;
