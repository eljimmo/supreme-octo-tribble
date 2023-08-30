import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Heading4a } from "../../../InfoSection/InfoElements";
import styled from "styled-components";


const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectorCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;

const SectorTitle = styled.h3`
  margin: 0;
`;

const SectorPerformance = styled.p`
  margin: 5px 0;
`;



const SectorInfo = () => {
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
    <SectorInfoContainer>
      <Heading4a>
        Sector Information
      </Heading4a>
      <List>
      <SectorInfoContainer>
        {sectorData.map((sector, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <span
                  style={{
                    color: sector.performance > 0 ? "green" : "red",
                  }}
                >
                  performance: {sector.performance}
                </span>
              }
              secondary={
                <span style={{ color: "white" }}>{sector.name}</span>
              }
            />
          </ListItem>
        ))}
      </SectorInfoContainer>
      </List>
      </SectorInfoContainer>

    </div>
  );
};

export default SectorInfo;




