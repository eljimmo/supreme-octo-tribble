import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, ContactShadows, Environment, Grid, Stage
} from '@react-three/drei'
import { easing } from 'maath'
import { useStore } from './store'
import Model from '../GEO/Geo'

export default function App() {
  return (
    <Canvas eventSource={document.getElementById('root')} eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
            <fog attach="fog" args={['black', 15, 21.5]} />

      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <Environment background preset="sunset" blur={0.8} />
      <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
      <Selector>
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}>
      <Model rotation={[0.3, Math.PI / 1.6, 0]} />
      </Stage>
      <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
      </Selector>
    </Canvas>
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




