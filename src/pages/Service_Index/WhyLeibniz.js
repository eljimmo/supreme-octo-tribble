import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Footer from '../../components/Footer/index';





const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

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

const Title = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 48px;
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

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const FeatureBox = styled.div`
  flex: 1;
  background-color: #e7e7e7;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const FeatureTitle = styled.h3`
  color: #333;
  margin-bottom: 16px;
`;

export default function ChooseUs() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <PageWrapper>
        <Title>Why Choose Our Trading Bot?</Title>
        <Content>
          <p>Experience the power of advanced algorithms, unparalleled deep learning techniques, and innovative technology that ensures a competitive edge in the trading world.</p>
        </Content>

        <Row>
          <FeatureBox>
            <TopLine1>Advanced Algorithms</TopLine1>
            <p>Our algorithms are built on the latest research and are continuously updated to ensure maximum profitability and efficiency.</p>
          </FeatureBox>
          <FeatureBox>
            <TopLine1>Deep Learning</TopLine1>
            <p>With TensorFlow integration, our bot learns from market patterns and can predict price movements with uncanny accuracy.</p>
          </FeatureBox>
          <FeatureBox>
            <TopLine1>Innovative Technology</TopLine1>
            <p>Stay ahead of the curve with high-frequency trading, cloud integration, and real-time analytics.</p>
          </FeatureBox>
        </Row>
      </PageWrapper>
      <Footer/>
    </>
  );
}
