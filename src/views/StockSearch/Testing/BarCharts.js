import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import styled from 'styled-components';





const SectorCard = styled.div`
  border: 1px solid #00b100;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;
const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //make the background transparent
  background: transparent;

`;


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
    const labels = stocks.map((stock) => stock.symbol);
    const data = stocks.map((stock) => stock.changePercent);

    return {
      type: 'bar',
      x: labels,
      y: data,
      marker: {
        color: color,
      },
    };
  };

  const positiveChangeColor = 'rgba(75, 192, 192, 0.6)';
  const negativeChangeColor = 'rgba(255, 99, 132, 0.6)';

  return (
    // <div className="card">
    <SectorInfoContainer>
      <div className="card-header">Top Movers - Positive Change</div>
      <div className="card-body">
        <Plot
          data={[getChartData(topMovers.filter((stock) => stock.changePercent >= 0), positiveChangeColor)]}
          layout={{
            title: 'Top Movers - Positive Change',
            xaxis: {
              title: 'Stock Symbol',
            },
            yaxis: {
              title: 'Percentage Change',
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
          }}
          config={{ displayModeBar: false }}

        />
        {selectedStockData && <>{/* Render additional information if needed */}</>}
      </div>
      <div className="card-header">Top Losers - Negative Change</div>
      <div className="card-body">
        <Plot
          data={[getChartData(topLosers.filter((stock) => stock.changePercent < 0), negativeChangeColor)]}
          layout={{
            title: 'Top Losers - Negative Change',
            xaxis: {
              title: 'Stock Symbol',
            },
            yaxis: {
              title: 'Percentage Change',
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
          }}
          config={{ displayModeBar: false }}

        />
        {selectedStockData && <>{/* Render additional information if needed */}</>}
      </div>
      </SectorInfoContainer>

  );
};

export default BarCharts;
