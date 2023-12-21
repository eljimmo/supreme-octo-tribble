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
import Infosection3 from '../InfoSection/Index3';
import { proxy, useSnapshot } from 'valtio'

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

const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])


function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      easing.damp(child.scale, 'y', 0.15 + y / 6, 0.15, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
      ))}
    </group>
  )
}

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    easing.damp3(ref.current.scale, [clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1], 0.15, delta)
    ref.current.material.scale[0] = ref.current.scale.x
    ref.current.material.scale[1] = ref.current.scale.y
    if (clicked !== null && index < clicked) easing.damp(ref.current.position, 'x', position[0] - 2, 0.15, delta)
    if (clicked !== null && index > clicked) easing.damp(ref.current.position, 'x', position[0] + 2, 0.15, delta)
    if (clicked === null || clicked === index) easing.damp(ref.current.position, 'x', position[0], 0.15, delta)
    easing.damp(ref.current.material, 'grayscale', hovered || clicked === index ? 0 : Math.max(0, 1 - y), 0.15, delta)
    easing.dampC(ref.current.material.color, hovered || clicked === index ? 'white' : '#aaa', hovered ? 0.3 : 0.15, delta)
  })
  return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
}


function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
      <Minimap />
      <Scroll>
      {/* {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) } */}

      </Scroll>
    </ScrollControls>
  )
}

const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map((u) => `/${u}.jpg`)
})


export default function App() {
  return (
    <>
    <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows camera={{ position: [0, 0, 20], fov: 50 }} onPointerMissed={() => (state.clicked = null)}>
    {/* <Selector> */}
      {/* <color attach="background" args={["#e0e0e0"]} /> */}
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
          <Items/>

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
          {/* <Items/> */}

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
    {/* </Selector> */}

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




