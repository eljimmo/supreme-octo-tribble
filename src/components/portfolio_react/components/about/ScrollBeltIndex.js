import React, { useState, useEffect } from "react";
import { Typography, styled } from "@mui/material";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import axios from "axios"; // Import axios for API requests

//Component styles//
const StyledScrollingContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "inherit",
  animation: "fadeInUp",
  animationDuration: "1s",

  "&::before": {
    content: "''",
    position: "absolute",
    top: "45px",
    left: "-4px",
    display: "block",
    width: "100px",
    height: "75px",
    backgroundSize: "contain",
    zIndex: "1000",
  },
  "&::after": {
    content: "''",
    position: "relative",
    top: "-71px",
    left: "883px",
    [theme.breakpoints.down("lg")]: {
      position: "absolute",
      left: "unset",
      right: "0",
      top: "45px",
    },
    display: "block",
    width: "100px",
    height: "75px",
    backgroundSize: "contain",
    zIndex: "1000",
  },
}));
const StyledScrollingBelt = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "3rem",
  overflow: "hidden",
  width: "98%",
  marginLeft: "0.1rem",
}));
const StyledScrollingItem = styled("div")(({ theme }) => ({
  "@keyframes moveLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-1600%)",
    },
  },
  animation: "moveLeft 22s linear infinite",
  marginRight: "3rem",
  borderRadius: "1rem",
  padding: "1rem",
  minWidth: "8rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginRight: "2.2rem",
    padding: "0.9rem 0.6rem 0.75rem 0.9rem",
  },
  [theme.breakpoints.down("xs")]: {
    marginRight: "1.6rem",
    padding: "0.7rem 0.5rem 0.7rem 0.5rem",
    minWidth: "5rem",
  },
}));
const StyledScrollingText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem !important",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem !important",
  },
}));
//End component styles




const ScrollBelt = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    async function fetchTopGainersAndLosers() {
      try {
        const responseGainers = await axios.get(
          "https://cloud.iexapis.com/stable/stock/market/list/gainers",
          {
            params: {
              token: "pk_0e682b29c77d48f9804e3dd05453bf0e",
            },
          }
        );
        setTopGainers(responseGainers.data);

        const responseLosers = await axios.get(
          "https://cloud.iexapis.com/stable/stock/market/list/losers",
          {
            params: {
              token: "pk_0e682b29c77d48f9804e3dd05453bf0e",
            },
          }
        );
        setTopLosers(responseLosers.data);
      } catch (error) {
        console.error("Error fetching top gainers and losers", error);
      }
    }

    fetchTopGainersAndLosers();
  }, []);

  return (
    <Scroll.Element name="About">
      <StyledScrollingContainer>
        <StyledScrollingBelt>
          {topGainers.map((stock, index) => (
            <StyledScrollingItem key={index}>
              <StyledScrollingText component="h1">
                {stock.symbol} (
                <span
                  style={{
                    color: stock.changePercent > 0 ? "green" : "red",
                  }}
                >
                  {stock.changePercent.toFixed(2)}%
                </span>
                )
                <br />
                Price: {stock.latestPrice}
                <br />
                52 Week High: {stock.week52High}

              </StyledScrollingText>
            </StyledScrollingItem>
          ))}
          {topLosers.map((stock, index) => (
            <StyledScrollingItem key={index}>
              <StyledScrollingText component="h1">
                {stock.symbol} (
                <span
                  style={{
                    color: stock.changePercent > 0 ? "green" : "red",
                  }}
                >
                  {stock.changePercent.toFixed(2)}%
                </span>
                )
                <br />
                Price: {stock.latestPrice}
                <br />
                52 Week High: {stock.week52High}
   
              </StyledScrollingText>
            </StyledScrollingItem>
          ))}
        </StyledScrollingBelt>
      </StyledScrollingContainer>
    </Scroll.Element>
  );
};

export default ScrollBelt;
