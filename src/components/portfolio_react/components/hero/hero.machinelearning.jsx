import React from "react";
import styled, { keyframes } from 'styled-components';

// import {
//   InfoWrapper2,  
//   TopLine2a,
//   AnimatedGradientText1,
  

// } from "../../../InfoSection/InfoElements";


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


const TopLine2a = styled.div`
  color: #00b100;
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

const HeroMachineLearning = () => {
  return (
    <div id="hero">
      <AnimatedGradientText1>Machine Learning in Financial Applications</AnimatedGradientText1>
              <InfoWrapper2>
      <br/>
      <TopLine2a>
      Machine learning (ML) is the subset of artificial intelligence (AI) that focuses on building systems that learn—or improve performance—based on the data they consume.
      Create your own custom financial trading agent to better assist you when trading.
      Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.
      </TopLine2a>
      </InfoWrapper2>
      <br/>
      </div>

  );
};

export default HeroMachineLearning;
