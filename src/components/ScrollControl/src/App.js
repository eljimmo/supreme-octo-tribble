import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll, Text, Image, Scroll, Preload, ScrollControls } from '@react-three/drei'
// import { easing } from 'maath'
import Typewriter from 'typewriter-effect';



export default function ScApp() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'black' }}>
    <Canvas camera={{ position: [0, 0, 20], fov: 15
    // set the background color of the scene to black
    , background: new THREE.Color(0x000000)
    
    
    }}>
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Scroll>

            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div style={{ transform: 'translate3d(65vw, 192vh, 0)', color: '#7918f2' }}>
            artificial Neurons or Nodes
                          <br />
                          predictive modeling, adaptive control
                                        <br />


                                        cognitive modelling
                                                      <br />
            </div>


            <div style={{ transform: 'translate3d(65vw, 192vh, 0)', color: 'white' }}>
            <Typewriter
  options={{
    strings: ['Creating Intelligence', 'Creating Agency', 'Creating Consciousness'],
    autoStart: true,
    loop: true,
  }}
/>
            </div>

          </Scroll>
          {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
          <Preload />
      </ScrollControls>
    </Canvas>
    </div>
  )
}


function Images() {
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/invest.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/nodes.jpg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/crosshair.jpg" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="/Server.jpg" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/Blue.jpg" />
      <Image position={[0, -height * 1.5, 7.5]} scale={[1.5, 3, 1]} url="/board.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 1.1, 1]} url="/ComputingAbstract.jpg" />
    </group>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.cameta, [0, 0, 12])
  const shared = { font: '/Inter-Regular.woff', letterSpacing: -0.1, color: 'white' }
  return (
    <>
      <Text children="Intelligence" anchorX="left" position={[-width / 2.5, -height / 10, 6]} {...shared} />
      <Text children="Artificial Agents" anchorX="right" position={[width / 1.2, -height * 2, 6]} {...shared} />
      <Text children="Smart Generation" position={[0, -height * 4.624, 6]} {...shared} />
    </>
  )
}
