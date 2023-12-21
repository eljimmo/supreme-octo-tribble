import { useRef, useEffect, useState } from 'react'
import { 
  Canvas, 
  useFrame, 
  useThree
 } from '@react-three/fiber'

import { MeshTransmissionMaterial, 
  ContactShadows, 
  Environment, 
  Stage, 
  OrbitControls, 
  Loader,
  useGLTF, 
  Float, 
  Lightformer,  
  Html,
  useScroll, 
  Text, 
  Image, 
  Scroll, 
  Preload, 
  ScrollControls, 
  Grid,  
} from '@react-three/drei'
import { easing } from 'maath'
import { useStore } from './store'
import Model from '../GEO/Geo'
import { Paradox } from '../GEO/Paradox'
import './styles.css';
import * as THREE from 'three'
// import Underlay from '../FrostedGlass/Herooverlay';
import HeroMachineLearning from "../../components/portfolio_react/components/hero/hero.machinelearning";
import Overlay from '../Landing/Overlay';

import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"
import { Route, Link, useLocation } from "wouter"
import { suspend } from "suspend-react"

// import InfoSection from '../../../src/components/InfoSection/index';
// import Infosection from '../InfoSection/Index';

import Infosection3 from '../InfoSection/Index3';

// import InfoSection2 from '../../../src/Components/InfoSection/Index2';
import { 
  homeObjOne, 
  homeObjThree
 } from '../../../src/components/InfoSection/Data';
import InfoSection3 from '../InfoSection/Index3'


function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10],
      0.2,
      delta,
    )
    state.camera.lookAt(0, 0, 0)
  })
}

const Torus = (props) => (
  <mesh receiveShadow castShadow {...props}>
    <torusGeometry args={[4, 1.2, 128, 64]} />
    <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
  </mesh>
)


const Knot = (props) => (
  <mesh receiveShadow castShadow {...props}>
    <torusKnotGeometry args={[3, 1, 256, 32]} />
    <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
  </mesh>
)

function Status(props) {
  const [loc] = useLocation()
  const text = loc === "/" ? "/knot" : loc
  return (
    <Text fontSize={14} letterSpacing={-0.025} color="white" {...props}>
      {text}
      <Html style={{ color: "transparent", fontSize: "33.5em",  }} transform>
        {text}
      </Html>
    </Text>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.cameta, [0, 0, 12])
  const shared = { font: '/Inter-Regular.woff', letterSpacing: -0.1, color: 'whitesmoke' }
  return (
<>
  <Text children="Intelligence" anchorX="left" position={[-width / 2.5, height / 2 - 2, 2]} {...shared} />
  <Text children="Artificial Agents" anchorX="right" position={[width / 1.2, height / 2 - 2, 6]} {...shared} />
  <Text children="Smart Analysis" position={[0, height / 2, 6]} {...shared} />
</>

  )
}



export default function App() {
  return (
    <>
    <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows camera={{ position: [0, 0, 20], fov: 50 }}>
    <Selector>
      <color attach="background" args={["#e0e0e0"]} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <Float floatIntensity={2}>
        <Route path="/sim">
          <Knot />
          <ScrollControls horizontal damping={0.1}  distance={0.9}>

          
          <Scroll html style={{ 
          overflowY: 'scroll', 
          scrollbarWidth: 'none',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          }}>
          <br />
                            <br />
                            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                color: 'whitesmoke',
              }}
            >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

            
              <Infosection3 {...homeObjThree} />

            </div>
            <br />
                            <br />
                            <br />
                            <br />
                            <br />
          </Scroll>

          </ScrollControls>
        </Route>
        <Route path="/model">
          <Torus />
          <ScrollControls horizontal damping={0.1}  distance={0.9}>

          
          <Scroll html style={{ 
          overflowY: 'scroll', 
          scrollbarWidth: 'none',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          }}>
          <br />
                            <br />
                            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                color: 'whitesmoke',
              }}
            >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

            
              <Infosection3 {...homeObjThree} />

            </div>
            <br />
                            <br />
                            <br />
                            <br />
                            <br />
          </Scroll>

          </ScrollControls>
        </Route>
        <Route path="/">

          <Model scale={2.5} />
          <ScrollControls horizontal damping={0.1}  distance={0.9}>

          
          <Scroll html style={{ 
          overflowY: 'scroll', 
          scrollbarWidth: 'none',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          }}>
          <br />
                            <br />
                            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                color: 'whitesmoke',
              }}
            >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

            
              <Infosection3 {...homeObjThree} />

            </div>
            <br />
                            <br />
                            <br />
                            <br />
                            <br />
          </Scroll>

        </ScrollControls>


        </Route>
      </Float>
      <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85} />
      <Environment preset="city">
        <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={1} intensity={2} />
        {/* <TiltShift2 blur={0.2} /> */}
      </EffectComposer>
      <Rig />
    </Selector>

    </Canvas>

    <ul className="nav">
  <li><Link to="/">algo</Link></li>
  <li><Link to="/model">model</Link></li>
  <li><Link to="/sim">sim</Link></li>
</ul>



  </>
    )
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/1616.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text font="/Inter-Bold.woff" fontSize={8} letterSpacing={-0.06} {...props}>
      Simulations
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}


function Selector({ children }) {
  const ref = useRef()
  const store = useStore()
  useFrame(({ viewport, camera, pointer }, delta) => {
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3])
    easing.damp3(ref.current.position, [(pointer.x * width) / 2, (pointer.y * height) / 2, 3], store.open ? 0 : 0.1, delta)
    easing.damp3(ref.current.scale, store.open ? 4 : 0.01, store.open ? 0.5 : 0.2, delta)
    easing.dampC(ref.current.material.color, store.open ? '#f0f0f0' : '#ccc', 0.1, delta)
    // easing.dampC(ref.current.material.color, store.open ? '#000000' : '#ccc', 0.1, delta)

  })
  return (
    <>
      <mesh ref={ref}>
        <circleGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} />
      </mesh>
      <group
        onPointerOver={() => (store.open = true)}
        onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        onPointerUp={() => (store.open = false)}>
        {children}
      </group>
    </>
  )
}




