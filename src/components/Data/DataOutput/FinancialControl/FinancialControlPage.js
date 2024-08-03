// src/pages/FinancialControlPage.js
import React from 'react';
import styled from 'styled-components';
import Navbar from '../../../Navbar';
import Sidebar from '../../../Sidebar';
import Footer from '../../../Footer';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar/index';
// import Footer from '../components/Footer';
// import FinancialMetrics from '../components/Data/DataOutput/FinancialControl/FinancialMetrics'; // Import relevant components
// import RevenueReport from '../components/Data/DataOutput/FinancialControl/RevenueReport';
// import ExpenseReport from '../components/Data/DataOutput/FinancialControl/ExpenseReport';
// import CashFlowAnalysis from '../components//Data/DataOutput/FinancialControl/CashFlowAnalysis';

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const SectionContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #2193b0;
`;

const TopLine = styled.div`
  color: #00b100;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const FinancialControlPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <PageContainer>
        <PageTitle>Financial Control Center</PageTitle>

        <SectionContainer>
          <TopLine>
            Financial Metrics | Key Performance Indicators (KPIs) | Financial Ratios
          </TopLine>
          {/* <FinancialMetrics /> */}
        </SectionContainer>

        <SectionContainer>
          <TopLine>
            Revenue Reports | Analysis of Revenue Streams | Historical Revenue Data
          </TopLine>
          {/* <RevenueReport /> */}
        </SectionContainer>

        <SectionContainer>
          <TopLine>
            Expense Reports | Tracking Expenses | Budget vs Actual Analysis
          </TopLine>
          {/* <ExpenseReport /> */}
        </SectionContainer>

        <SectionContainer>
          <TopLine>
            Cash Flow Analysis | Monitoring Cash Flow | Forecasting and Budgeting
          </TopLine>
          {/* <CashFlowAnalysis /> */}
        </SectionContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default FinancialControlPage;
