import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Footer from '../../components/Footer/index';
import Overlay from '../../components/Landing/Overlay';
import Map from '../../components/Maps/index';
import Underlay from '../../components/Landing/Underlay';
import EnhancedTable from '../../components/Data/DataOutput/DataTables/Table';
import FinancialKPITabMediaCard from '../../components/Data/DataOutput/FinancialKPI/FinancialKPICard';
import OperationalPerformanceMetricsMediaCard from '../../components/Data/DataOutput/OperationalPerformanceMetrics/OperationalPerformanceMetricsCard';
import StatisticalFrequencyDistributionTableMediaCard from '../../components/Data/DataOutput/StatisticalFrequencyDistribution/StatisticalFrequencyDistributionTableCard';


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


const DataDisplay = styled.div`
  background-color: #f4f4f4;
  padding: 5px;
  height: 500px;
  margin-bottom: 5px;
  border-radius: 10px;
  `;


const Analysis = styled.div`
  background-color: #e0e0e0;
  padding: 20px;
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


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const BoxWrapper = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 10px;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const BoxHeader = styled.h3`
  color: #333;
  margin-bottom: 16px;
`;


const HeroContainer = styled.div`
background: 
/* Diagonal split - top left to bottom right */
linear-gradient(to bottom right, transparent 50%, transparent 50%), 
url('container.jpg') left top,

/* Diagonal split - top right to bottom left */
linear-gradient(to bottom left, transparent 50%, transparent 50%), 
url('containers.jpg') right top;

background-size: 50% 100%, 50% 100%; /* Adjust the size as needed */
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

`;




export default function FleetOperationsHub() {
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
        Fleet Operations Hub
        </AnimatedGradientText1>

        <DataDisplay>

            
            <Map/>

       
        </DataDisplay>
        <Analysis>
          <h2>Freight Management </h2>

          <EnhancedTable/>
        </Analysis>

        <Row>
          <BoxWrapper>
            <BoxHeader>Financial KPIs
            </BoxHeader>
            <p>Gross Margin:
            Gross Margin: Gross margin is a financial metric that represents the percentage of revenue remaining after deducting the cost of goods sold (COGS).
            </p>
            <FinancialKPITabMediaCard/>
{/* 
            <p>Operating Expense Ratio (OER)
            Gross Margin: Gross margin is a financial metric that represents the percentage of revenue remaining after deducting the cost of goods sold (COGS).
            Where:

Operating Expenses include all expenses related to the core operations of the business, such as salaries, rent, utilities, and other day-to-day costs.
Total Revenue is the total income generated from sales of goods or services.

Key Points:

A lower OER suggests that a company is more efficient in managing its operating expenses relative to its revenue.
A higher OER indicates that a larger portion of revenue is used to cover operating costs, which might suggest inefficiencies or higher operational costs.
            </p>
            
            <p>
            Revenue Growth Rate: The Revenue Growth Rate is a financial metric that measures the percentage increase or decrease in a company’s revenue over a specific period. 
            It helps to assess how quickly a companys revenue is growing and can be a key indicator of business performance and market potential.
            Where:

    Current Period Revenue is the revenue earned during the current reporting period (e.g., the current fiscal quarter or year).
    Previous Period Revenue is the revenue earned during the previous comparable period.

Key Points:

    A positive Revenue Growth Rate indicates an increase in revenue, reflecting successful business expansion or increased sales.
    A negative Revenue Growth Rate indicates a decrease in revenue, which may signal declining sales or business challenges.
            </p> */}

          
          </BoxWrapper>


          <BoxWrapper>
            <BoxHeader>Operational Performance Metrics | OPM </BoxHeader>
            <OperationalPerformanceMetricsMediaCard/>

        

          </BoxWrapper>


          <BoxWrapper>
            <BoxHeader>Statistical Frequency Distribution Table  </BoxHeader>
            <p>
            This table helps identify the most common or frequent entities in each category, providing valuable insights for analysis and decision-making.
            </p>
            <StatisticalFrequencyDistributionTableMediaCard/>
           
          </BoxWrapper>


        </Row>

      </PageWrapper>

      
  <HeroContainer>
                <Underlay/>
              </HeroContainer>


      <Footer/>
    </>
  );
}