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


const TermsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;


const TermsSection = styled.div`
  margin-bottom: 20px;
`;

const TermsSectionTitle = styled.h3`
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

export default function GeneralTermsIndex() {
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
   <TermsContainer>
      <AnimatedGradientText1>General Terms and Conditions</AnimatedGradientText1>
      <TermsSection>
        <TermsSectionTitle>1. Introduction</TermsSectionTitle>
        <TopLine1>
          These General Terms and Conditions ("Terms") govern your use of our
          website and services. By accessing or using our website, you agree
          to abide by these Terms.
        </TopLine1>
      </TermsSection>
      <TermsSection>
        <TermsSectionTitle>2. Use of the Website</TermsSectionTitle>
        <TopLine1>
          You agree to use this website for lawful purposes only and not engage
          in any activity that violates applicable laws or regulations.
        </TopLine1>
      </TermsSection>
      <TermsSection>
        <TermsSectionTitle>3. Privacy Policy</TermsSectionTitle>
        <TopLine1>
          Your use of this website is also governed by our Privacy Policy. By
          using the website, you consent to the terms outlined in our Privacy Policy.
        </TopLine1>
      </TermsSection>
      <TermsSection>
        <TermsSectionTitle>4. Changes to Terms</TermsSectionTitle>
        <TopLine1>
          We reserve the right to modify or revise these Terms at any time. Your
          continued use of the website after any changes indicate your acceptance
          of the updated Terms.
        </TopLine1>
      </TermsSection>
    </TermsContainer>          
    <Footer/>
      </>
    );
  }