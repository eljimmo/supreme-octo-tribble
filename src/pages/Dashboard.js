import React, { useState, Component } from 'react';

import Footer from '../components/Footer';

// import Footer from '../../components/Footer/index';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SpacingGrid  from '../components/Data/DocumentControl/index';
import BasicGrid from '../components/Data/DataOutput/FinancialControl/index';

const gradientText = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;


const AnimatedGradientText1 = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 50px;

  letter-spacing: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`;



const DataCollectionNoticeContainer = styled.div`
  background-color: #transparent;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #ffffff;
`;


const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export default function DataDash() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} />
          <hr/>
      <br/>
      <br/>
      <br/>
      <br/>
      <DataCollectionNoticeContainer>
      <AnimatedGradientText1>Freight Dashboard</AnimatedGradientText1>
      <HighlightedText>Document Control Center</HighlightedText> 

      <TopLine1>

      Document Control Center | Upload, View, and Search for Documents
      
      </TopLine1>
      
      <SpacingGrid/>

      <HighlightedText>Financial Control Panel </HighlightedText> 

      <TopLine1>
      <ul>
          <li>Revenue and Expenses | Profitability Metrics | Asset Management | Cash Flow Management</li>
          <br/>
          <br/>

          <br/>

        </ul>
      {/* <BasicGrid/> */}
        
      </TopLine1>
      <BasicGrid/>



      <HighlightedText>Life Data Book 2024</HighlightedText> 

      <TopLine1>
        
        2024 Data Book component (SHOWS CURRENT YEAR TO DATE DATA)
        
      </TopLine1>

      
    </DataCollectionNoticeContainer>
       <Footer/>
       </>
      );
  }