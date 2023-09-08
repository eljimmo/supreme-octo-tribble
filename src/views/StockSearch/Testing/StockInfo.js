// StockInfo.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
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


const WhiteSmallText2 = styled.div`
  color: #ffffff;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


const StockInfo = ({ symbol }) => {
  const [stockInfo, setStockInfo] = useState(null);

  useEffect(() => {
    const fetchStockInfo = async () => {
      try {
        const response = await fetch(
          `https://cloud.iexapis.com/stable/stock/${symbol}/batch?types=quote,company,news,intraday-prices&last=1&token=pk_0e682b29c77d48f9804e3dd05453bf0e`
        );
        const data = await response.json();
        setStockInfo(data);
      } catch (error) {
        console.error('Error fetching stock information:', error);
      }
    };

    fetchStockInfo();
  }, [symbol]);

  if (!stockInfo) {
    return null; // Render nothing until data is fetched
  }

  const { company, quote } = stockInfo;

  return (
    <div>
      <WhiteSmallText>Stock Information for {symbol}</WhiteSmallText>
      <WhiteSmallText2>Sector: {company.sector}</WhiteSmallText2>
      <WhiteSmallText2>Industry: {company.industry}</WhiteSmallText2>
      <WhiteSmallText2>Tags: {company.tags.join(', ')}</WhiteSmallText2>
      {/* <WhiteSmallText2>Primary Exchange: {company.primaryExchange}</WhiteSmallText2> */}
    </div>
  );
};

export default StockInfo;
