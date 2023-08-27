import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const StockCard = () => {
  const [topMovers, setTopMovers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  
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
            return `${stock.symbol} - ${stock.changePercent}%\n52-Week High: ${stock.week52High}\n52-Week Low: ${stock.week52Low}\nSector: ${stock.sector}\nP/E Ratio: ${stock.peRatio}`;
          },
        },
      },
    },
  };

  const positiveChangeColor = 'rgba(75, 192, 192, 0.6)';
  const negativeChangeColor = 'rgba(255, 99, 132, 0.6)';

  return (
    <div className="card">
      <div className="card-header">Top Movers - Positive Change</div>
      <div className="card-body">
        <Bar data={getChartData(topMovers.filter(stock => stock.changePercent >= 0), positiveChangeColor)} options={options} />
      </div>
      <div className="card-header">Top Losers - Negative Change</div>
      <div className="card-body">
        <Bar data={getChartData(topLosers.filter(stock => stock.changePercent < 0), negativeChangeColor)} options={options} />
              </div>
    </div>
  );
};

export default StockCard;




// import React from 'react';
// import {
//     LilGreenLine,
//     Heading4a,
//   } from "../../../components/InfoSection/InfoElements";
//   import { Line } from 'react-chartjs-2';




// function StockCard({ stock }) {
  
// // const chartData = {
// //   labels: stock.map(data => data.date),
// //   datasets: [
// //     {
// //       label: 'Stock Price',
// //       data: stock.map(data => data.close),
// //       borderColor: 'rgba(75,192,192,1)',
// //       backgroundColor: 'rgba(75,192,192,0.2)',
// //       fill: true,
// //     },
// //   ],
// // };

//   return (
//     <div className="stock-card">
//       <Heading4a>{stock.companyName}</Heading4a>
//       <LilGreenLine>Change: {stock.changePercent}%</LilGreenLine>
//       <p>Price: ${stock.latestPrice}</p>
//       <p>PE Ratio {stock.peRatio}</p>
//       <p>52 Week High: ${stock.week52High}</p>
//       <p>52 Week Low: ${stock.week52Low}</p>
//       <p>Symbol {stock.symbol}</p>
//       {/* <Line data={chartData} /> */}
 
//     </div>
//   );
// }

// export default StockCard;
