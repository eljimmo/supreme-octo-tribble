import React, { useState, Suspense, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,

} from '../components/InfoSection/Data';
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import Model from '../components/3d_models/brain'
import { OrbitControls } from "@react-three/drei";

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, enable] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          {/* <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} /> */}
          <VideoText position={[0, 1.3, -2]} />
          {/* <Ground /> */}
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
    </Canvas>
      <InfoSection {...homeObjOne} />

      

        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />

        <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>







    </>
  );
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text fontSize={3} letterSpacing={-0.06} {...props}>
      Leibniz
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
