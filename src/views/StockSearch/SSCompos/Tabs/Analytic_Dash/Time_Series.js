import { Grid,
      Card, 
      Text,
       Select, 
       Space, 
       Button, 
       Tooltip
     } from '@mantine/core';
// import { useForm } from '@mantine/form';
import React, { useState, useEffect, useRef } from 'react';
// import useAppState from 'views/StockSearch/hooks/useAppState';
// import Searchbar from 'views/StockSearch/SSCompos/SearchBar/SE_Index';
// import Content from 'views/StockSearch/SSCompos/Content/Output/ContentIndex';
// import Spinner from 'views/StockSearch/SSCompos/Spinner/Index';
// import Content2 from '../../Content/Output/2Content';
// import Content3 from '../../Content/Output/3content';
// import Content4 from '../../Content/Output/4content';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import axios from 'axios';
import stockMarketDataDaily from '../Analytic_Dash/stockMarketDataDaily.json';
import * as tf from "@tensorflow/tfjs";
import { SMA, EMA, RSI, stochastic } from './technical'
// import {
//   BackgroundColorContext,
//   backgroundColors
// } from "contexts/BackgroundColorContext";
// import { PropTypes } from "prop-types";
// import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
// import Dashboard from 'views/StockSearch/SSCompos/Content/DataChart/MostActive';




