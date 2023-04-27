import { animated, useSpring } from "@react-spring/three";
import { Float, useCursor,
  useAspect, useVideoTexture, useTexture, Text, RenderTexture, 
  PerspectiveCamera
 } from "@react-three/drei";
import { useEffect, useMemo, useLayoutEffect, useRef, useState, Suspense } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber"
import { AsciiEffect } from 'three-stdlib'

// import { IceCream } from "./Beach/IceCream";
// import { Palm } from "./Beach/Palm";
// import { VolleyBall } from "./Beach/VolleyBall";
// import Burger from "./Food/Burger";
// import Cannon from "./Food/Cannon";
// import { HotDog } from "./Food/HotDog";
// import { TargetStand } from "./Food/TargetStand";
// import { BookCase } from "./Haunted/BookCase";
// import { Cauldron } from "./Haunted/Cauldron";
// import { Fence } from "./Haunted/Fence";
// import { Witch } from "./Haunted/Witch";
// import { FerrisWheel } from "./Park/FerrisWheel";
// import { Podium } from "./Park/Podium";
// import { ShipLight } from "./Park/ShipLight";
import Brainmodel from "./brain";
import SombreroSuperficieMath from './Sombrero_superficie_math';
import Model from '../GEO/Geo';
import Scenemodel from './Scene_draco';
// import { Triumphe_Place } from "./Triumphe_nation";







function Dodecahedron(props) {
  const meshRef = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame(() => (meshRef.current.rotation.x += 0.01))
  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#5de4c7'} />
      </mesh>
    </group>
  )
}







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



function Sphere333(props) {
  const texture = useTexture('/Blue.jpg')
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
    </mesh>
  )
}



function Sphere(props) {
  const texture = useTexture('/Nebula.jpg')
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
    </mesh>
  )
}



const STEP_DURATION = 5000;



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



function Cube() {
  const textRef = useRef()
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <color attach="background" args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={4} color="#555">
            hello
          </Text>
          <Dodecahedron />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}



export const Carousel = (props) => {
  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: -Math.PI / 2,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -1.5 * Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -2 * Math.PI,
        delay: STEP_DURATION,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    immediate: true,
  });

  return (
    <>
      <group rotation-y={-Math.PI / 4} position-y={-0.01}>
        <animated.group rotation-y={carouselRotation}>
          <mesh position={[0, -2, 0]}>
            {/* <meshStandardMaterial color={"white"} /> */}
            <meshStandardMaterial color={"black"} />

            <cylinderBufferGeometry args={[12, 12, 4, 64]} />
          </mesh>
          <mesh scale={[1, 6, 24]} position-y={3}>
            <boxBufferGeometry />
            {/* <meshStandardMaterial color={"white"} /> */}
            <meshStandardMaterial color={"black"} />

          </mesh>
          <mesh scale={[24, 6, 1]} position-y={3}>
            <boxBufferGeometry />
            {/* <meshStandardMaterial color={"white"} /> */}
            <meshStandardMaterial color={"black"} />

          </mesh>
          {/* PARK */}
          <>
            {/* <Cube position={[1, 0, 10]} rotation-y={Math.PI / 2} /> */}
            {/* <Cube position={[6, 0, 2]} scale={[1, 1, 1]} /> */}
          


            <Float speed={5} floatIntensity={0.3}>

                          <Model
                position={[4.5, 5, 5.5]}
                scale={[1.6, 1.6, 1.6]}
                rotation-y={Math.PI / 2}
              /> 


              <SombreroSuperficieMath
                position={[6, 2.2, 4]}
                scale={[0.001, 0.001, 0.001]}
                rotation-x={-Math.PI / 16}
                rotation-y={-Math.PI}
              />
            </Float>
          </>
          {/* FOOD */}
          <>

           <Scenemodel
              position={[3, 4, -4]}
              scale={[0.005, 0.005, 0.005]}
              rotation-y={Math.PI / 2}
             />
             {/* <Sphere
              position={[4, 1, -7]}
                scale={[1.6, 1.6, 1.6]}
              rotation-y={-Math.PI / 8}
            /> */}
          {/* <Scenemodel position={[3, 4, -3]} scale={[3, 3, 3]} /> */}

          {/* <Scenemodel position={[-8, 4, 8]} scale={[2, 2, 2]} /> */}

          {/* <SombreroSuperficieMath position={[-8, 4, 8]} scale={[2, 2, 2]} /> */}

          {/* <Scenemodel position={[10, 4, -3]} scale={[2, 2, 2]} /> */}

            {/* <Burger position={[3, 4, -10]} scale={[3, 3, 3]} />
            <Scenemodel position={[3, 4, -3]} scale={[3, 3, 3]} />
            <Brainmodel position={[10, 4, -3]} scale={[3, 3, 3]} />
            // <Cannon
            //   position={[10, 0, -3]}
            //   scale={[2, 2, 2]}
            //   rotation-y={Math.PI / 2}
            // />
            <TargetStand
              position={[2, 0, -3]}
              scale={[1, 1, 1]}
              rotation-y={Math.PI / 2}
            />
            <Triumphe_Place
              position={[4, 1, -7]}
                scale={[1.6, 1.6, 1.6]}
              rotation-y={-Math.PI / 8}
            /> */}
          </>
          {/* HAUNTED */}
          <>
            <Float speed={3} floatIntensity={0.001}>

              <Brainmodel
                position={[-3, 2, -3]}
                // position={[-7.5, 2, -7.5]}

                scale={[1.0, 1.0, 1.0]}
                rotation-y={Math.PI * 1.25}
              />

            </Float>

            <Float speed={3} floatIntensity={0.005}>

              {/* <Model
                // position={[-4, 3, -5]}

                position={[-5.5, 2, -4.5]}
                scale={[1.6, 1.6, 1.6]}
                rotation-y={Math.PI / 2}
              /> */}

            </Float>

            {/* <Float speed={-1} floatIntensity={0.01}> */}
                  {/* <Torusknot /> */}
      {/* <AsciiRenderer fgColor="white" bgColor="black" />
              {/* <Cauldron position={[-2.8, 1, -8]} scale={[1.9, 1.9, 1.9]} /> */}
            {/* </Float> */}
          </>
          {/* BEACH */}
          <>

          {/* <Cube position={[-10, 4, 3]} scale={[0.5, 0.5, 0.5]}  /> */}

          <Float speed={-1} floatIntensity={0.01}>

                      <Sphere position={[-8, 4, 8]} scale={[1, 1, 1]} />

                      </Float>

                      <Float speed={-1} floatIntensity={0.01}>
          <Sphere333 position={[-4, 4, 4]} scale={[1.5, 1.5, 1.5]} />
          
          </Float>
          
          {/* <AsciiRenderer fgColor="white" bgColor="black" /> */}

            {/* <Torusknot scale={[3, 3, 3]} position={[-1, 0, 1]} /> */}
            {/* <Torusknot
              scale={[2.8, 2.6, 2.6]}
              position={[-7, 0, 0]}
              rotation-y={Math.PI / 6}
            /> */}
            {/* <VolleyBall /> */}
            {/* <Torusknot position={[-10, 4, 3]} scale={[3, 3, 3]} /> */}
            {/* <SombreroSuperficieMath position={[-8, 4, 8]} scale={[2, 2, 2]} /> */}
            {/* <IceCream position={[-3, 4, 10]} scale={[3, 3, 3]} /> */}
          </>
        </animated.group>
      </group>
    </>
  );
};
