import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

`;

const SectorCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  flex-direction: row;
`;

const SectorTitle = styled.h3`
  margin: 0;
`;

const SectorPerformance = styled.p`
  margin: 5px 0;
`;

const SectorInfoIndex = () => {
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
    <div>
      <h2>Sector Information</h2>
      <SectorInfoContainer>
        {sectorData.map((sector, index) => (
          <SectorCard key={index}>
            <SectorTitle>{sector.name}</SectorTitle>
            <SectorPerformance>Performance: {sector.performance}</SectorPerformance>
          </SectorCard>
        ))}
      </SectorInfoContainer>
    </div>
  );
};

export default SectorInfoIndex;