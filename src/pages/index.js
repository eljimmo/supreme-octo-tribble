import React, { useState, Suspense, useEffect, useMemo, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,

} from '../components/InfoSection/Data';
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'
import { Text, Cylinder, meshBounds, Line, Stage, useFBO, useVideoTexture, useAspect, useTexture } from '@react-three/drei'
import * as THREE from 'three'
// import Model from '../components/3d_models/brain'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { a } from '@react-spring/web'
import Model from '../components/GEO/Geo'
import state from '../components/GEO/state';
import { Block, useBlock } from "../components/GEO/blocks";
import { useDrag } from "@use-gesture/react"
import Effects from '../components/GEO/Effects'
import {
  HeroContainer200,
  HeroContainer400,
  HeroContent,
  HeroContent2
} from '../components/HeroSection/HeroElements';





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



export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />   
      <HeroContainer200 >   

      <Canvas orthographic
      width={window.innerWidth}
      height={window.innerHeight}

      >
      <Scene />

    </Canvas>

    </HeroContainer200 >   

      <InfoSection {...homeObjOne} />
      {/* <HeroContent2 >    */}

      {/* <Canvas
    shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
    <ambientLight intensity={2} />
 

<Suspense fallback={null}>

        <Stage intensity={2}>
  <VideoText/>
  </Stage>
</Suspense>
</Canvas>   */}
{/* </HeroContent2 >    */}

        <InfoSection {...homeObjTwo} />

      
        <InfoSection {...homeObjThree} />

    </>
  );
}



function Map() {
  return new Array(6).fill().map((img, index) => (
    <Block key={index} factor={1 / state.sections / 2} offset={index}>
    </Block>
  ))
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text

      font="/Ki-Medium.ttf"
      fontSize={width / 12}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}




function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text fontSize={18} letterSpacing={-0.06} {...props}>
      LEIBNIZ
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}



function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}


function HeadsUpDisplay({ children }) {
  const [scene] = useState(() => new THREE.Scene())
  const { gl, camera } = useThree()
  useFrame(() => ((gl.autoClear = false), gl.clearDepth(), gl.render(scene, camera)), 2)
  return createPortal(children, scene)
}


function Overlay({  }) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 583 720"  xmlns="http://www.w3.org/2000/svg">
        <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M61 40H50.5v9H61v10.5h9V40h-9z" fill="#E8B059" />
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={328} y={46.182} children="08/01/21" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={392} y={46.182} children="Artificial Intelligence " />
          <tspan x={392} y={54.182} children="Reinforcement Learning" />
          <tspan x={392} y={62.182} children="Deep Learning Modeling" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={175.318} children="Leibniz Analytica" />
          <tspan x={40} y={188.318} children="AI Software for Finance" />
        </text>
        <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={52} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={257.909} children={'The Invocation \u2014'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={48} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={321.909} children="Behold the sign and " />
          <tspan x={40} y={372.909} children="the very Hallowed " />
          <tspan x={40} y={423.909} children="Names of God full of " />
          <tspan x={40} y={474.909} children="power. Obey the " />
          <tspan x={40} y={525.909} children="power of this our " />
          <tspan x={40} y={576.909} children="pentacle;" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
          <tspan x={326} y={640.318} children="The Complete Book of Magic Science" />
        </text>
      </a.svg>
    </div>
  )
}


function Marker() {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [hovered, set] = useState(false)
  const { sectionWidth } = useBlock()
  useEffect(() => void (document.body.style.cursor = hovered ? "grab" : "auto"), [hovered])
  useFrame(({ camera }) => {
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, (state.top.current / state.zoom / sectionWidth / state.pages) * -Math.PI * 2, 0.1)
    const s = THREE.MathUtils.lerp(ref.current.scale.x, active || hovered ? 2 : 0.75, 0.1)
    ref.current.scale.set(s, s, s)
    camera.zoom = THREE.MathUtils.lerp(camera.zoom, active || hovered ? 40 : state.zoom, 0.1)
    camera.updateProjectionMatrix()
  })
  const bind = useDrag(({ movement: [x], first, last }) => (setActive(!last), (state.ref.scrollLeft = x * 2 * state.pages)), {
    // initial: () => [(state.ref.scrollLeft * 0.5) / state.pages]
  })
  return (
    <group ref={ref} position={[0, 0, 2]}>
      <Rect {...bind()} onPointerOver={(e) => (e.stopPropagation(), set(true))} onPointerOut={() => set(false)} />
    </group>
  )
}



function Rect({ scale, ...props }) {
  return (
    <group scale={scale}>
      <Line points={[-0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0, -0.5, -0.5, 0, -0.5, 0.5, 0]} color="white" linewidth={1} position={[0, 0, 0]} />
      <mesh {...props} raycast={meshBounds}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
    </group>
  )
}


const pointSize = 4

function ccccc(children, color, fontSizing, uvWidth) {
  const fontSize = fontSizing

  if (uvWidth == null) {
    uvWidth = 2048
  }

  const canvas = document.createElement('canvas')
  canvas.width = uvWidth
  canvas.height = uvWidth / pointSize
  const context = canvas.getContext('2d')

  context.fillStyle = 'transparent'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = color

  context.lineWidth = 2

  //////////////// LetterSpacing
  // const ctext = children.split('').join(String.fromCharCode(8202))
  const ctext = children

  context.fillText(ctext, canvas.width / 2, canvas.height / 2)

  return canvas
}

export const TextRing = ({ children, position, color, fontSizing, repeatCount, rotation, colorBack, uvWidth }) => {
  const [hovered, setHover] = useState(false)

  if (rotation == null) {
    rotation = [0, 0, 0]
  }

  const canvas = useMemo(() => {
    return ccccc(children, color, fontSizing, uvWidth)
  }, [children, color, fontSizing, uvWidth])

  const backCanvas = useMemo(() => {
    return ccccc(children, color, fontSizing, uvWidth)
  }, [children, color, fontSizing, uvWidth])

  const texture = useRef()
  const texture2 = useRef()
  useFrame(({ clock }) => {
    texture.current.offset.x = clock.getElapsedTime() / 2
    texture2.current.offset.x = clock.getElapsedTime() / 2
  })

  const cylArgs = [1, 1, 1 / pointSize, 64, 1, true]

  return (
    <group
      rotation-y={Math.PI / 4}
      scale={hovered ? [1.15, 1.15, 1.15] : [1, 1, 1]}
      rotation={rotation}
      position={position}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <Cylinder args={cylArgs} side={THREE.FrontSide}>
        <meshStandardMaterial transparent attach="material">
          {/* <meshStandardMaterial attach="material"> */}
          <canvasTexture
            attach="map"
            repeat={[repeatCount, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>

      <Cylinder args={cylArgs}>
        <meshStandardMaterial transparent attach="material" side={THREE.BackSide}>
          <canvasTexture
            attach="map"
            repeat={[repeatCount * 2, 1]}
            image={backCanvas}
            premultiplyAlpha
            ref={texture2}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>
    </group>
  )
}
