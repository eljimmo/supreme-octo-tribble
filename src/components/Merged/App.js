import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, ContactShadows, Environment, Html } from '@react-three/drei'
import Model from './Model'
import './styles.css'


export default function M_App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0.5, 1], fov: 50, near: 0.001 }} onCreated={(state) => (state.gl.shadowMap.autoUpdate = false)}>
      <color attach="background" args={['#171717']} />
      <ambientLight intensity={4} />
      <spotLight position={[1, 5, 3]} angle={0.2} penumbra={1} intensity={3} castShadow shadow-mapSize={2048} />
      <spotLight position={[0, 10, -10]} intensity={2} angle={0.04} penumbra={2} castShadow shadow-mapSize={1024} />
      <Suspense fallback={<Html center className="loading" children="Loading..." />}>
        <Model limit={50} position={[0, -0.0005, 0]} castShadow receiveShadow />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.4, 0]} far={1} width={1.5} height={1.5} blur={0.2} />
        <Environment preset="night" />
        <BakeShadows />
      </Suspense>
      {/* <CameraControls /> */}
    </Canvas>
  )
}
