import { CameraShake, Environment, Lightformer, OrbitControls, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Particles } from './Particles'
import { Canvas, useLoader } from '@react-three/fiber'
import { LUTCubeLoader } from 'postprocessing'
import { EffectComposer, Bloom, LUT, BrightnessContrast, HueSaturation } from '@react-three/postprocessing'


export default function App() {
  const props = useControls({
    focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
    speed: { value: 100, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 50, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 }
  })
  return (
    <>
        <Canvas gl={{ antialias: false }} camera={{ position: [0, 2.5, 5], fov: 35 }}>
        {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr" resolution={512}> */}

      {/* <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} /> */}
      <CameraShake yawFrequency={1} maxYaw={0.05} pitchFrequency={1} maxPitch={0.05} rollFrequency={0.5} maxRoll={0.5} intensity={0.2} />
      <Particles {...props} />
      {/* </Environment> */}

      </Canvas>

    </>
  )
}
