import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraShake, OrbitControls, Text } from '@react-three/drei';
import TextRing from './TextRing';


function Geo() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; // Slower rotation
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#1565C0" />
      <TextRing />
    </mesh>
  );
}

export default function App3() {
  const props = {
    focus: 5.1,
    speed: 100,
    aperture: 1.8,
    fov: 50,
    curl: 0.25
  };

  return (
    <>
      <Canvas gl={{ antialias: false }} camera={{ position: [0, 2.5, 5], fov: 35 }}>
        <CameraShake
          yawFrequency={1}
          maxYaw={0.05}
          pitchFrequency={1}
          maxPitch={0.05}
          rollFrequency={0.5}
          maxRoll={0.5}
          intensity={0.2}
        />
        <Geo />
        {/* <OrbitControls /> */}
        {/* <Parti {...props} /> */}
      </Canvas>
    </>
  );
}
