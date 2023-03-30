import { React, useState, useEffect, Suspense } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import { Text, Cylinder, meshBounds, Line, Stage, useFBO, useVideoTexture, useAspect, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber'



function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text fontSize={8} letterSpacing={-0.06} {...props}>
      LEIBNIZ
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> */}
      <Canvas
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
</Canvas> 
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='discover'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to='signup'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>

        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
