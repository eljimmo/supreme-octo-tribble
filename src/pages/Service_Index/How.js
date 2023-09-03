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



export default function Howitworks() {
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
          Investing in stocks and other financial assets carries risks, and the suitability of an investment depends on your individual financial situation, goals, risk tolerance, and time horizon. It's crucial to do your research, consider your financial goals, and, if necessary, consult with a qualified financial advisor before making investment decisions.
          </TermsSectionText>

          <TermsSectionText>

          When considering stocks to invest in, here are some general tips:

Diversify Your Portfolio: Diversification involves spreading your investments across various asset classes and industries to reduce risk. Avoid putting all your money into a single stock.

Research and Due Diligence: Research potential investments thoroughly. Understand the company's financial health, business model, competitive position, and growth prospects. Analyze relevant financial statements and reports.

Long-Term Perspective: Consider a long-term investment horizon. Trying to time the market or make short-term gains can be risky. Many successful investors follow a buy-and-hold strategy.

Risk Tolerance: Assess your risk tolerance and invest accordingly. Stocks can be volatile, so make sure your portfolio aligns with your comfort level.

Stay Informed: Stay updated on market news and economic trends. Be aware of changes in the industries and sectors you're interested in.

Avoid Emotional Decisions: Emotions can lead to impulsive decisions. Try to base your investment choices on a well-thought-out strategy rather than reacting to short-term market fluctuations.

Consider Professional Advice: If you're unsure about your investment choices, consult a certified financial advisor who can provide personalized guidance.

Start with a Plan: Develop an investment plan that outlines your goals, asset allocation, and strategies. Regularly review and adjust your plan as needed.

Remember that all investments carry some level of risk, and past performance is not indicative of future results. It's important to be cautious and make informed decisions that align with your financial objectives.
          </TermsSectionText>
          
          {/* <TermsSectionText>
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
          </TermsSectionText> */}
        </TermsSection>
      </TermsContainer>          
      <Footer/>
        </>
      );
    }