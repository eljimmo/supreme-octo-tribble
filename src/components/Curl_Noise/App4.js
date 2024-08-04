import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraShake, OrbitControls, Text } from '@react-three/drei';
// import Model2 from '../GEO/GeoWithText';
import Model2A from '../GEO/TextGeo';



function TextRing({ radius = 1.5, text = "Data Analytics", segments = 32 }) {
  const textArray = useMemo(() => text.split(''), [text]);

  return (
    <>
      {textArray.map((char, index) => {
        const angle = (index / segments) * Math.PI * 2;
        return (
          <Text
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              0
            ]}
            rotation={[0, 0, angle + Math.PI / 2]}
            fontSize={0.1}
            color="#FFFFFF"
          >
            {char}
          </Text>
        );
      })}
    </>
  );
}

export default function App4() {
  const props = {
    focus: 5.1,
    speed: 50,
    aperture: 1.0,
    fov: 75,
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
          rollFrequency={0.1}
          maxRoll={0.5}
          intensity={0.2}
        />
        <Model2A />
        {/* <OrbitControls /> */}
        {/* <Parti {...props} /> */}
      </Canvas>
    </>
  );
}
