import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';

// Styled components




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


const PrivacyPolicyContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
`;

const PolicySection = styled.div`
  margin-bottom: 20px;
`;

const PolicySectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
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



export default function PrivacyPoliciesIndex() {
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
<PrivacyPolicyContainer>
      <AnimatedGradientText1>Privacy Policy</AnimatedGradientText1>
      <PolicySection>
        <PolicySectionTitle>Introduction</PolicySectionTitle>
        <TopLine1>
          Welcome to our Privacy Policy page. Your privacy is important to us, and we are
          committed to protecting your personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your data when you use our services.
        </TopLine1>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Data We Collect</PolicySectionTitle>
        <TopLine1>
          We may collect the following types of personal information when you use our
          services:
          <ul>
            <li>Your name</li>
            <li>Contact information</li>
            <li>Demographic information</li>
            <li>Usage data</li>
          </ul>
        </TopLine1>
        <TopLine1>
          We collect this information for various purposes, including providing and
          improving our services, and ensuring legal compliance.
        </TopLine1>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>How We Use Your Data</PolicySectionTitle>
        <TopLine1>
          We may use your personal information for the following purposes:
          <ul>
            <li>Providing and maintaining our services</li>
            <li>Improving our services</li>
            <li>Communicating with you</li>
            <li>Responding to your requests</li>
          </ul>
        </TopLine1>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Sharing Your Data</PolicySectionTitle>
        <TopLine1>
          We may share your personal information with third parties under certain
          circumstances, including legal requirements or to protect our rights and safety.
        </TopLine1>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Your Rights</PolicySectionTitle>
        <TopLine1>
          You have the right to access, rectify, or delete your personal data. You can also
          withdraw your consent at any time. To exercise your rights or for inquiries,
          please contact us.
        </TopLine1>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Changes to This Policy</PolicySectionTitle>
        <TopLine1>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page, and the revised policy will be effective when posted. We encourage
          you to review this Privacy Policy periodically.
        </TopLine1>
      </PolicySection>
    </PrivacyPolicyContainer>
              <Footer/>
      </>
    );
  }