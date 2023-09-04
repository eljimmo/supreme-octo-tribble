import React, { useState, useEffect } from 'react';
import {
    AnimatedGradientSmall
  } from "../../../components/InfoSection/InfoElements";
import axios from "axios";
import { List, ListItemText, ListItem } from "@mui/material";

function HoverCardSector ( sector ) {
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

  const renderLikeList = () => {
    return <div className="likes__list">
        
        <List>
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
      </List>

    </div>;
  };

  const handleLeave = () => {
    setLikeList('');
  };

  const handleHover = () => {
    setLikeList(renderLikeList());
  };

  return (
    <div className="likes__wrapper">
      <div className="likes__relavance" onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <AnimatedGradientSmall>Symbol {sector.name}</AnimatedGradientSmall>
{likeList}
      </div>
    </div>
  );
}

export default HoverCardSector;
