import React, { useState, Suspense, useEffect, useRef, useMemo } from 'react';
import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroContainerexportd0d0d0,
  HeroBg,
  VideoBg,
  HeroContent,
} from './HeroElements';
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'
import { Text, Loader, Line, Shadow, useTexture, meshBounds, Cylinder, useAspect, OrbitControls, Text3D, Html, Scroll, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { Experience } from '../3d_models/experience';
import Model from '../GEO/Geo';
import Typewriter from 'typewriter-effect';
import Frosted_App from '../FrostedGlass';



function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, 0]}
      lineHeight={0.8}
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}






export default function HeroSection() {

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>



      <HeroBg>


      <div style={{ color: 'white', position: [0, 0, 0] }}>

<Typewriter
options={{
strings: ['Creating Intelligence', 'Creating Agency', 'Creating Consciousness'],
autoStart: true,
loop: true,
}}
/>

</div>


        {/* <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' /> */}




      </HeroBg>



      <HeroContent>

        {/* <Canvas 
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 53.5, near: 1, far: 10 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
      <Experience />
      </Canvas> */}

     
      {/* <Frosted_App/> */}


      <Canvas
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 53.5, near: 1, far: 40 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>

<Caption>LEIBNIZ</Caption>




<ambientLight intensity={1} />
<directionalLight position={[-2, 5, 2]} intensity={1} />
<Suspense fallback={null}>
  {/* <Model /> */}

  {/* <Experience /> */}

</Suspense>
</Canvas>

</HeroContent>




   </HeroContainer>




  );
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

  //////////// Click isMobile ///////////
  // const MobileClicker = () => {
  //   setColor(colorBack)
  //   setHover(true)
  //   setTimeout(() => {
  //     setHover(false)
  //   }, 100)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHover(false)
  //   }, 100)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])
  // }
  // <group
  //     rotation-y={Math.PI / 4}
  //     scale={hovered ? [1.15, 1.15, 1.15] : [1, 1, 1]}
  //     rotation={rotation}
  //     position={position}
  //     onPointerDown={(e) => MobileClicker()}>
  ////////////////////////////////////////

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
