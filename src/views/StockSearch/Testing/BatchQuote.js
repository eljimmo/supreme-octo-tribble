import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsStock from 'highcharts/modules/stock'; // Import the Highstock module
import StockGaugeChart from './StockGaugeChart'; // Import the StockGaugeChart component
// import StockBulletGaugeChart from './StockBulletGaugeChart'; // Import the StockBulletGaugeChart component
import StockInfo from './StockInfo';
// import StockLineChart from './StockLineChart';

// Initialize the Highstock module
HighchartsStock(Highcharts);

const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

const SectorCard = styled.div`
  border: 1px solid #00b100;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 350px;
  background: rgba(255, 255, 255, 0.2); /* Transparent white background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow for glass effect */
  backdrop-filter: blur(10px); /* Apply blur for the glass effect */
`;

const Heading12 = styled.h1`
  margin-bottom: 24px;
  font-size: 15px;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const Heading4a = styled.h1`
  margin-bottom: 24px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const WhiteTopLine = styled.div`
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const WhiteSmallText = styled.div`
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const calculateReturn = (historicalData, latestPrice) => {
  if (historicalData.length >= 52) {
    const price52WeeksAgo = historicalData[52 - 1].close;
    const sharesPurchased = 100 / price52WeeksAgo;
    const currentValue = sharesPurchased * latestPrice;
    return currentValue.toFixed(2);
  }
  return 'N/A';
};

const StockCard = ({ symbol, latestPrice, historicalData }) => {
  const ohlcData = historicalData.map(dataPoint => [
    new Date(dataPoint.date).getTime(),
    dataPoint.open,
    dataPoint.high,
    dataPoint.low,
    dataPoint.close,
  ]);

  const volumeData = historicalData.map(dataPoint => [
    new Date(dataPoint.date).getTime(),
    dataPoint.volume,
  ]);

  const investmentReturn = calculateReturn(historicalData, latestPrice); // Use the calculateReturn function here

  const highchartsConfig = {
    chart: {
      backgroundColor: 'transparent', // Set the chart background color to transparent
    },
    title: {
      text: `Stock Price Over Time - ${symbol}`,
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: [
      {
        title: {
          text: 'Price',
        },
      },
      {
        title: {
          text: 'Volume',
        },
        opposite: true, // Place the volume axis on the opposite side
      },
    ],
    series: [
      {
        type: 'ohlc',
        id: 'ohlc',
        name: `${symbol} Stock Price`,
        data: ohlcData,
      },
      {
        type: 'column', // Column chart for volume
        name: 'Volume',
        yAxis: 1, // Use the second yAxis (opposite side) for volume
        data: volumeData, // Volume data
        color: 'red', // Set the volume color to red
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false,
            },
          },
        },
      ],
    },
  };

  return (
    <SectorCard>
      <WhiteTopLine>Stock Symbol: {symbol}</WhiteTopLine>
      <Heading4a>Latest Price: ${latestPrice}</Heading4a>
      <WhiteSmallText>Return on $100 Investment 52 Weeks Ago: ${investmentReturn}</WhiteSmallText>

      <HighchartsReact highcharts={Highcharts} options={highchartsConfig} />
      <WhiteSmallText>Stock Momentum 52 Week Gauge</WhiteSmallText>

      <StockGaugeChart currentValue={latestPrice} lowValue={0} highValue={100} />

      {/* Render StockInfo component for each stock */}
      <StockInfo symbol={symbol} />

      <Link to={`/stock/${symbol}`}>
        <Heading12>
          <button className="btn btn-sm btn-outline-secondary float-right">View Details</button>
        </Heading12>
      </Link>
    </SectorCard>
  );
};



const BatchApp = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbols = ['XPO', 'SYM', 'USLM', 'HOV']; // Example stock symbols

    const fetchData = async () => {
      const response = await Promise.all(
        symbols.map(async symbol => {
          const historicalApiResponse = await fetch(
            `https://cloud.iexapis.com/stable/stock/${symbol}/chart/2y?token=${apiToken}`
          );
          const historicalData = await historicalApiResponse.json();

          const latestApiResponse = await fetch(
            `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiToken}`
          );
          const latestData = await latestApiResponse.json();

          return {
            symbol: symbol,
            latestPrice: latestData.latestPrice,
            historicalData: historicalData,
          };
        })
      );

      setStockData(response);
    };

    fetchData();
  }, []);

  return (
    <SectorInfoContainer>
      <WhiteTopLine>Stock Quotes</WhiteTopLine>
      {stockData.map((stock, index) => (
        <div key={index}>
          {/* <StockBulletGaugeChart
            value={calculateReturn(stock.historicalData, stock.latestPrice)}
            reference={stock.latestPrice}
          /> */}
          <StockCard
            key={index}
            symbol={stock.symbol}
            latestPrice={stock.latestPrice}
            historicalData={stock.historicalData}
          />
                {/* <StockLineChart historicalData={stock.historicalData} /> */}

          {/* <StockInfo symbol={stock.symbol} /> */}

        </div>
      ))}
    </SectorInfoContainer>
  );
};

export default BatchApp;
