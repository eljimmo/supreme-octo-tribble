import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
// import { Row, Col } from 'reactstrap';
// import { Grid } from '@mantine/core';


const BarCharts = () => {
  const [topMovers, setTopMovers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [selectedStockData, setSelectedStockData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);

  
  useEffect(() => {
    // Fetch top movers and losers data from the IEX API
    const fetchStockData = async () => {
      try {
        const responseMovers = await axios.get(
          'https://cloud.iexapis.com/stable/stock/market/list/mostactive',
          {
            params: {
              token: 'pk_0e682b29c77d48f9804e3dd05453bf0e', // Replace with your actual API token
            },
          }
        );

        const responseLosers = await axios.get(
          'https://cloud.iexapis.com/stable/stock/market/list/losers',
          {
            params: {
              token: 'pk_0e682b29c77d48f9804e3dd05453bf0e', // Replace with your actual API token
            },
          }
        );

        setTopMovers(responseMovers.data);
        setTopLosers(responseLosers.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);


  useEffect(() => {
    const fetchHistoricalData = async () => {
      if (selectedStockData) {
        try {
          const responseHistorical = await axios.get(
            `https://cloud.iexapis.com/stable/stock/${selectedStockData.symbol}/chart/1y`,
            {
              params: {
                token: 'pk_0e682b29c77d48f9804e3dd05453bf0e', // Replace with your actual API token
              },
            }
          );
          setHistoricalData(responseHistorical.data);
        } catch (error) {
          console.error('Error fetching historical data:', error);
        }
      }
    };
  
    fetchHistoricalData();
  }, [selectedStockData]);

  const getChartData = (stocks, color) => {
    return {
      labels: stocks.map((stock) => stock.symbol),
      datasets: [
        {
          label: 'Percentage Change',
          data: stocks.map((stock) => stock.changePercent),
          backgroundColor: color,
        },
      ],
    };
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const stock = topMovers[context.dataIndex] || topLosers[context.dataIndex];
            return `${stock.symbol} - ${stock.changePercent}%\n52-Week High: ${stock.week52High}\n52-Week Low: ${stock.week52Low}\nP/E Ratio: ${stock.peRatio}`;
          },
          afterLabel: (context) => {
            const stock = topMovers[context.dataIndex] || topLosers[context.dataIndex];
            setSelectedStockData(stock);
          },
        },
      },
    },
  };



const historicalChartData = {
  labels: historicalData.map(data => data.date),
  datasets: [
    {
      label: selectedStockData?.symbol || '',
      data: historicalData.map(data => data.close),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};


  const positiveChangeColor = 'rgba(75, 192, 192, 0.6)';
  const negativeChangeColor = 'rgba(255, 99, 132, 0.6)';

  return (
    <div className="card">
      <div className="card-header">Top Movers - Positive Change</div>
      <div className="card-body">
          <Bar
          data={getChartData(topMovers.filter(stock => stock.changePercent >= 0), positiveChangeColor)}
          options={options}
        />
        {selectedStockData && (
          <>
          </>
        )}
          </div>
          <div className="card-header">Top Losers - Negative Change</div>
      <div className="card-body">
          <Bar
          data={getChartData(topLosers.filter(stock => stock.changePercent < 0), negativeChangeColor)}
          options={options}
        />
        {selectedStockData && (
          <>
          </>
        )}
      </div>
    </div>
  );
};

export default BarCharts;




