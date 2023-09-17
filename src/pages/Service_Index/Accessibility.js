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


const AccessibilityContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;


const AccessibilitySection = styled.div`
  margin-bottom: 20px;
`;

const AccessibilitySectionTitle = styled.h3`
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

export default function AccessibilityIndex() {
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
    <AccessibilityContainer>
      <AnimatedGradientText1>Accessibility Statement</AnimatedGradientText1>
      <AccessibilitySection>
        <AccessibilitySectionTitle>Our Commitment</AccessibilitySectionTitle>
        <TopLine1>
          We are committed to ensuring digital accessibility for people with
          disabilities. We continually strive to improve the user experience for
          everyone and apply the relevant accessibility standards.
        </TopLine1>
      </AccessibilitySection>
      <AccessibilitySection>
        <AccessibilitySectionTitle>Accessibility Features</AccessibilitySectionTitle>
        <TopLine1>
          Our website includes the following features to improve accessibility:
          <ul>
            <li>Alternative text for images and graphics</li>
            <li>Keyboard navigation support</li>
            <li>Readable and accessible content</li>
            <li>Color contrast for text and background</li>
          </ul>
        </TopLine1>
      </AccessibilitySection>
      <AccessibilitySection>
        <AccessibilitySectionTitle>Contact Us</AccessibilitySectionTitle>
        <TopLine1>
          If you have any feedback or encounter accessibility issues on our website,
          please let us know so that we can address them promptly. You can contact us
          through our contact page or via email.
        </TopLine1>
      </AccessibilitySection>
    </AccessibilityContainer>
              <Footer/>
      </>
    );
  }