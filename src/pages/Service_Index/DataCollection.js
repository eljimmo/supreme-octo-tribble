import React, { useState, Component } from 'react';
import Footer from '../../components/Footer/index';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';




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

export default function DataCollectionIndex() {
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
      <AnimatedGradientText1>Data Collection</AnimatedGradientText1>
      <HighlightedText>Important Notice:</HighlightedText> 

      <TopLine1>
        
        
        We value your privacy and
        are committed to protecting your personal information. This Data Collection Notice
        explains how we collect, use, and safeguard your data when you use our services.
      </TopLine1>


      <HighlightedText>Data We Collect:</HighlightedText> 

      <TopLine1>
        
        
        When you visit our website,
        we may collect the following information:
        <ul>
          <li>Your IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Usage patterns</li>
        </ul>
        This data is collected for analytics purposes, to enhance our services, and to
        ensure legal compliance.
      </TopLine1>

      <HighlightedText>Legal Basis:</HighlightedText> 

      <TopLine1>
        
        We collect and process your data
        based on one or more of the following legal grounds:
        <ul>
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate interests</li>
        </ul>
      </TopLine1>

      <HighlightedText>How We Use Your Data:</HighlightedText> 

      <TopLine1>
        
        
        We use the collected data
        to:
        <ul>
          <li>Improve our services</li>
          <li>Personalize your experience</li>
          <li>Analyze website traffic</li>
          <li>Ensure security and legal compliance</li>
        </ul>
      </TopLine1>


      <HighlightedText>Your Rights:</HighlightedText> 

      <TopLine1>
        
        
        You have the right to access,
        rectify, or delete your personal data. You can also withdraw your consent at any time.
        To exercise your rights or for inquiries, please contact us.
      </TopLine1>
      <TopLine1>
        By using our website, you acknowledge that you have read and understood this Data
        Collection Notice and agree to our data collection and processing practices. For
        more details, please review our Privacy Policy.
      </TopLine1>
      
    </DataCollectionNoticeContainer>
       <Footer/>
       </>
      );
  }