import { CameraShake, Environment, Lightformer, OrbitControls, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Particles } from './Particles'
import { Canvas, useLoader } from '@react-three/fiber'
import { LUTCubeLoader } from 'postprocessing'
import { EffectComposer, Bloom, LUT, BrightnessContrast, HueSaturation } from '@react-three/postprocessing'


export default function App() {
  const props = {
    focus: 5.1,
    speed: 42.9,
    aperture: 5.8,
    fov: 50,
    curl: 0.65
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
      <Particles {...props} />
            </Canvas>
    </>
  );
}
