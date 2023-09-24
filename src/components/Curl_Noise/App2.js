import { CameraShake } from '@react-three/drei';
import { Parti } from './Part';
import { Canvas } from '@react-three/fiber';

export default function App2() {
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
        <Parti {...props} />
      </Canvas>
    </>
  );
}
