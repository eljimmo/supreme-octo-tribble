import React, { useRef, useMemo, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame, useThree, SoftShadows, CameraControls, extend } from "@react-three/fiber";

import * as THREE from "three";
import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
import { easing, geometry } from 'maath'

extend(geometry)


function Annotation({ children, position }) {
  return (
    <Html position={position}>
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}




export function Paradox(props) {
  const group = useRef();
  const shadow = useRef();
  const annotationGroup = useRef(); // Create a ref for the annotation group
  const { nodes, materials } = useGLTF("/paradox_abstract_art_of_python.glb");
  const { clock, mouse } = useThree();

  useFrame(() => {
    const t = (1 + Math.sin(clock.elapsedTime * 0.25)) / 2; // Reduce the speed by changing the multiplier
    group.current.position.y = t / 10; // Reduce the speed by changing the divisor
    shadow.current.scale.y = shadow.current.scale.z = 1 + t;
    shadow.current.scale.x = (1 + t) * 1.25;
    group.current.rotation.x = group.current.rotation.z += 0.0005; // Reduce the speed by changing the increment
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      (mouse.x / 2) * 0.2, // Reduce the speed by changing the multiplier
      0.005 // Reduce the speed by changing the increment
    );
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      (mouse.y / 4) * 0.2, // Reduce the speed by changing the multiplier
      0.0025 // Reduce the speed by changing the increment
    );
  });
  

  materials.Root.color = new THREE.Color(0, 0, 1); // Blue color

  
    return (

      <group ref={group} {...props} dispose={null}>



    <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.087, -0.072]}
            ref={shadow} // Assign the ref here
  
          />

            
            {/* <Annotation>
              Learning
            </Annotation>
 */}

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 0.175, -0.143]}
            ref={shadow} // Assign the ref here
  
          />


          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.262, -0.215]}
            ref={shadow} // Assign the ref here
  
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_0.geometry}
            material={materials.Material}
            rotation={[1.571, Math.PI / 9, -0.286]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.436, -0.358]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, Math.PI / 6, -0.429]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.611, -0.501]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 0.698, -0.572]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, Math.PI / 4, -0.644]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 0.873, -0.716]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_0.geometry}
            material={materials.Root}
            rotation={[1.571, 0.96, -0.787]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, Math.PI / 3, -0.859]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 1.134, -0.93]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_0.geometry}
            material={materials.Material}
            rotation={[1.571, 1.222, -1.002]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 1.309, -1.073]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_0.geometry}
            material={materials.Material}
            rotation={[1.571, 1.396, -1.145]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_0.geometry}
            material={materials.Root}
            rotation={[1.571, 1.484, -1.216]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_0.geometry}
            material={materials.Material}
            rotation={[0.283, Math.PI / 2, 0]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, 1.484, 1.782]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane020_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 1.396, 1.71]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 1.309, 1.639]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 1.222, 1.567]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 1.134, 1.496]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, Math.PI / 3, 1.424]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, 0.96, 1.353]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026_0.geometry}
            material={materials.Material}
            rotation={[-1.571, 0.873, 1.281]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, Math.PI / 4, 1.21]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028_0.geometry}
            material={materials.Material}
            rotation={[-1.571, 0.698, 1.138]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 0.611, 1.066]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane030_0.geometry}
            material={materials.Material}
            rotation={[-1.571, Math.PI / 6, 0.995]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane031_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, 0.436, 0.923]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane032_0.geometry}
            material={materials.Material}
            rotation={[-1.571, Math.PI / 9, 0.852]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 0.262, 0.78]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034_0.geometry}
            material={materials.Material}
            rotation={[-1.571, 0.175, 0.709]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, 0.087, 0.637]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 0, 0.565]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane038_0.geometry}
            material={materials.Material}
            rotation={[-1.571, -0.175, 0.422]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane039_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, -0.262, 0.351]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, -0.349, 0.279]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, -0.436, 0.208]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane042_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, -0.524, 0.136]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane043_0.geometry}
            material={materials.Root}
            rotation={[-1.571, -0.611, 0.065]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane044_0.geometry}
            material={materials.Material}
            rotation={[-1.571, -0.698, -0.007]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane045_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, -Math.PI / 4, -0.079]}
            ref={shadow} // Assign the ref here
  
            />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane046_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, -0.873, -0.15]}
            ref={shadow} // Assign the ref here
  
            />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane047_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, -0.96, -0.222]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane048_0.geometry}
            material={materials.Material}
            rotation={[-1.571, -1.047, -0.293]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane049_0.geometry}
            material={materials.Root}
            rotation={[-1.571, -1.134, -0.365]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane050_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, -1.222, -0.436]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane051_0.geometry}
            material={materials.Root}
            rotation={[-1.571, -1.309, -0.508]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane052_0.geometry}
            material={materials.Material}
            rotation={[-1.571, -1.396, -0.579]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane053_0.geometry}
            material={materials.Root}
            rotation={[-1.571, -1.484, -0.651]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane054_0.geometry}
            material={materials.Material}
            rotation={[-0.848, -Math.PI / 2, 0]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane055_0.geometry}
            material={materials.Root}
            rotation={[1.571, -1.484, 2.347]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_0.geometry}
            material={materials.Material}
            rotation={[1.571, -1.396, 2.276]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_0.geometry}
            material={materials.Root}
            rotation={[1.571, -1.309, 2.204]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane058_0.geometry}
            material={materials.Material}
            rotation={[1.571, -1.222, 2.133]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane059_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, -1.134, 2.061]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane060_0.geometry}
            material={materials.Material}
            rotation={[1.571, -Math.PI / 3, 1.99]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane061_0.geometry}
            material={materials.Root}
            rotation={[1.571, -0.96, 1.918]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane062_0.geometry}
            material={materials.Material}
            rotation={[1.571, -0.873, 1.847]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane063_0.geometry}
            material={materials.Root}
            rotation={[1.571, -Math.PI / 4, 1.775]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane064_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, -0.698, 1.703]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane065_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, -0.611, 1.632]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane066_0.geometry}
            material={materials.Material}
            rotation={[1.571, -Math.PI / 6, 1.56]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane067_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, -0.436, 1.489]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane068_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, -0.349, 1.417]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane069_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, -0.262, 1.346]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane037_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, -0.087, 0.494]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane070_0.geometry}
            material={materials.Material}
            rotation={[1.571, -0.175, 1.274]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane071_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, -0.087, 1.203]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane072_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 0, 1.131]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane073_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.087, 1.059]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane074_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 0.175, 0.988]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane075_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.262, 0.916]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane076_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, Math.PI / 9, 0.845]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane077_0.geometry}
            material={materials.Root}
            rotation={[1.571, 0.436, 0.773]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, Math.PI / 6, 0.702]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane079_0.geometry}
            material={materials.Root}
            rotation={[1.571, 0.611, 0.63]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane080_0.geometry}
            material={materials.Material}
            rotation={[1.571, 0.698, 0.558]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane081_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, Math.PI / 4, 0.487]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane082_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 0.873, 0.415]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane083_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 0.96, 0.344]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane084_0.geometry}
            material={materials.Material}
            rotation={[1.571, Math.PI / 3, 0.272]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane085_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 1.134, 0.201]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 1.222, 0.129]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_0.geometry}
            material={materials.Root}
            rotation={[Math.PI / 2, 1.309, 0.058]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane088_0.geometry}
            material={materials.Material}
            rotation={[Math.PI / 2, 1.396, -0.014]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane089_0.geometry}
            material={materials.Root}
            rotation={[1.571, 1.484, -0.086]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane090_0.geometry}
            material={materials.Material}
            rotation={[1.414, Math.PI / 2, 0]}
            ref={shadow} // Assign the ref here
            
          />
                        {/* <Annotation position={[1, 0, 0]}>
                        Investigation 
                        </Annotation> */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane091_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 1.483, 2.913]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane092_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 1.396, 2.841]}
            ref={shadow} // Assign the ref here
  
          />

            {/* <Annotation position={[1.5, 0, 0]}>
              Intelligence 
            </Annotation> */}


          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane093_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 1.309, 2.77]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane094_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, 1.222, 2.698]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane095_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 1.134, 2.627]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane096_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, Math.PI / 3, 2.555]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane097_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, 0.96, 2.484]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane098_0.geometry}
            material={materials.Root}
            rotation={[-1.571, 0.873, 2.412]}
            ref={shadow} // Assign the ref here
  
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane099_0.geometry}
            material={materials.Root}
            rotation={[-Math.PI / 2, Math.PI / 4, 2.34]}
            ref={shadow} // Assign the ref here
  
          />
            {/* {annotationsGroup} */}

          </group>

       <EffectComposer>
          {/* Bloom effect */}
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.4} intensity={1.5} />
  
          {/* Glitch effect */}
          {/* <Glitch active={true} ratio={0.85} /> */}
        </EffectComposer>
  
          </group>
      );
  }
  
  
  useGLTF.preload("/paradox_abstract_art_of_python.glb");  