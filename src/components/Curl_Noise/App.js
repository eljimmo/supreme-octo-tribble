import { 
  CameraShake, 
  Environment, 
  Lightformer, 
  OrbitControls, 
  MeshTransmissionMaterial, 
  useGLTF,
  Stage,
  Grid,  
} from '@react-three/drei'
import { useControls } from 'leva'
import { Particles } from './Particles'
import { Canvas, useLoader } from '@react-three/fiber'
import { LUTCubeLoader } from 'postprocessing'
import { EffectComposer, Bloom, LUT, BrightnessContrast, HueSaturation } from '@react-three/postprocessing'


export default function App() {
  const props = {
    focus: 5.1,
    speed: 12.9,
    aperture: 1.8,
    fov: 50,
    curl: 0.25
  };

  return (
    <>
        <Canvas gl={{ antialias: false }} camera={{ position: [0, 2.5, 5], fov: 35 }}>
        {/* <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={true}> */}

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
        {/* </Stage> */}
      {/* <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} /> */}

            </Canvas>
    </>
  );
}
