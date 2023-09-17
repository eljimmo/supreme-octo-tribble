import React, { useState } from 'react';
import Footer from '../../components/Footer/index';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';

// Styled components
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

const PolicyTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const PolicySection = styled.div`
  margin-bottom: 20px;
`;

const PolicySectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const PolicySectionText = styled.p`
  font-size: 1rem;
  color: #333;
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
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <PolicySection>
        <PolicySectionTitle>Introduction</PolicySectionTitle>
        <PolicySectionText>
          Welcome to our Privacy Policy page. Your privacy is important to us, and we are
          committed to protecting your personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your data when you use our services.
        </PolicySectionText>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Data We Collect</PolicySectionTitle>
        <PolicySectionText>
          We may collect the following types of personal information when you use our
          services:
          <ul>
            <li>Your name</li>
            <li>Contact information</li>
            <li>Demographic information</li>
            <li>Usage data</li>
          </ul>
        </PolicySectionText>
        <PolicySectionText>
          We collect this information for various purposes, including providing and
          improving our services, and ensuring legal compliance.
        </PolicySectionText>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>How We Use Your Data</PolicySectionTitle>
        <PolicySectionText>
          We may use your personal information for the following purposes:
          <ul>
            <li>Providing and maintaining our services</li>
            <li>Improving our services</li>
            <li>Communicating with you</li>
            <li>Responding to your requests</li>
          </ul>
        </PolicySectionText>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Sharing Your Data</PolicySectionTitle>
        <PolicySectionText>
          We may share your personal information with third parties under certain
          circumstances, including legal requirements or to protect our rights and safety.
        </PolicySectionText>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Your Rights</PolicySectionTitle>
        <PolicySectionText>
          You have the right to access, rectify, or delete your personal data. You can also
          withdraw your consent at any time. To exercise your rights or for inquiries,
          please contact us.
        </PolicySectionText>
      </PolicySection>
      <PolicySection>
        <PolicySectionTitle>Changes to This Policy</PolicySectionTitle>
        <PolicySectionText>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page, and the revised policy will be effective when posted. We encourage
          you to review this Privacy Policy periodically.
        </PolicySectionText>
      </PolicySection>
    </PrivacyPolicyContainer>
              <Footer/>
      </>
    );
  }