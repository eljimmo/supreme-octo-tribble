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
import { Experience } from '../3d_models/experience';








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
        {/* <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' /> */}

      <HeroBg>



      </HeroBg>
      <HeroContent>
      <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>

{/* <color attach="background" args={['#151520']} /> */}
<directionalLight position={[-2.5, 4, 5]} castShadow intensity={1} shadow-bias={-0.00001} shadow-mapSize={[1024, 1024]} />
<Suspense fallback={<Html center className="loading" children="Loading..." />}>
<Experience/>
</Suspense>
</Canvas>
      

      </HeroContent>
      {/* </Section> */}

    </HeroContainer>
  );
}

export default HeroSection_2;
