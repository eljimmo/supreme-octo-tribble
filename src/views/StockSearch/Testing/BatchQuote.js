import React, { useState, useEffect } from 'react';
import { Heading4a, Heading1, WhiteTopLine, Heading  } from "../../../components/InfoSection/InfoElements";


const StockCard = ({ symbol, latestPrice }) => (
  <div className="card">
    <WhiteTopLine className="card-header">
      Stock Symbol: {symbol}
    </WhiteTopLine>
    <Heading4a className="card-body">
      Latest Price: {latestPrice}
    </Heading4a>
  </div>
);

const StockList = ({ stockData }) => (
  <div className="stock-list">
    {stockData.map((stock, index) => (
      <StockCard
        key={index}
        symbol={stock.symbol}
        latestPrice={stock.latestPrice}
      />
    ))}
  </div>
);

const BatchApp = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
    const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
    const symbols = ['AAPL', 'GOOGL', 'AMZN']; // Example stock symbols

    const fetchData = async () => {
      const response = await Promise.all(
        symbols.map(async symbol => {
          const apiResponse = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiToken}`);
          const data = await apiResponse.json();
          return {
            symbol: data.symbol,
            latestPrice: data.latestPrice,
          };
        })
      );

      setStockData(response);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Heading>Stock Quotes</Heading>
      <StockList stockData={stockData} />
    </div>
  );
};

export default BatchApp;




// import React, { useState, useEffect } from 'react';

// const StockCard = ({ symbol, close }) => (
//   <div className="card">
//     <div className="card-header">
//       Stock Symbol: {symbol}
//     </div>
//     <div className="card-body">
//       Close Price: {close}
//     </div>
//   </div>
// );

// const StockList = ({ stockData }) => (
//   <div className="stock-list">
//     {stockData.map((stock, index) => (
//       <StockCard
//         key={index}
//         symbol={stock.symbol}
//         close={stock.close}
//       />
//     ))}
//   </div>
// );

// const BatchApp = () => {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//     // Replace 'YOUR_IEX_API_TOKEN' with your actual IEX API token
//     const apiToken = 'pk_0e682b29c77d48f9804e3dd05453bf0e';
//     const symbols = ['T', 'TMUS', 'VZ']; // Example stock symbols

//     const fetchData = async () => {
//       const response = await Promise.all(
//         symbols.map(async symbol => {
//             //                              https://api.iex.cloud/v1/data/core/historical_prices/${symbol}?token=${apiToken}
//           const apiResponse = await fetch(`https://api.iex.cloud/v1/data/core/historical_prices/${symbol}?token=${apiToken}`);
//                                         // https://api.iex.cloud/v1/data/core/historical_prices/T,TMUS,VZ?token=pk_0e682b29c77d48f9804e3dd05453bf0e

//           const data = await apiResponse.json();
//           return {
//             symbol: data.symbol,
//             close: data.close,
//           };
//         })
//       );
//         console.log(response);
//       setStockData(response);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="app">
//       <h1>Stock Quotes</h1>
//       <StockList stockData={stockData} />
//     </div>
//   );
// };

// export default BatchApp;
