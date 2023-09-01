import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import HoverCardSector from './SectorCard';
import {
    BTopLine,
    AnimatedGradientSmall
    
  } from "../../../components/MachineLearning/src/components/experience/elements";


function SectorCardApp() {
    const [likeList, setLikeList] = useState('');
    const [sectorData, setSectorData] = useState([]);
    useEffect(() => {
        async function fetchSectorData() {
        try {
            const response = await axios.get(
            "https://api.iex.cloud/v1/data/CORE/SECTOR_PERFORMANCE/market",
            {
                params: {
                token: "pk_0e682b29c77d48f9804e3dd05453bf0e", // Replace with your IEX API token
                },
            }
            );
            setSectorData(response.data);
        } catch (error) {
            console.error("Error fetching sector data", error);
        }
        }

    fetchSectorData();
  }, []);

  return (
    <div className="App">
      <br/>
      <AnimatedGradientSmall>Top Daily Stock Gainers and Losers</AnimatedGradientSmall>
      <div className="stock-list">
        <div className="stock-section">
          <BTopLine>Gainers</BTopLine>
          {sectorData.map((sector, index) => (
            <HoverCardSector key={index} sector={sector} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default SectorCardApp;