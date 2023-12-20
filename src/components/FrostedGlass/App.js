import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, ContactShadows, Environment, Grid, Stage, OrbitControls, Loader,
  useGLTF, 
  Float, 
  Lightformer, 
  Text, 
  Html, 
} from '@react-three/drei'
import { easing } from 'maath'
import { useStore } from './store'
import Model from '../GEO/Geo'
import { Paradox } from '../GEO/Paradox'
import './styles.css';



import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"
import { Route, Link, useLocation } from "wouter"
import { suspend } from "suspend-react"




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




export default function App() {
  return (
    <>
    <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows camera={{ position: [0, 0, 20], fov: 50 }}>
    <Selector>
      <color attach="background" args={["#e0e0e0"]} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <Status position={[0, 0, -10]} />
      <Float floatIntensity={2}>
        <Route path="/">
          <Knot />
        </Route>
        <Route path="/torus">
          <Torus />
        </Route>
        <Route path="/bomb">
          <Model scale={0.7} />
        </Route>
      </Float>
      <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85} />
      <Environment preset="city">
        <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={1} intensity={2} />
        <TiltShift2 blur={0.2} />
      </EffectComposer>
      <Rig />
    </Selector>

    </Canvas>

    <ul className="nav">
  <li><Link to="/">knot</Link></li>
  <li><Link to="/torus">torus</Link></li>
  <li><Link to="/bomb">bomb</Link></li>
</ul>



  </>
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




