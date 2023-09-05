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

const InfoContainer3 = styled.div`

  color: #fff;
  background: transparent;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 860px;

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



const Heroartificialintelligence = () => {
  return (
    <div id="hero">

      <InfoContainer3>
      <AnimatedGradientText1>Artificial Intelligence & Commericial Investments</AnimatedGradientText1>
              <InfoWrapper2>
                <br/>
      <TopLine1>
      “The term ‘artificial intelligence’ means a machine-based system that can, for a given set of human-defined objectives, make predictions, recommendations or decisions influencing real or virtual environments.” 
      The term is often used interchangeably with its subfields, which include machine learning (ML) and deep learning.
      There are differences, however. For example, machine learning is focused on building systems that learn or improve their performance based on the data they consume. It’s important to note that although all machine learning is AI, not all AI is machine learning.
      </TopLine1>
      </InfoWrapper2>
      <br/>
     </InfoContainer3>
  </div>

  );
};

export default Heroartificialintelligence;
