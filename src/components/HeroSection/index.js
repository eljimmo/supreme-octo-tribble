import React from 'react';
import FrostedApp from '../FrostedGlass/index';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1150px;
  position: relative;
  z-index: 1;

`;

const HeroContaineroi = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 610px;
  position: relative;
  z-index: 1;

`;

export default function HeroSection() {

  return (
    <HeroContaineroi id='home'>
      <FrostedApp/>
    </HeroContaineroi>
  );
}



