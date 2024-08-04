import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../../Navbar';
import Sidebar from '../../../Sidebar';
import Footer from '../../../Footer';
import DataPage from '../DataTables/DataPage';
import TestDataPage from '../DataTables/DataPageTest';
import DataProvider from '../DataTables/DataContext/DataContextIndex';


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
  padding: 20px;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`;





const PageWrapper = styled.div`
    max-width: 1500px;
    margin: 75px auto;
    padding: 20px;
    border: 1px solid #00b100;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 1500px) {
        margin: 50px auto;
        padding: 15px;
    }

    @media (max-width: 768px) {
        margin: 30px auto;
        padding: 10px;
        max-width: 90%;
    }

    @media (max-width: 480px) {
        margin: 20px auto;
        padding: 5px;
        max-width: 100%;
    }
`;






export default function DatabaseMain() {
  const [isOpen, setIsOpen] = useState(false);
  const sampleData = [10, 12, 15, 20, 27, 35];
  const growth = ((sampleData[sampleData.length - 1] - sampleData[0]) / sampleData[0]) * 100;


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <br/>

      <PageWrapper>
        <AnimatedGradientText1>
        Database
        </AnimatedGradientText1>

        <DataProvider>

            
            <TestDataPage/>

       
        </DataProvider>





      </PageWrapper>

      



      <Footer/>
    </>
  );
}