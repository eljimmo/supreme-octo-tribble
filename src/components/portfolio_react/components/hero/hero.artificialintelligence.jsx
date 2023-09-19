import React from "react";
import styled, { keyframes } from 'styled-components';

const gradientText = keyframes`
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
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

const InfoContainer3 = styled.div`
  color: #fff;
  background: transparent;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 1100px;
  }
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


const TopLine2 = styled.div`
  color: #5900b1;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const InfoWrapper2 = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;  // This ensures the boxes wrap onto the next line in smaller screens.
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column; // Stack the boxes vertically for screens smaller than 768px.
  }
`;

const FeatureBox = styled.div`
  flex: 1;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #00b100;
  margin: 0 10px;
  box-sizing: border-box; // To ensure padding and border are included in the width.

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px; // Add some bottom margin for spacing when boxes are stacked.
    max-width: 100%;  // Allows the box to take the full width of the container.
    padding: 10px;    // Reduce the padding for smaller screens.
  }
`;

const Heroartificialintelligence = () => {
  return (
    <div id="hero">
      <InfoContainer3>
        <AnimatedGradientText1>
          Artificial Intelligence in Commercial Investments
        </AnimatedGradientText1>
        <InfoWrapper2>
          <TopLine1>
            “Artificial intelligence is a system built to make predictions or decisions that influence our environment, based on objectives defined by humans.”
            While many might confuse machine learning (ML) as synonymous with AI, it's essential to clarify that ML is a subset focused on creating systems that enhance their performance through data. Hence, while all ML is AI, not all AI entails ML.
          </TopLine1>
          <Row>
            <FeatureBox>
              <TopLine1>Importance in Investment</TopLine1>
              <p>
                AI has transformed the investment landscape by introducing data-driven decision-making processes. It helps investors analyze vast amounts of data in seconds and offers predictions with better accuracy than traditional methods.
              </p>
            </FeatureBox>
            <FeatureBox>
              <TopLine2>Deep Learning & Patterns</TopLine2>
              <p>
                Leveraging deep learning, our software can discern patterns in data previously invisible to human analysts. By understanding these patterns, investors gain a unique edge in predicting market movements.
              </p>
            </FeatureBox>
            <FeatureBox>
              <TopLine1>Why Our Bots Stand Out</TopLine1>
              <p>
                Our algorithmic trading bots utilize the best in AI and ML to offer a competitive advantage. If you're serious about maximizing returns and staying ahead of the market curve, there's no tool better equipped than ours.
              </p>
            </FeatureBox>
          </Row>
        </InfoWrapper2>
      </InfoContainer3>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Heroartificialintelligence;
