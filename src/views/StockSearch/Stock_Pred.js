import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

function StockPrediction() {
  const [stockData, setStockData] = useState([]);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const apiKey = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbol = 'AAPL';

    axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/2y?token=${apiKey}`)
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    tf.ready().then(() => {
      const model = createModel();
      setModel(model);
    });
  }, []);

  const createModel = () => {
    const model = tf.sequential();
    model.add(tf.layers.lstm({ units: 50, inputShape: [1, 4] }));
    model.add(tf.layers.dense({ units: 1 }));

    model.compile({ loss: 'meanSquaredError', optimizer: 'adam' });

    return model;
  };

  const trainModel = async () => {
    if (model && stockData.length > 0) {
      const trainX = [];
      const trainY = [];

      for (let i = 0; i < stockData.length - 5; i++) {
        const dataSlice = stockData.slice(i, i + 5);
        const inputData = dataSlice.map(data => [data.open, data.high, data.low, data.close]);
        const outputData = [dataSlice[5].close];

        trainX.push(inputData);
        trainY.push(outputData);
      }

      const trainXTensor = tf.tensor3d(trainX);
      const trainYTensor = tf.tensor2d(trainY);

      await model.fit(trainXTensor, trainYTensor, { epochs: 50 });

      console.log('Model trained');
    }
  };

  useEffect(() => {
    trainModel();
  }, [model, stockData]);

  return (
    <div className="StockPrediction">
      <h1>Stock Price Prediction</h1>
    </div>
  );
}

export default StockPrediction;