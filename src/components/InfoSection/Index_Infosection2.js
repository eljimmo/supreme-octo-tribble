import { React, Suspense, useRef, useState, useMemo, useEffect, useLayoutEffect } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TopLine,
  Heading,
  Subtitle,

} from './InfoElements';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber'
import { useAspect, useVideoTexture, Scroll, Image, ScrollControls, useIntersect, useTexture, useCursor, Effects as EffectComposer } from '@react-three/drei'

import * as THREE from "three"


import { SSAOPass } from "three-stdlib"

extend({ SSAOPass })

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "red", roughness: 0, envMapIntensity: 0.2, emissive: "#370037" })


function Scene() {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="c4cA8UN.jpg" />}>
        <VideoMaterial url="drei.mp4" />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}


  
  


const InfoSection2 = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
       
            </Column1>
            <Canvas>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
     
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

    </Canvas>


    

          </InfoRow>

        </InfoWrapper>




      </InfoContainer>
    </>
  );
};

export default InfoSection2;

