import React from "react";
import styled from 'styled-components';

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

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#f7f8fa')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


const TopLine = styled.div`
  color: #00b100;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;



const HeroNeuroevolution = () => {
  return (
    <div id="hero">
      <Heading>Neuro Evolution</Heading>
              <InfoWrapper2>
      <TopLine> Created by Jim Morales </TopLine>

      <p> 
      Neuro Evolution refers to the contruction of artificial intelligence models that are biologically inspired. By utilizing evolutionary processes,
      the architectural construction of the model is designed to optimize the performance of said model. Neuro Evolution enables deep optimal space 
      exploration by a population of evolutionary computional algorithms to create solutions that are continously improved by a process of reproduction, recombination, mutation and selection.
      </p>
      </InfoWrapper2>
      <br/>

  </div>

  );
};

export default HeroNeuroevolution;
