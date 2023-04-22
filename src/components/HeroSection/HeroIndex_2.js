import React, { Suspense } from 'react';
import styled, { keyframes } from "styled-components";
import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
} from './HeroElements';
import { Card, Image, Group, Badge, Text, createStyles, Center, Button, rem } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber"
import { useTexture,
  shaderMaterial,
  useAspect, 
  useVideoTexture,
  OrbitControls,
  Effects,
  Environment,
  Html,
  Stage
 } from "@react-three/drei"
import Triumphe_Place from '../3d_models/Triumphe_nation';
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import { LUTPass, LUTCubeLoader } from 'three-stdlib'
import a15 from "./pexels_engineering.jpg";
import '../components.css';
import Model from '../GEO/Geo';








const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: black;
  overflow: hidden;
`;


function HeroSection_2() {
  const [hover, setHover] = useState(false);
  const sectionRef = useRef(null);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
    {/* <Section ref={sectionRef}> */}
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />

      <HeroBg>



      </HeroBg>
      <HeroContent>
      <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>

      <ambientLight />
      <spotLight intensity={1.5} angle={4.2} penumbra={1} position={[5, 15, 10]} />
      <Environment preset="forest" />

        <Suspense fallback={<Html center className="loading" children="Loading..." />}>

        <Model
        position={[0, -0.0005, 0]}
        
        />

       </Suspense>

       {/* <OrbitControls makeDefault autoRotate /> */}

      </Canvas>
      

      </HeroContent>
      {/* </Section> */}

    </HeroContainer>
  );
}

export default HeroSection_2;
