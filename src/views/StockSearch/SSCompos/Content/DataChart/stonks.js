import { useEffect, useState, useMemo } from 'react';
import Chart from 'react-apexcharts';
// import './Stonks.css';

const stonksUrl = 'https://cloud.iexapis.com/stable/stock/SPY/chart/2y?token=sk_09c6971dee1a4d28801956d73a114c5a';
async function getStonks() {
  const response = await fetch(stonksUrl);
  return response.json();
}

const directionEmojis = {
  up: '🚀',
  down: '💩',
  '': '',
};

const chart = {
  options: {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: { opposite: true,
      tooltip: {  
        enabled: true
      }
    }
  },
};

const round = (number) => {
  return number ? +(number.toFixed(2)) : null;
};

function Stonks() {
  const [series, setSeries] = useState([{
    data: []
  }]);
  const [price, setPrice] = useState(-1);
  const [prevPrice, setPrevPrice] = useState(-1);
  const [priceTime, setPriceTime] = useState(null);



//   [{"close":63.48,"high":68.635,"low":63.42,"open":67.4,"symbol":"TWTR","volume":21722005,
//   "id":"HISTORICAL_PRICES","key":"TWTR","subkey":"","date":"2021-03-08","updated":1652531939271.208,"changeOverTime":0,"marketChangeOverTime":0,"uOpen":67.4,"uClose":63.48,"uHigh":68.635,"uLow":63.42,"uVolume":21722005,"fOpen":67.4,"fClose":63.48,"fHigh":68.635,"fLow":63.42,"fVolume":21722005,"label":"Mar 8, 21","change":0,"changePercent":0},{"close":67.52,"high":68.21,"low":64.6001,"open":65.725,"symbol":"TWTR","volume":22603860,
//   "id":"HISTORICAL_PRICES","key":"TWTR","subkey":"","date":"2021-03-09","updated":1652531939271.208,"changeOverTime":0.06364209199747951,"marketChangeOverTime":0.06364209199747951,"uOpen":65.725,"uClose":67.52,"uHigh":68.21,"uLow":64.6001,"uVolume":22603860,"fOpen":65.725,"fClose":67.52,"fHigh":68.21,"fLow":64.6001,"fVolume":22603860,"label":"Mar 9, 21","change":4.039999999999999,"changePercent":0.0636},{"close":64.83,"high":69.46,"low":64.59,"open":69.4565,"symbol":"TWTR","volume":22464154,
//   "id":"HISTORICAL_PRICES","key":"TWTR","subkey":"","date":"2021-03-10","updated":1652531939271.208,"changeOverTime":0.02126654064272214,"marketChangeOverTime":0.02126654064272214,"uOpen":69.4565,"uClose":64.83,"uHigh":69.46,"uLow":64.59,"uVolume":22464154,"fOpen":69.4565,"fClose":64.83,"fHigh":69.46,"fLow":64.59,"fVolume":22464154,"label":"Mar 10, 21","change":-2.6899999999999977,"changePercent":-0.0398},


  useEffect(() => {
    let timeoutId;
    async function getLatestPrice() {
      try {
        const data = await getStonks();
        console.log(data);
        const gme = data[0];
        setPrevPrice(price);
        setPrice(gme.close.toFixed(2));
        setPriceTime(new Date(gme.fClose * 1000));
        const quote = gme.updated[0];
        const prices = data.map((timestamp, index) => ({
          x: new Date(timestamp * 1000),
          y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round)
        }));
        setSeries([{
          data: prices,
        }]);
      } catch (error) {
        console.log(error);
      }
      timeoutId = setTimeout(getLatestPrice, 5000 * 2);
    }

    getLatestPrice();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const direction = useMemo(() => prevPrice < price ? 'up' : prevPrice > price ? 'down' : '', [prevPrice, price]);

  return (
    <div>
     
      <div className="ticker">
      SPY
      </div>
      <div className={['price', direction].join(' ')}>
        ${price} {directionEmojis[direction]}
      </div>
      <div className="price-time">
        {priceTime && priceTime.toLocaleTimeString()}
      </div>
      <Chart options={chart.options} series={series} type="candlestick" width="100%" height={320} />
    </div>
  );
}

export default Stonks;