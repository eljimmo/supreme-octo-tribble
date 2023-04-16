import gsap from "gsap";
import React from "react";
import { useState, Suspense } from "react";
import * as THREE from "three";

import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useTexture,
  shaderMaterial,
  useAspect, 
  useVideoTexture,
  OrbitControls,
  Effects,
  RenderTexture,
  PerspectiveCamera,
  Environment,
  Html,
  Stage,
  Text
 } from "@react-three/drei";
 import { LUTPass, LUTCubeLoader } from 'three-stdlib';


 extend({ LUTPass })


 function Grading() {
  const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
  return (
    <Effects>
      <lUTPass lut={texture3D} intensity={0.75} />
    </Effects>
  )
}


 export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
)

extend({ ImageFadeMaterial })

function FadingImage() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useTexture(["/bluesight.jpg", "/crosshair.jpg", "/10.jpg"])
  const [hovered, setHover] = useState(false)
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
  })
  return (
    <mesh onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
      <planeGeometry />
      <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
    </mesh>
  )
}




function Sphere(props) {
  const texture = useTexture('/Nebula.jpg')

  const textRef = useRef()
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />

      <meshStandardMaterial>
        
        <RenderTexture attach="map" anisotropy={1}>
          
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />


          <color attach="background" args={['transparent']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />

      <Text ref={textRef} fontSize={1} color="#fafafc">
            Leibniz
          </Text>


        </RenderTexture>
      </meshStandardMaterial>



      <meshPhysicalMaterial map={texture} clearcoat={0} clearcoatRoughness={0} roughness={0} metalness={0} />
    </mesh>
  )
}


const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: black;
  overflow: hidden;
`;
const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  font-size: 7em;
  color: white;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  font-size: 7em;
  color: green;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  span {
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
    align-self: flex-end;
    text-align: right;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;

const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>Intelligent Artificial NeuroEvolution.</span>
      </TextContainer>
      <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>

      <ambientLight />
      <spotLight intensity={1.5} angle={4.2} penumbra={1} position={[5, 15, 10]} />
      <Environment preset="forest" />

        <Suspense fallback={<Html center className="loading" children="Loading..." />}>

          <Sphere 
            scale={[2.1, 2.1, 2.1]}
            rotation={[0, -0.2, 0]} />



                <Grading />

       </Suspense>

       <OrbitControls makeDefault autoRotate />
       <Environment preset="dawn" background blur={0.0}/>

      </Canvas>
      <TextContainer2 ref={textTwo}>
        <span>Genetic Algorithms.</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
