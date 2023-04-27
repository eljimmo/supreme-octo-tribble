import * as THREE from 'three'
import { Suspense, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, useGLTF, AdaptiveDpr, Html, Cylinder } from '@react-three/drei'
import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'
import { RectAreaLightUniformsLib, FlakesTexture } from 'three-stdlib'
import Typewriter from 'typewriter-effect';



// This demo shows how to use react-three-fibers regression system
// When call call state.regress() nothing really will happen, all it
// does is setting a flag. But parts of the scene graph can now respond
// to it in whatever way the want. Here we cause regression on mouse-move
// and scale the pixel ratio as well as skipping some post-processing effects.

RectAreaLightUniformsLib.init()
THREE.Vector2.prototype.equals = function (v, epsilon = 0.001) {
  return Math.abs(v.x - this.x) < epsilon && Math.abs(v.y - this.y) < epsilon
}

function useLerpedMouse() {
  const mouse = useThree((state) => state.mouse)
  const lerped = useRef(mouse.clone())
  const previous = new THREE.Vector2()
  useFrame((state) => {
    previous.copy(lerped.current)
    lerped.current.lerp(mouse, 0.1)
    // Regress system when the mouse is moved
    if (!previous.equals(lerped.current)) state.performance.regress()
  })
  return lerped
}


export default function YBot(props) {
    const ref = useRef()
    const [texture] = useState(() => new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping))
    const { nodes, materials } = useGLTF('/untitled-draco2.glb')
    const mouse = useLerpedMouse()
    useFrame((state) => {
      ref.current.rotation.y = (mouse.current.x * Math.PI) / 10
      ref.current.rotation.x = (mouse.current.y * Math.PI) / 200
    })
    return (
      <group ref={ref} dispose={null} {...props}>
        <mesh castShadow receiveShadow geometry={nodes.Alpha_Surface.geometry}>
          <meshStandardMaterial
            metalness={0.4}
            roughness={0.2}
            color={materials.Alpha_Body_MAT.color}
            normalMap={texture}
            normalMap-repeat={[35, 35]}
            normalScale={[0.15, 0.15]}
          />
        </mesh>
        <mesh castShadow geometry={nodes.Alpha_Joints.geometry}>
          <meshStandardMaterial metalness={1} roughness={0.1} color={materials.Alpha_Joints_MAT.color} />
        </mesh>
      </group>
    )
  }
  