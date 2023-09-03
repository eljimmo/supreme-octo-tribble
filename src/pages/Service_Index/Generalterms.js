import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
// Styled components
const TermsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TermsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const TermsSection = styled.div`
  margin-bottom: 20px;
`;

const TermsSectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TermsSectionText = styled.p`
  font-size: 1rem;
  color: #333;
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
   <TermsContainer>
      <TermsTitle>General Terms and Conditions</TermsTitle>
      <TermsSection>
        <TermsSectionTitle>1. Introduction</TermsSectionTitle>
        <TermsSectionText>
          These General Terms and Conditions ("Terms") govern your use of our
          website and services. By accessing or using our website, you agree
          to abide by these Terms.
        </TermsSectionText>
      </TermsSection>
      <TermsSection>
        <TermsSectionTitle>2. Use of the Website</TermsSectionTitle>
        <TermsSectionText>
          You agree to use this website for lawful purposes only and not engage
          in any activity that violates applicable laws or regulations.
        </TermsSectionText>
      </TermsSection>
      <TermsSection>
        <TermsSectionTitle>3. Privacy Policy</TermsSectionTitle>
        <TermsSectionText>
          Your use of this website is also governed by our Privacy Policy. By
          using the website, you consent to the terms outlined in our Privacy Policy.
        </TermsSectionText>
      </TermsSection>
      <TermsSection>
        <TermsSectionTitle>4. Changes to Terms</TermsSectionTitle>
        <TermsSectionText>
          We reserve the right to modify or revise these Terms at any time. Your
          continued use of the website after any changes indicate your acceptance
          of the updated Terms.
        </TermsSectionText>
      </TermsSection>
    </TermsContainer>          
    <Footer/>
      </>
    );
  }