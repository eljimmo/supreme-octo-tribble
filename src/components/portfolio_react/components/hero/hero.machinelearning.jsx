import React from "react";
import styled, { keyframes } from 'styled-components';

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
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1.2px;
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
  gap: 24px;
  justify-content: space-around;
  margin-top: 40px;
`;

const Box = styled.div`
  flex: 1;
  padding: 20px;
  border: 2px solid #00b100;
  background: transparent;
  max-width: 300px;
  text-align: center;
  color: #ffffff;  // Add this line to set the font color to white
`;


const HeroMachineLearning = () => {
  return (
    <div id="hero">
      <AnimatedGradientText1>Machine Learning & Financial Decision-Making</AnimatedGradientText1>
      <InfoWrapper2>
        <TopLine2a>
          At the heart of modern finance lies Machine Learning (ML), a branch of artificial intelligence (AI) that equips systems with the ability to learn from and interpret data without explicit instructions. As the financial sector becomes increasingly complex, ML emerges as a powerful tool, offering solutions tailored to navigate the intricate world of finance.
        </TopLine2a>
        
        <Row>
          <Box>
            <h3>Intelligent Trading Bots</h3>
            Leveraging ML, our platform offers trading bots that continuously learn from market data. They assess patterns and execute trades, maximizing profitability and reducing human error.
          </Box>
          
          <Box>
            <h3>Optimizers & Loss Functions</h3>
            The core of ML in trading lies in optimizing algorithms. By fine-tuning optimizers and loss functions, our tools ensure that trading strategies are efficient and yield positive returns.
          </Box>
          
          <Box>
            <h3>Math-Powered Finance</h3>
            Dive deep into the intricate mathematics of trading. Utilize our advanced tools to harness the power of algorithms, making your investment decisions more strategic and data-driven.
          </Box>
        </Row>
      </InfoWrapper2>
      <br/>
      <br/>
    </div>
  );
};

export default HeroMachineLearning;
