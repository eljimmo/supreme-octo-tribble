import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame,  useThree, SoftShadows, CameraControls, extend } from '@react-three/fiber'
import { useGLTF, MeshDistortMaterial, Shadow, Html } from '@react-three/drei'
import state from './state'
import { easing, geometry } from 'maath'

extend(geometry)



function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
      }>
      <div className="annotation" onClick={() => console.log('.')}>
        {children}
      </div>
    </Html>
  )
}




export default function Model(props) {
  const group = useRef()
  const shadow = useRef()
  const { nodes } = useGLTF('/geo.min.glb', true)
  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    group.current.position.y = t / 3
    shadow.current.scale.y = shadow.current.scale.z = 1 + t
    shadow.current.scale.x = (1 + t) * 1.25
    group.current.rotation.x = group.current.rotation.z += 0.005
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse[0] / 2, 0.05)
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, state.mouse[1] / 4, 0.03)
  })
  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh geometry={nodes.geo.geometry} castShadow receiveShadow>
          <MeshDistortMaterial color="#03a9f4" flatShading roughness={1} metalness={0.5} factor={15} speed={5} />
        </mesh>
        {/* <Annotation position={[-4.5, 3.6, -3]}>
            Euphrosyne <span style={{ fontSize: '1.5em' }}>🌖</span>
          </Annotation> */}
        <mesh geometry={nodes.geo.geometry}>
          <meshBasicMaterial wireframe />
        </mesh>
        {/* <Annotation position={[1.75, 3, 2.5]}>
              Thalia <span style={{ fontSize: '1.5em' }}>🌗</span>
            </Annotation> */}

      </group>
      <group position={[1.25, -0.5, 0]}>
      </group>
      <Shadow ref={shadow} opacity={0.3} rotation-x={-Math.PI / 2} position={[0, -1.51, 0]} />
    </group>
  )
}
