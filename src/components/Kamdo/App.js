import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, Grid, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
import Model from '../GEO/Geo'
import Ybot from '../Perfomance/ybot';
// import InstancedModel from '../Merged/Model';


export default function K_App() {
  return (
    <Canvas eventSource={document.getElementById('root')} eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
      <fog attach="fog" args={['black', 15, 21.5]} />


      {/* <InstancedModel rotation={[0, Math.PI, 0]} position={[-4.9, -0.85, -2]} scale={[]} /> */}



      <Ybot rotation={[0, Math.PI, 0]} position={[2.0, -2, -3]} />


        <Kamdo rotation={[0, Math.PI, 0]} position={[-2.5, -1.85, 0]} />


        <Model rotation={[0, Math.PI, 0]} position={[4, 0.50, -3]} />

      <Grid renderOrder={-1} position={[2, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
      {/* <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.8} />
    </Canvas>
  )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.0 s2wt_kamdo_industrial_divinities.glb --transform --simplify
Author: Hansalex (https://sketchfab.com/Hansalex)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/s2wt-kamdo-industrial-divinities-f503b70ac05e49a38c81100d71599a1b
Title: S2WT "Kamdo" (Industrial Divinities)
*/

function Kamdo(props) {
  const head = useRef()
  const stripe = useRef()
  const light = useRef()
  const { nodes, materials } = useGLTF('/s2wt_kamdo_industrial_divinities-transformed.glb')
  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2
    stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 50)
    easing.dampE(head.current.rotation, [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0], 0.4, delta)
    light.current.intensity = 1 + t * 2
  })
  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes.body001.geometry} material={materials.Body} />
      <group ref={head}>
        <mesh castShadow receiveShadow geometry={nodes.head001.geometry} material={materials.Head} />
        <mesh castShadow receiveShadow geometry={nodes.stripe001.geometry}>
          <meshBasicMaterial ref={stripe} toneMapped={false} />
          <pointLight ref={light} intensity={1} color={[10, 2, 5]} distance={2.5} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/s2wt_kamdo_industrial_divinities-transformed.glb')
