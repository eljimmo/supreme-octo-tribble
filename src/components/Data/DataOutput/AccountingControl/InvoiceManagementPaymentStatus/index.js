import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/index';
import Footer from '../components/Footer';
import DocumentControl from '../components/Data/DataOutput/DocumentControl/DocumentControlPanel';
import FinancialGridControl from '../components/Data/DataOutput/FinancialControl/FinancialControlPanel';
import AccountingControlPanel from '../components/Data/DataOutput/AccountingControl/AccountingControlPanel';
import TabDatabase from '../components/Data/DataOutput/TabDatabase/index';
// import InvoiceManagementPanel from '../components/Data/DataOutput/InvoiceManagement/InvoiceManagementPanel'; // Import new component
// import PaymentStatusPanel from '../components/Data/DataOutput/PaymentStatus/PaymentStatusPanel'; // Import new component

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
  }
}`;

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
  background-color: transparent;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #ffffff;
  margin-top: 15px;
  padding: 10px;
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

const SectionContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default function InvoiceManagementPaymentStatusPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <br />
      <br />
      <br />
      <br />
      <DataCollectionNoticeContainer>
        <AnimatedGradientText1>Logistics Control Center</AnimatedGradientText1>

        <HighlightedText>Document Control Center</HighlightedText>
        
        <TopLine1>
          Document Control Center | Upload, View, and Search for Documents
        </TopLine1>

        <DocumentControl />

        <HighlightedText>Financial Control Panel</HighlightedText>
        
        <TopLine1>
          <ul>
            <li>Revenue and Expenses | Profitability Metrics | Asset Management | Cash Flow Management</li>
          </ul>
        </TopLine1>

        <FinancialGridControl />

        <SectionContainer>
          <TopLine1>
            Accounting Control Panel
          </TopLine1>
          <AccountingControlPanel />
          <TabDatabase />
        </SectionContainer>

        {/* New Section */}
        <SectionContainer>
          <HighlightedText>Invoice Management | Payment Status</HighlightedText>
          <TopLine1>
            <ul>
              <li>Manage Invoices | Track Payment Status | Aging Reports</li>
            </ul>
          </TopLine1>
          {/* <InvoiceManagementPanel /> Add new component for invoice management */}
          {/* <PaymentStatusPanel /> Add new component for payment status */}
        </SectionContainer>
      </DataCollectionNoticeContainer>
      <Footer />
    </>
  );
}
