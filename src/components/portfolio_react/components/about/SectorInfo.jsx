import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItemText } from "@mui/material";
import { Heading4a } from "../../../InfoSection/InfoElements";
import styled from "styled-components";
import { Tooltip } from 'antd';
import Plot from 'react-plotly.js';


const SectorInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: center;
`;

const SectorCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
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

  // Create data for Plotly gauge chart
  const gaugeData = [{
    type: 'indicator',
    mode: 'number+delta+gauge',
    value: sectorData.length > 0 ? sectorData[0].performance : 0, // You can adjust this to show performance for a specific sector
    title: { text: 'Sector Performance' },
    delta: { reference: 0 },
    gauge: {
      axis: { range: [-1, 1] }, // Adjust the range as needed
      steps: [
        { range: [-1, -0.5], color: 'red' },
        { range: [-0.5, 0.5], color: 'yellow' },
        { range: [0.5, 1], color: 'green' },
      ],
    },
  }];

  return (
    <SectorInfoContainer>
      <Tooltip title="US Economic Sectors">
        <Heading4a>Sector Information</Heading4a>
      </Tooltip>
      <List>
        <SectorInfoContainer>
          {sectorData.map((sector, index) => (
            <SectorCard key={index}>
              <ListItemText
                secondary={
                  <span
                    style={{
                      color: sector.performance > 0 ? "green" : "red",
                    }}
                  >
                    Performance: {sector.performance}
                  </span>
                }
                primary={<span style={{ color: "white" }}>{sector.name}</span>}
              />
            </SectorCard>
          ))}
        </SectorInfoContainer>
      </List>

      {/* Render Plotly gauge chart */}
      <Heading4a>Aggregate US Sector Performance</Heading4a>

      <Plot
        data={gaugeData}
        layout={{ width: 300, height: 200, margin: { t: 0, r: 0, b: 0, l: 0 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent', }}
        config={{ displayModeBar: false }}

      />
    </SectorInfoContainer>
  );
};

export default SectorInfo;
