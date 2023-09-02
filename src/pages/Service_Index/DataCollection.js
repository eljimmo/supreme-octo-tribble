import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';

// Styled components
const DataCollectionNoticeContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const NoticeTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const NoticeText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const HighlightedText = styled.span`
  font-weight: bold;
`;

export default function DataCollectionIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <DataCollectionNoticeContainer>
      <NoticeTitle>Data Collection Notice</NoticeTitle>
      <NoticeText>
        <HighlightedText>Important Notice:</HighlightedText> We value your privacy and
        are committed to protecting your personal information. This Data Collection Notice
        explains how we collect, use, and safeguard your data when you use our services.
      </NoticeText>
      <NoticeText>
        <HighlightedText>Data We Collect:</HighlightedText> When you visit our website,
        we may collect the following information:
        <ul>
          <li>Your IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Usage patterns</li>
        </ul>
        This data is collected for analytics purposes, to enhance our services, and to
        ensure legal compliance.
      </NoticeText>
      <NoticeText>
        <HighlightedText>Legal Basis:</HighlightedText> We collect and process your data
        based on one or more of the following legal grounds:
        <ul>
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate interests</li>
        </ul>
      </NoticeText>
      <NoticeText>
        <HighlightedText>How We Use Your Data:</HighlightedText> We use the collected data
        to:
        <ul>
          <li>Improve our services</li>
          <li>Personalize your experience</li>
          <li>Analyze website traffic</li>
          <li>Ensure security and legal compliance</li>
        </ul>
      </NoticeText>
      <NoticeText>
        <HighlightedText>Your Rights:</HighlightedText> You have the right to access,
        rectify, or delete your personal data. You can also withdraw your consent at any time.
        To exercise your rights or for inquiries, please contact us.
      </NoticeText>
      <NoticeText>
        By using our website, you acknowledge that you have read and understood this Data
        Collection Notice and agree to our data collection and processing practices. For
        more details, please review our Privacy Policy.
      </NoticeText>
      
    </DataCollectionNoticeContainer>
       <Footer/>
       </>
      );
  }