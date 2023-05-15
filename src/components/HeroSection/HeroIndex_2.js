import React, { Suspense } from 'react';
import styled, { keyframes } from "styled-components";
// import Video from './videos/iStock_optic.mp4';
import {
  HeroBg,
  VideoBg,
  HeroContainerTransparent,
  HeroContent,
} from './HeroElements';
import { useRef, useState } from "react"
import { Canvas} from "@react-three/fiber"
import {
  Html,
 } from "@react-three/drei"
import '../components.css';
import { Experience } from '../3d_models/experience';








function HeroSection_2() {
  const [hover, setHover] = useState(false);
  const sectionRef = useRef(null);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainerTransparent id='home'>

      <HeroBg>



      </HeroBg>
      <HeroContent>
      <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>

<directionalLight position={[-2.5, 4, 5]} castShadow intensity={1} shadow-bias={-0.00001} shadow-mapSize={[1024, 1024]} />
<Suspense fallback={<Html center className="loading" children="Loading..." />}>
<Experience/>
</Suspense>
</Canvas>
      

      </HeroContent>

    </HeroContainerTransparent>
  );
}

export default HeroSection_2;
