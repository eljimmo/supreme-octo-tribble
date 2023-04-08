import React from 'react';
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';
import * as THREE from "three"
import { useRef, useState } from "react"
import { RGBELoader } from 'three-stdlib'
import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber"
import { useTexture, shaderMaterial, useCursor, OrbitControls,
  Center,
  Text3D,
  Instance,
  useGLTF,
  Instances,
  Environment,
  Lightformer,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial } from "@react-three/drei"
import { AsciiEffect } from 'three-stdlib'
import { useEffect, useMemo, useLayoutEffect } from 'react'
import { useControls, button } from 'leva'
import Scenemodel from '../3d_models/Scene_draco';
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from '../InfoSection/InfoElements';


function Torusknot(props) {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
    </mesh>
  )
}

function AsciiRenderer({
  renderIndex = 1,
  bgColor = 'black',
  fgColor = 'white',
  characters = ' .:-+*=%@#',
  invert = true,
  color = false,
  resolution = 0.15
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'
    return effect
  }, [characters, invert, color, resolution])

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor
    effect.domElement.style.backgroundColor = bgColor
  }, [fgColor, bgColor])

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.style.opacity = '0'
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => {
      gl.domElement.style.opacity = '1'
      gl.domElement.parentNode.removeChild(effect.domElement)
    }
  }, [effect])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component returns nothing, it is a purely logical
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


const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#999" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper args={[100, 100, '#bbb', '#bbb']} position={[0, -0.01, 0]} />
  </Instances>
)

function Text({ children, ...props }) {
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            <MeshTransmissionMaterial reflectivity={0.5} background={texture} />
          </Text3D>
        </Center>
        <Grid />
      </group>
    </>
  )
}



export default function Services () {
  // const { range } = useControls({ range: { value: 100, min: 0, max: 300, step: 10 } })

  // const { autoRotate, text, shadow, ...config } = useControls({
  //   text: 'Inter',
  //   backside: false,
  //   samples: { value: 16, min: 1, max: 32, step: 1 },
  //   resolution: { value: 512, min: 64, max: 2048, step: 64 },
  //   transmission: { value: 0.6, min: 0, max: 1 },
  //   clearcoat: { value: 0, min: 0.1, max: 1 },
  //   clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
  //   thickness: { value: 0.55, min: 0, max: 5 },
  //   chromaticAberration: { value: 5, min: 0, max: 5 },
  //   anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
  //   roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
  //   distortion: { value: 1, min: 0, max: 4, step: 0.01 },
  //   distortionScale: { value: 1, min: 0.01, max: 1, step: 0.01 },
  //   temporalDistortion: { value: 0.4, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 0.83, min: 0, max: 2, step: 0.01 },
  //   color: '#ff9cf5',
  //   gColor: '#ff7eb3',
  //   shadow: '#750d57',
  //   autoRotate: false,
 
  // })
  return (
    <ServicesContainer id='services'>
      {/* <Canvas shadows orthographic camera={{ position: [10, 20, 20], zoom: 80 }} gl={{ preserveDrawingBuffer: true }}> */}
      {/* <color attach="background" args={['#f2f2f5']} /> */}
      {/* <Torusknot /> */}
      {/* <FadingImage/> */}
      {/* <Torusknot /> */}
      {/* <AsciiRenderer fgColor="white" bgColor="black" /> */}

      {/* <SombreroSuperficieMath/> */}
      {/** The text and the grid */}
      {/* <Text>
      </Text> */}
      {/** Controls */}

      {/* <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      /> */}
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      
      {/* <Shoes data={data} /> */}

      {/* <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
        </group>
      </Environment> */}

      {/* * Soft shadows */}
      {/* <AccumulativeShadows
        temporal
        frames={100}
        color={shadow}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, -1.01, 0]}>
        <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
      </AccumulativeShadows> */}
    {/* </Canvas> */}


      {/* <ServicesH1>Algorithms and Methods</ServicesH1> */}
      {/* <Canvas>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <AsciiRenderer fgColor="white" bgColor="black" />
    </Canvas> */}
      <ServicesWrapper>
      <Column1>
      <Canvas camera={{ position: [0, 0, 2], fov: 5 }}>
      <FadingImage />
    </Canvas>
      </Column1>

        <ServicesCard>

        {/* <Canvas camera={{ position: [0, 0, 2], fov: 5 }}>
      <FadingImage />
    </Canvas>   */}



    {/* <ServicesH2>AI Assisted Analysis</ServicesH2> */}
          {/* <ServicesP>
            A comprehensive financial modeling structure enables investors to capture a more holistic valuation towards determining navigation in volatile risk field.
          </ServicesP> */}
        </ServicesCard>
        <Column1>
        <Canvas>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <AsciiRenderer fgColor="white" bgColor="black" />
    </Canvas>
      </Column1>
        <ServicesCard>

        {/* <Canvas camera={{ position: [0, 0, 2], fov: 500 }}>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <OrbitControls />
      <AsciiRenderer fgColor="white" bgColor="black" />
    </Canvas> */}

          {/* <ServicesH2>Find Underlying Stock Trend Patterns Utilizing the most powerful modern day tools.</ServicesH2>
          <ServicesP>
            By minimizing the variable search space, & subsequent effect, a process of data optimization is created to find correlational traces in data. */}
          {/* </ServicesP> */}
        </ServicesCard>
        <Column1>
      </Column1>

        <ServicesCard>

        {/* <Canvas camera={{ position: [0, 0, 2], fov: 5 }}>
      <FadingImage />
    </Canvas>  */}

          {/* <ServicesH2>Unleash the power of Artificial Intelligence Algorithms to analyze financial data.</ServicesH2> */}
          {/* <ServicesP>
            Created by the Leibniz Analytica Team, data provided by IEX Cloud, graphing library provided by Plotly Dash.
          </ServicesP> */}
        </ServicesCard>



      </ServicesWrapper>
    </ServicesContainer>
  );
};


