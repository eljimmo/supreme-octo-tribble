
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
 
export default function  Brainmodel(props) {
  const { nodes, materials } = useGLTF("/modeldraco.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["left_08_-_Default_0_Front_08_-_Default_0"].geometry
              }
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["right_08_-_Default_0_Front_08_-_Default_0"].geometry
              }
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["centr_08_-_Default_0_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["left_08_-_Default_0001_08_-_Default001_0"].geometry
              }
              material={materials["08_-_Default.001"]}
            />
          </group>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["right_08_-_Default_0001_08_-_Default001_0"].geometry
              }
              material={materials["08_-_Default.001"]}
            />
          </group>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["right_08_-_Default_0_Back_08_-_Default_0"].geometry
              }
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[0, 209.81, 0]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["left_08_-_Default_0_Back_08_-_Default_0"].geometry
              }
              material={materials["08_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/modeldraco.gltf");