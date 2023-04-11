import React, { useState, Suspense, useEffect, useRef, useMemo } from 'react';
// import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,

  HeroContent,
} from './HeroElements';
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'
import { Text, Loader, Line, Shadow, useTexture, meshBounds, Cylinder, useAspect, OrbitControls, Text3D, Html } from '@react-three/drei'
import * as THREE from 'three'
import Model from '../GEO/Geo'
import { Experience } from '../3d_models/experience';



function Video() {
  const scale = useAspect(1920, 1080, 1)
  // Video texture by: https://www.pexels.com/@rostislav/
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), { src: '/iStock_optic.mp4', crossOrigin: 'Anonymous', loop: true, muted: true })
  )
  useEffect(() => void video.play(), [video])
  return (
    <mesh scale={scale}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={true} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
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
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'transparent',
  };
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
 
       <HeroContent>
       
{/*        
       <HeroBg>


        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg> */}

      

       {/* <Canvas shadows camera={{ position: [0, 0, 8], fov: 40 }}> */}
       <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>

      {/* <color attach="background" args={['#151520']} /> */}
      <directionalLight position={[-2.5, 4, 5]} castShadow intensity={1} shadow-bias={-0.00001} shadow-mapSize={[1024, 1024]} />
      <Suspense fallback={<Html center className="loading" children="Loading..." />}>
      <Experience/>
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