function Time_series() {
  const [data, setData] = useState([]);
  const [series, setSeries] = useState([]);
  const [isModelTraining, setIsModelTraining] = useState(false);
  const [modelLogs, setModelLogs] = useState([]);
  const [modelResultTraining, setModelResultTraining] = useState(null);
  const modelLogsRef = useRef([]);
  const [investing, setInvesting] = useState({ start: 1000, end: null });
  const [dataEma10, setDataEma10] = useState(null);
  const [dataEma20, setDataEma20] = useState(null);
  const [dataEma50, setDataEma50] = useState(null);
  const [dataSma10, setDataSma10] = useState(null);
  const [dataSma20, setDataSma20] = useState(null);
  const [dataSma50, setDataSma50] = useState(null);
  const [dataSma100, setDataSma100] = useState(null);
  const [dataRsi7, setDataRsi7] = useState(null);
  const [dataRsi14, setDataRsi14] = useState(null);
  const [dataRsi28, setDataRsi28] = useState(null);
  const [dataStochastic7, setDataStochastic7] = useState(null);
  const [dataStochastic14, setDataStochastic14] = useState(null);
  const [formError, setFormError] = useState(null);
  const [symbol, setSymbol] = useState('');
  const [stocknews, setStocknews] = useState([]);
  const [sampleData, setSampleData] = useState(null);
  const [graphTitle, setGraphTitle] = useState(null);
  const [recurrence, setRecurrence] = useState(15);
  const [strategy, setStrategy] = useState(2);
  const [chart, setChart] = useState(null);
  const [time, setTime] = useState('daily');
  const [loss, setLoss] = useState('meanSquaredError');
  const [optimizer, setOptimizer] = useState('adam');
  const [isPredictionLoading, setIsPredictionLoading] = useState(false);
  const [epochs, setepochs] = useState(10);
  const [batchSize, setbatchSize] = useState(32);
  const [isOpen, setIsOpen] = useState(false);
  const timeserieSize = recurrence;
  const toggle = () => {
    setIsOpen(!isOpen);

  };

  useEffect(() => {
    const areAllDataReady =
      data.length > 0 &&
      dataEma10 &&
      dataEma20 &&
      dataEma50 &&
      dataSma10 &&
      dataSma20 &&
      dataSma50 &&
      dataSma100 &&
      dataRsi7 &&
      dataRsi14 &&
      dataRsi28 &&
      dataStochastic7 &&
      dataStochastic14;
    if (areAllDataReady) {
      const sampleDataRaw = splitData([0, 1]).map((e) => e[1]);
      const {
        dataNormalized: sampleDataNormalized,
        dimensionParams: sampleDimensionParams,
      } = normalizeData(sampleDataRaw);
      setSampleData({
        sampleDataRaw: JSON.parse(JSON.stringify(sampleDataRaw))
          .reverse()
          .filter((e, i) => i < 5),
        sampleDimensionParams,
      });
    }
  }, [
    data,
    dataEma10,
    dataEma20,
    dataEma50,
    dataSma10,
    dataSma20,
    dataSma50,
    dataSma100,
    dataRsi7,
    dataRsi14,
    dataRsi28,
    dataStochastic7,
    dataStochastic14,
  ]);

  useEffect(() => {
    if (data.length) {
      setDataStochastic7(
        stochastic({
          period: 7,
          data,
        })
      );
      setDataStochastic14(
        stochastic({
          period: 14,
          data,
        })
      );
      setDataRsi7(
        RSI({
          period: 7,
          data,
        })
      );
      setDataRsi14(
        RSI({
          period: 14,
          data,
        })
      );
      setDataRsi28(
        RSI({
          period: 28,
          data,
        })
      );
      setDataSma10(
        SMA({
          period: 10,
          data,
        })
      );
      setDataSma20(
        SMA({
          period: 20,
          data,
        })
      );
      setDataSma50(
        SMA({
          period: 50,
          data,
        })
      );
      setDataEma10(
        EMA({
          period: 10,
          data,
        })
      );
      setDataEma20(
        EMA({
          period: 20,
          data,
        })
      );
      setDataEma50(
        EMA({
          period: 50,
          data,
        })
      );
      setDataSma100(
        SMA({
          period: 100,
          data,
        })
      );
    }
  }, [data]);
  useEffect(() => {
    setData(
      Object.entries(stockMarketDataDaily['Time Series (Daily)']).sort(
        (a, b) => new Date(a[0]) - new Date(b[0])
      )
    );
    setGraphTitle(stockMarketDataDaily['Meta Data']['2. Symbol']);
  }, [stockMarketDataDaily]);

  
// const data2 = Object.keys(data)
// .reverse()
// .map(key => {
//   return {
//     name: key,
//     uv: Number(data[key]["1. open"])
//   };
// });

// const data3 = Object.keys(data)
// .reverse()
// .map(key => {
//   return {
//     name: key,
//     uv: Number(data[key]["4. close"])
//   };
// });


  useEffect(() => {
    if (
      data.length &&
      series.findIndex((serie) => serie.name === 'Stock value') === -1
    ) {
      setSeries([
        ...series,
        {
          type: 'area',
          id: 'dataseries',
          name: 'Stock value',
          data: data.map((serie) => [
            new Date(serie[0]).getTime(),
            Number(serie[1]['4. close']),
          ]),
          gapSize: 5,
          tooltip: {
            valueDecimals: 2,
          },
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get('rgba'),
              ],
            ],
          },
          threshold: null,
        },
      ]);
    }
  }, [data, series]);
  
  

  // create a const for tensorflow optimizers with keys and values 
  const optimizers = {
    adam: tf.train.adam(),
    sgd: tf.train.sgd(),
    adagrad: tf.train.adagrad(),
    adadelta: tf.train.adadelta(),
    adamax: tf.train.adamax(),
    // rmsprop: tf.train.rmsprop(),
  };

  // create a const for tensorflow loss functions with keys and values
  const LossFunctions = {
    meanSquaredError: tf.losses.meanSquaredError,
    absoluteDifference: tf.losses.absoluteDifference,
    computeWeightedLoss: tf.losses.computeWeightedLoss,
    cosineDistance: tf.losses.cosineDistance,
    hingeLoss: tf.losses.hingeLoss,
    huberLoss: tf.losses.huberLoss,
    logLoss: tf.losses.logLoss,
    meanSquaredError: tf.losses.meanSquaredError,
    sigmoidCrossEntropy: tf.losses.sigmoidCrossEntropy,
    softmaxCrossEntropy: tf.losses.softmaxCrossEntropy,
  };

  // create a const for tensorflow metrics with keys and values
  // const metrics = {
  //   accuracy: tf.metrics.accuracy,
  //   binaryAccuracy: tf.metrics.binaryAccuracy,
  //   binaryCrossentropy: tf.metrics.binaryCrossentropy,
  //   categoricalAccuracy: tf.metrics.categoricalAccuracy,
  //   categoricalCrossentropy: tf.metrics.categoricalCrossentropy,
  //   cosineProximity: tf.metrics.cosineProximity,
  //   falseNegatives: tf.metrics.falseNegatives,
  //   falsePositives: tf.metrics.falsePositives,
  //   mean: tf.metrics.mean,
  //   meanAbsoluteError: tf.metrics.meanAbsoluteError,
  //   meanAbsolutePercentageError: tf.metrics.meanAbsolutePercentageError,
  //   meanIoU: tf.metrics.meanIoU,
  //   meanRelativeError: tf.metrics.meanRelativeError,
  //   meanSquaredError: tf.metrics.meanSquaredError,
  //   meanSquaredLogarithmicError: tf.metrics.meanSquaredLogarithmicError,
  //   precision: tf.metrics.precision,
  //   precisionAtRecall: tf.metrics.precisionAtRecall,
  //   recall: tf.metrics.recall,
  //   recallAtPrecision: tf.metrics.recallAtPrecision,
  //   rootMeanSquaredError: tf.metrics.rootMeanSquaredError,
  //   sparseCategoricalAccuracy: tf.metrics.sparseCategoricalAccuracy,
  //   sparseCategoricalCrossentropy: tf.metrics.sparseCategoricalCrossentropy,
  //   sparseTopKCategoricalAccuracy: tf.metrics.sparseTopKCategoricalAccuracy,
  //   trueNegatives: tf.metrics.trueNegatives,
  //   truePositives: tf.metrics.truePositives,
  // };

  // create a const for tensorflow layers with keys and values
  // const layers = {
  //   dense: tf.layers.dense,
  //   flatten: tf.layers.flatten,
  //   dropout: tf.layers.dropout,
  //   conv2d: tf.layers.conv2d,
  //   maxPooling2d: tf.layers.maxPooling2d,
  //   averagePooling2d: tf.layers.averagePooling2d,
  //   globalAveragePooling2d: tf.layers.globalAveragePooling2d,
  //   globalMaxPooling2d: tf.layers.globalMaxPooling2d,
  //   batchNormalization: tf.layers.batchNormalization,
  //   activation: tf.layers.activation,
  //   concatenate: tf.layers.concatenate,
  //   add: tf.layers.add,
  //   multiply: tf.layers.multiply,
  //   average: tf.layers.average,
  //   maximum: tf.layers.maximum,
  //   minimum: tf.layers.minimum,
  //   dot: tf.layers.dot,
  //   zeroPadding2d: tf.layers.zeroPadding2d,
  //   cropping2d: tf.layers.cropping2d,
  //   upSampling2d: tf.layers.upSampling2d,
  //   convolution2dTranspose: tf.layers.convolution2dTranspose,
  //   separableConv2d: tf.layers.separableConv2d,
  //   depthwiseConv2d: tf.layers.depthwiseConv2d,
  //   rnn: tf.layers.rnn,
  //   lstm: tf.layers.lstm,
  //   gru: tf.layers.gru,
  //   simpleRNN: tf.layers.simpleRNN,
  //   simpleRNNCell: tf.layers.simpleRNNCell,
  //   lstmCell: tf.layers.lstmCell,
  //   gruCell: tf.layers.gruCell,
  //   stackedRNNCells: tf.layers.stackedRNNCells,
  //   bidirectional: tf.layers.bidirectional,
  //   timeDistributed: tf.layers.timeDistributed,
  //   recurrentDropout: tf.layers.recurrentDropout,
  //   embedding: tf.layers.embedding,
  //   gaussianNoise: tf.layers.gaussianNoise,
  //   gaussianDropout: tf.layers.gaussianDropout,
  //   alphaDropout: tf.layers.alphaDropout,
  //   localResponseNormalization: tf.layers.localResponseNormalization,
  //   layerNormalization: tf.layers.layerNormalization,
  //   elu: tf.layers.elu,
  //   leakyReLU: tf.layers.leakyReLU,
  //   prelu: tf.layers.prelu,
  //   thresholdedReLU: tf.layers.thresholdedReLU,
  //   softplus: tf.layers.softplus,
  //   softsign: tf.layers.softsign,
  //   relu: tf.layers.relu,
  //   sigmoid: tf.layers.sigmoid,
  //   tanh: tf.layers.tanh,
  //   softmax: tf.layers.softmax,
  // };


  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };


  // create a const for the handleLossChange function which takes in the value of the loss function selected from the dropdown menu and sets the loss function to the value
  const handleLossChange = (event) => {
    setLoss(event.target.value);
  };


  const getNewStock = async (event) => {
    event.preventDefault();
    if (!symbol) {
      return;
    }
    setGraphTitle(null);
    setSampleData(null);
    setFormError(null);
    setInvesting({ start: 1000, end: null });
    setDataEma10(null);
    setDataEma20(null);
    setDataEma50(null);
    setDataSma10(null);
    setDataSma20(null);
    setDataSma50(null);
    setDataSma100(null);
    setDataRsi7(null);
    setDataRsi14(null);
    setDataRsi28(null);
    setDataStochastic7(null);
    setDataStochastic14(null);
    setModelResultTraining(null);
    setModelLogs([]);
    setIsModelTraining(false);
    setSeries([]);
    setData([]);
    modelLogsRef.current = [];
    const { data } = await axios.get(
      `https://www.alphavantage.co/query?${new URLSearchParams({
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol,
        outputsize: 'full',
        apikey: '0M9PWWBA6S79C84X',
      })}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (data['Error Message']) {
      setFormError(data['Error Message']);
    } else {
      setData(
        Object.entries(data['Time Series (Daily)']).sort(
          (a, b) => new Date(a[0]) - new Date(b[0])
        )
      );
      setGraphTitle(data['Meta Data']['2. Symbol']);
    }
  };

  const splitData = (trainingRange) => {
    const descEma10 = JSON.parse(JSON.stringify(dataEma10)).reverse();
    const descEma20 = JSON.parse(JSON.stringify(dataEma20)).reverse();
    const descEma50 = JSON.parse(JSON.stringify(dataEma50)).reverse();
    const descSma10 = JSON.parse(JSON.stringify(dataSma10)).reverse();
    const descSma20 = JSON.parse(JSON.stringify(dataSma20)).reverse();
    const descSma50 = JSON.parse(JSON.stringify(dataSma50)).reverse();
    const descSma100 = JSON.parse(JSON.stringify(dataSma100)).reverse();
    const descRsi7 = JSON.parse(JSON.stringify(dataRsi7)).reverse();
    const descRsi14 = JSON.parse(JSON.stringify(dataRsi14)).reverse();
    const descRsi28 = JSON.parse(JSON.stringify(dataRsi28)).reverse();
    const descStochastic7 = JSON.parse(
      JSON.stringify(dataStochastic7)
    ).reverse();
    const descStochastic14 = JSON.parse(
      JSON.stringify(dataStochastic14)
    ).reverse();
    const dataRaw = JSON.parse(JSON.stringify(data))
      .reverse()
      .reduce((acc, curr, index, array) => {
        if (
          !descEma10[index] ||
          !descEma20[index] ||
          !descEma50[index] ||
          !descSma10[index] ||
          !descSma20[index] ||
          !descSma50[index] ||
          !descSma100[index] ||
          !descRsi7[index] ||
          !descRsi14[index] ||
          !descRsi28[index] ||
          !descStochastic7[index] ||
          !descStochastic14[index]
        ) {
          return acc;
        }
        return [
          ...acc,
          [
            curr[0],
            [
              Number(curr[1]['4. close']),
              Number(curr[1]['1. open']),
              Number(curr[1]['2. high']),
              Number(curr[1]['3. low']),
              // Number(curr[1]["5. volume"]),
              descEma10[index],
              descEma20[index],
              descEma50[index],
              descSma10[index],
              descSma20[index],
              descSma50[index],
              descSma100[index],
              descRsi7[index],
              descRsi14[index],
              descRsi28[index],
              descStochastic7[index],
              descStochastic14[index],
              // seasonality({ element: curr, fn: "cos", days: 7 * 24 * 60 * 60 }),
              // seasonality({ element: curr, fn: "sin", days: 7 * 24 * 60 * 60 }),
            ],
          ],
        ];
      }, [])
      .reverse();
    const [bottom, top] = trainingRange;
    const baseIndex = bottom === 0 ? 0 : Math.ceil(bottom * dataRaw.length) - 1;
    const chunk = dataRaw.slice(
      baseIndex,
      top === 1
        ? undefined
        : baseIndex + 1 + Math.floor((top - bottom) * dataRaw.length)
    );
    return chunk;
  };

  const createTimeseriesDimensionForRNN = (inputs) => {
    inputs.reverse();
    const chunks = [];
    for (let i = 0; i < inputs.length - 1; i++) {
      chunks.push(inputs.slice(i, i + timeserieSize));
    }

    const newChunks = chunks.map((e) => e.reverse()).reverse();
    const timeseriesChunks = [];
    newChunks.forEach((chunk) => {
      if (chunk.length === timeserieSize) {
        timeseriesChunks.push(chunk);
      }
    });
    return timeseriesChunks;
  };

  const normalizeData = (dataRaw, params) => {
    const unstackData = (stachData, axis) => stachData.map((e) => e[axis]);
    const dataPerDimension = [];
    for (let i = 0; i < dataRaw[0].length; i++) {
      dataPerDimension.push(unstackData(dataRaw, i));
    }
    let dimensionParams = params;

    if (!params) {
      dimensionParams = dataPerDimension.map((dimension) => {
        const mean =
          dimension.reduce((acc, curr) => acc + curr, 0) / dimension.length;
        const min = dimension.reduce((acc, curr) => {
          if (acc === null || curr < acc) {
            return curr;
          }
          return acc;
        }, null);
        const max = dimension.reduce((acc, curr) => {
          if (acc === null || curr > acc) {
            return curr;
          }
          return acc;
        }, null);
        return {
          min,
          max,
          mean,
          std: Math.sqrt(
            dimension
              .map((e) => (e - mean) ** 2)
              .reduce((acc, curr) => acc + curr, 0) / dimension.length
          ),
        };
      });
    }
    const epsilon = 1e-3;
    return {
      dataNormalized: createTimeseriesDimensionForRNN(
        dataRaw.map((set) =>
          set.map(
            (e, i) =>
              (e - dimensionParams[i].mean) / (dimensionParams[i].std + epsilon)
            // https://www.tensorflow.org/tutorials/structured_data/time_series#normalize_the_data
          )
        )
      ),
      dimensionParams,
    };
  };



  const unNormalizeData = (dataRaw, dimensionParam) =>
    dataRaw.map((e) => e * dimensionParam.std + dimensionParam.mean);

  const makeDataset = async (range) => {
    const dataRange = splitData(range).map((e) => e[1]);
    const { dataNormalized, dimensionParams } = normalizeData(dataRange);
    const xDataset = tf.data
      .array(dataNormalized)
      .take(dataNormalized.length - 1);
    const yDataset = tf.data
      .array(dataNormalized)
      .map((e) => e[e.length - 1][0])
      .skip(1);
    const xyDataset = tf.data
      .zip({ xs: xDataset, ys: yDataset })
      .batch(batchSize)
      .shuffle(batchSize);
    // const datasetLogs = [];
    // await xyDataset.forEachAsync((e) => {
    //   datasetLogs.push(e);
    // });
    // console.log("datasetLogs", datasetLogs);
    return {
      dataset: xyDataset,
      dimensionParams,
    };
  };

  const createModel = async () => {
    try {
      rebootSeries();
      setIsModelTraining(true);
      setModelResultTraining(null);
      const { dataset: train } = await makeDataset([0, 0.7]);
      const { dataset: validate } = await makeDataset([0.7, 0.9]);
      const model = tf.sequential();

      const cells = [
        tf.layers.lstmCell({ units: 16 }),
        tf.layers.lstmCell({ units: 16 }),
        tf.layers.lstmCell({ units: 16 }),
        tf.layers.lstmCell({ units: 16 }),
      ];

      model.add(
        tf.layers.rnn({
          cell: cells,
          inputShape: [timeserieSize, 16],
          returnSequences: false,
        })
      );

      model.add(
        tf.layers.dense({
          units: 10,
        })
      );

      // model.summary();

// compile model with the optimizer and loss function from user input 


      model.compile({
        optimizer: optimizer,
        loss: loss,
        metrics: ['accuracy'],
      });
      setModelLogs([]);
      modelLogsRef.current = [];
      const history = await model.fitDataset(train, {
        epochs,
        validationData: validate,
        callbacks: {
          onEpochEnd: (epoch, log) => {
            modelLogsRef.current.push([epoch + 1, log.loss]);
            setModelLogs([...modelLogsRef.current]);
          },
        },
      });
      const result = {
        model: model,
        stats: history,
      };

      setModelResultTraining(result);
    } catch (error) {
      throw error;
    } finally {
      setIsModelTraining(false);
    }
  };

  const gessLabels = (inputs, dimensionParams) => {
    const xs = tf.tensor3d(inputs);
    let outputs = modelResultTraining.model.predict(xs);
    outputs = Array.from(outputs.dataSync());
    const results = unNormalizeData(outputs, dimensionParams[0]);
    return results;
  };

  const makePredictions = async () => {
    setIsPredictionLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    try {
      const newSeries = rebootSeries();
      const xs = splitData([0.9, 1]);
      const timeseriesChunks = createTimeseriesDimensionForRNN(xs);
      const predictions = [];
      const flagsSerie = [];
      let _money = investing.start;
      let _flag = {};
      let _value;
      let _lastValue;
      let _ys;
      timeseriesChunks.forEach((chunk, index, array) => {
        const { dataNormalized, dimensionParams } = normalizeData(
          chunk.map((e) => e[1])
        );
        const value = chunk[chunk.length - 1][1][0];
        _lastValue = value;
        const date = chunk[chunk.length - 1][0];
        const [ys] = gessLabels(dataNormalized, dimensionParams);
        if (_ys) {
          const predEvol = (ys - _ys) / _ys;
          let flag = {};

          /**
           * First we must define what type of order
           */
          if (
            (strategy == 1 ? predEvol > 0 && ys > value : true) &&
            (strategy == 2 ? predEvol > 0 : true) &&
            (strategy == 3 ? ys > value : true)
          ) {
            flag.type = 'buy';
          }
          if (
            (strategy == 1 ? predEvol < 0 && ys < value : true) &&
            (strategy == 2 ? predEvol < 0 : true) &&
            (strategy == 3 ? ys < value : true)
          ) {
            flag.type = 'sell';
          }

          /**
           * Second we make an action if the type of order changed from before
           */
          if (_flag.type !== flag.type && flag.type) {
            if (!_value) {
              _value = value;
            }
            let realEvolv2 = (value - _value) / _value;

            if (_flag.type === 'buy') {
              _money = _money * (1 + realEvolv2);
            }
            if (_flag.type === 'sell') {
              _money = _money * (1 + -1 * realEvolv2);
            }
            _value = value;
            flag.label = `Investing ${Math.round(_money)}$ at value ${value}`;
            flagsSerie.push({
              x: new Date(date).getTime(),
              title: flag.type,
              text: flag.label,
              color: flag.type === 'buy' ? 'green' : 'red',
            });
            _flag = flag;
          }
        }

        let datePredicted;
        const nextChunk = array[index + 1];
        if (nextChunk) {
          const nextDate = nextChunk[nextChunk.length - 1][0];
          datePredicted = new Date(nextDate).getTime();
        } else {
          const lastDate = chunk[chunk.length - 1][0];
          datePredicted = new Date(lastDate).setDate(
            new Date(lastDate).getDate() + 1
          );
        }

        predictions.push([datePredicted, ys]);
        _ys = ys;
      });
      (function finishOffTheLastTrade() {
        let realEvolv2 = (_lastValue - _value) / _value;

        if (_flag.type === 'buy') {
          _money = _money * (1 + realEvolv2);
        }
        if (_flag.type === 'sell') {
          _money = _money * (1 + -1 * realEvolv2);
        }
      })();
      setInvesting({ start: 1000, end: _money });
      setSeries([
        ...newSeries,
        {
          type: 'line',
          name: 'Predicted value',
          data: predictions,
        },
        {
          type: 'flags',
          data: flagsSerie,
          onSeries: 'dataseries',
          shape: 'squarepin',
          width: 18,
        },
      ]);
    } catch (error) {
      throw error;
    } finally {
      setIsPredictionLoading(false);
    }
  };

  const rebootSeries = () => {
    setInvesting({ start: 1000, end: null });
    const serieIndex = series.findIndex(
      (serie) => serie.name === 'Predicted value'
    );
    let newSeries = series;
    if (serieIndex !== -1) {
      newSeries.splice(serieIndex, 2);
      setSeries([...newSeries]);
    }
    return newSeries;
  };

  const options = {
    rangeSelector: {
      selected: 4,
    },

    title: {
      text: `${graphTitle}`,
    },
    shadow: true,

    tooltip: {
      style: {
        width: '200px',
      },
      valueDecimals: 4,
      shared: true,
    },

    yAxis: {
      title: {
        text: 'stock value',
      },
    }, 
    fillColor: { 
      linearGradient: [205, 0, 0, 300], stops: [[0, 'rgb(15, 186, 15)'], [1, 'rgb(15, 186, 15)']] },
    xAxis: {
      type: 'datetime',
    },
    series,

  };

  const options2 = {
    title: {
      text: 'Model training graph',
    },

    subtitle: {
      text: 'Modeling Loss Through Training',
    },

    yAxis: {
      title: {
        text: 'Loss',
      },
    },

    xAxis: {
      title: {
        text: 'Epoch',
      },
      min: 1,
      max: epochs,
    },

    series: [
      {
        type: 'line',
        name: 'loss',
        data: modelLogs,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
        },
      ],
    },
  };



  const options3 = {
    title: {
      text: 'Model training graph',
    },

    subtitle: {
      text: 'Modeling Loss Through Training',
    },

    yAxis: {
      title: {
        text: 'Loss',
      },
    },

    xAxis: {
      title: {
        text: 'Epoch',
      },
      min: 1,
      max: epochs,
    },

    series: [
      {
        type: 'bar',
        name: 'loss',
        data: modelLogs,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
        },
      ],
    },
  };

  return (
    <>
   <Card withBorder shadow="sm" radius="md" 
   // set the background coloor of the card to transparent
   bg="transparent">

{/* <Grid> */}
      {/* <Grid.Col span={6}> */}
{/* 
      <LineChart width={500} height={300} data={series}>
    <XAxis dataKey="open" />
    <YAxis domain={["dataMin", "dataMax"]} />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="high" stroke="#8884d8" />
  </LineChart> */}

        {/* </Grid.Col> */}


      {/* <Grid.Col span={6}> */}
{/* 
      <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="close" />
    <YAxis domain={["dataMin", "dataMax"]} />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="high" stroke="#8884d8" />
  </LineChart> */}

      {/* </Grid.Col> */}

    {/* </Grid> */}


    <Card.Section withBorder inheritPadding py="xs">
    <Text fz="md" c="green"> Time series forecasting is the use of a model to predict future values based on previously observed values.</Text>
    </Card.Section>
      <Text fz="md" c="green">In mathematics, a time series is a series of data points indexed (or listed or graphed) in time order. Most commonly, a time series is a sequence taken at successive equally spaced points in time. Thus it is a sequence of discrete-time data.</Text>
      <Text fz="md" c="green">Time series analysis comprises methods for analyzing time series data in order to extract meaningful statistics and other characteristics of the data.</Text>
      <Text fz="md" c="green"> Time series forecasting is the use of a model to predict future values based on previously observed values.</Text>
      <Space h="md" />
      {/* <form> */}
      <Grid grow>
      <Grid.Col span={4}>
      <label>
      <Text component="span" inherit color="grey">
Ticker : </Text>
          <input
            type="text"
            name="symbol"
            placeholder="AMZN"
            value={symbol}
            onChange={handleSymbolChange}
          ></input>
          </label>
          <Button onClick={getNewStock} variant="outline" >
          Submit Stock
    </Button>
    <br />
    <Button onClick={createModel} variant="outline" >
         Create Model
    </Button>
    <br />
    <Text component="span" inherit color="green">
    {isModelTraining
                ? 'Model Currently Training'
                : 'Create + Validate'}
                <br />
    {isPredictionLoading
                ? 'Predicting'
                : 'Predict'}
</Text>
                               {/* <label> */}
              {/* <span>
              Since this is using time series recurrance method enter the number of time series to be used for model compilation
              </span>
              <input
                size={2}
                value={recurrence}
                disabled={isModelTraining || isPredictionLoading}
                onChange={(event) => {
                  setRecurrence(
                    isNaN(Number(event.target.value))
                      ? event.target.value
                      : Number(event.target.value)
                  );
                }}
              /> */}
              {/* {typeof recurrence !== 'number' && <span>Only use number</span>}
              {typeof recurrence === 'number' && recurrence < 2 && (
                <span>
                  Minimum 2 are needed!
                </span>
              )}
              {typeof recurrence === 'number' && recurrence > 32 && (
                <span>It may take a lot of time</span>
              )} */}
            {/* </label> */}
            <br />
            <Text component="span" inherit color="green">

              {isModelTraining
                ? 'Model is training'
                : 'Create and validate model'}
            </Text>
              
              <br />

            {/* </Button>{' '} */}
            <Text component="span" inherit color="blue">
              Running Predictive Modeling is CPU intensive, after creating a model,  <u>please stay on this page</u> !
              <br />
              <u>Training a Model to better Predict Future Outcomes comes from trying to fit the best combination of weights and bias to a machine learning algorithm to minimize a loss function over the prediction range.  </u> Increasing the time series recurrence will increase the predictive accuracy of the model but will also increase the time it takes to train the model.
              Currently Training {recurrence} Periods.
              <br /> 
            </Text>
            <br />
            {/* <input
              disabled={
                isModelTraining ||
                !modelResultTraining ||
                isPredictionLoading ||
                true
              }
              checked={strategy == 3}
              type="radio"
              id="classic"
              name="flag-strategy"
              value={3}
              onChange={(event) => {
                setStrategy(Number(event.target.value));
              }}
            /> */}
            {/* <label htmlFor="classic">
              Classic - The prediction next day is higher than the real value
              today (the reverse for sell order)
            </label>
            <br /> */}
            {/* <input
              disabled={
                isModelTraining ||
                !modelResultTraining ||
                isPredictionLoading ||
                true
              }
              checked={strategy == 1}
              type="radio"
              id="secure"
              name="flag-strategy"
              value={1}
              onChange={(event) => {
                setStrategy(Number(event.target.value));
              }}
            /> */}
            {/* <label htmlFor="secure">
              Secure - The prediction next day is higher than the prediction
              today & the prediction next day is higher than the real value
              today (the reverse for sell order)
            </label> */}
            <br />
            <Button
              onClick={makePredictions}
              variant="outline"
              disabled={!modelResultTraining || isPredictionLoading}
            >
              Make Predictions
            </Button>
            <br />
                        {modelLogs.length > 0 && (
              <>
                {investing.end ? (
        <Text component="span" inherit color="blue">
        {`You invested ${
                    investing.start
                  }$, you get off the train with ${Math.round(
                    investing.end
                  )}$`}
                  </Text>
                ) : (
                  <p>{`You are investing ${investing.start}$, click on Make predictions button`}</p>
                )}
              </>
            )}
            <br />
            {/* {isModelTraining && (
              <p>
                <u>
                  Please stay on the page, and leave your computer do the job ;)
                </u>
              </p>
            )} */}
            {/* {isPredictionLoading && (
              <p>
                <u>Please stay on the page, predictions are loading ;)</u>
              </p>
            )} */}
            {/* {modelLogs.length > 0 && (
              <>
                {investing.end ? (
                  <p>{`You invested ${
                    investing.start
                  }$, you get off the train with ${Math.round(
                    investing.end
                  )}$`}</p>
                ) : (
                  <p>{`You are investing ${investing.start}$, click on Make predictions button`}</p>
                )}
              </>
            )} */}
      </Grid.Col>
      <Grid.Col span={4}>
      <Tooltip.Floating label="The purpose of optimization is to achieve the “best” design relative to a set of prioritized criteria or constraints " color="red">
      <Text component="span" inherit color="blue">
      Optimizers:
      </Text>
      </Tooltip.Floating>
               <Select
      placeholder="Default Adam"
      data={['Momentum', 'Adagrad', 'Adadelta', 'Adam', 'Adamax', 'RMSprop']}
      // onChange={handleOptimizerChange}
    />        
      <Tooltip.Floating label="The loss function is a method of evaluating how well your machine learning algorithm models your featured data set. " color="red">
      <Text component="span" inherit color="blue">
        Loss Function : </Text>
      </Tooltip.Floating>
               <Select
      // placeholder="Default MeanSquaredError"
      // value={tf.losses.meanSquaredError}
      // map over the array of loss functions and return a select option for each one 
      //set the value of the select to the loss function selected

      data={
        Object.keys(tf.losses).map((loss) => {
          return loss
        }
        )

      }
            // data={['BinaryCrossentropy', 'BinaryFocalCrossentropy', 'Huber', 'Mean Squared Logarithmic Error', 'MeanAbsoluteError', 'SparseCategoricalCrossentropy', 'meanSquaredError']}
      onChange={handleLossChange}
    />    

      {/* <Tooltip.Floating label="The number of complete passes through the training dataset. " color="red"> */}
      <Text component="span" inherit color="blue"> Time: </Text>
               <Select
      placeholder="Default Daily"
      value='Daily'
      data={['1D', '5D', '1M', '3M', '6M', '1Y', '2Y', '5Y', '10Y', 'YTD', 'MAX']}
      // onChange={handleTimeChange}
    /> 
      {/* </Tooltip.Floating> */}
      <Tooltip.Floating label="The batch size is a hyperparameter that defines the number of samples to work through before updating the internal model parameters. " color="red">
      <Text component="span" inherit color="blue">Batch Size: </Text>
      </Tooltip.Floating>
      <Select
      placeholder="Default 32"
      data={['32', '64']}
      // onChange={handleBatchSizeChange}
    /> 
          <Tooltip.Floating label="An epoch elapses when an entire dataset is passed forward and backward through the neural network exactly one time. " color="red">
          <Text component="span" inherit color="blue">Epochs: </Text>
          </Tooltip.Floating>

      <Select
placeholder="Default 10"
data={['18', '32', '64']}
// onChange={handleEpochsChange}
/> 

{/* <span> Chart Type: </span>
      <Select
placeholder="Pick one"
data={['line']}
onChange={handleChartChange}
/> */}
      {/* <Select
placeholder="Default 10"
data={['18', '32', '64']}
onChange={handleEpochsChange}
/>  */}
<Text component="span" inherit color="blue">
                Since this is using time series recurrance method enter the number of time series to be used for model compilation
              </Text>
              <input
                size={2}
                value={recurrence}
                disabled={isModelTraining || isPredictionLoading}
                onChange={(event) => {
                  setRecurrence(
                    isNaN(Number(event.target.value))
                      ? event.target.value
                      : Number(event.target.value)
                  );
                }}
              />
               {typeof recurrence !== 'number' && <span>Only use number</span>}
              {typeof recurrence === 'number' && recurrence < 2 && (
                <span>
                  Minimum 2 are needed!
                </span>
              )}
              {typeof recurrence === 'number' && recurrence > 32 && (
                <span>It may take a lot of time</span>
              )} 
      </Grid.Col>
    </Grid>
        {/* </form> */}
        <Space h="md" />
        <Grid>
      <Grid.Col span={6}>
      <HighchartsReact
                  highcharts={Highcharts}
                  options={options2}
                  constructorType={'chart'}
                />
      </Grid.Col>
      <Grid.Col span={6}>
      <HighchartsReact
            highcharts={Highcharts}
            options={options3}
            constructorType={'stockChart'}/>
             <Space h="md" />
      </Grid.Col>
    </Grid>
                <Space h="md" />
                    <HighchartsReact
            highcharts={Highcharts}
            options={options}
            constructorType={'stockChart'}/>
             <Space h="md" />
    </Card>
    </>
  );
}







function SeriesSimulationsModeling() {
  return (
    <div my="md" >
    <Grid>
        <Grid.Col >{Time_series()}</Grid.Col>
        {/* <Grid.Col xs={4}>{Understanding_Time_Series()}</Grid.Col> */}
        {/* <Grid.Col xs={3}>{Daily_returns()}</Grid.Col>
        <Grid.Col xs={3}>{Var_Daily()}</Grid.Col>
        <Grid.Col xs={6}>{Confidence_Intervals()}</Grid.Col> */}
      </Grid>
    </div>
  );

}

export default SeriesSimulationsModeling;