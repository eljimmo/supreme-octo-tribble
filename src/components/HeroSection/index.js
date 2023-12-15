import React from 'react';
import FrostedApp from '../FrostedGlass/index';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

`;

export default function HeroSection() {

  return (
    <HeroContainer id='home'>
      <FrostedApp/>
    </HeroContainer>
  );
}



