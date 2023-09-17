import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';


// const SectorInfoContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 10px;
//   justify-content: center;
// `;

// const SectorCard = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin: 10px;
//   padding: 10px;
//   width: 300px;
// `;
// Styled components
const AccessibilityContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AccessibilityTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const AccessibilitySection = styled.div`
  margin-bottom: 20px;
`;

const AccessibilitySectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const AccessibilitySectionText = styled.p`
  font-size: 1rem;
  color: #333;
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
      <AccessibilityTitle>Accessibility Statement</AccessibilityTitle>
      <AccessibilitySection>
        <AccessibilitySectionTitle>Our Commitment</AccessibilitySectionTitle>
        <AccessibilitySectionText>
          We are committed to ensuring digital accessibility for people with
          disabilities. We continually strive to improve the user experience for
          everyone and apply the relevant accessibility standards.
        </AccessibilitySectionText>
      </AccessibilitySection>
      <AccessibilitySection>
        <AccessibilitySectionTitle>Accessibility Features</AccessibilitySectionTitle>
        <AccessibilitySectionText>
          Our website includes the following features to improve accessibility:
          <ul>
            <li>Alternative text for images and graphics</li>
            <li>Keyboard navigation support</li>
            <li>Readable and accessible content</li>
            <li>Color contrast for text and background</li>
          </ul>
        </AccessibilitySectionText>
      </AccessibilitySection>
      <AccessibilitySection>
        <AccessibilitySectionTitle>Contact Us</AccessibilitySectionTitle>
        <AccessibilitySectionText>
          If you have any feedback or encounter accessibility issues on our website,
          please let us know so that we can address them promptly. You can contact us
          through our contact page or via email.
        </AccessibilitySectionText>
      </AccessibilitySection>
    </AccessibilityContainer>
              <Footer/>
      </>
    );
  }