import { React, Suspense } from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture, Effects as EffectComposer } from '@react-three/drei'
import Model from '../GEO/Geo'
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import Scenemodel from '../3d_models/Scene_draco'
import { useSphere, Physics } from '@react-three/cannon'
import * as THREE from "three"


import { SSAOPass } from "three-stdlib"

extend({ SSAOPass })

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "red", roughness: 0, envMapIntensity: 0.2, emissive: "#370037" })


function Scene() {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="c4cA8UN.jpg" />}>
        <VideoMaterial url="drei.mp4" />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}



function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
    const texture = useTexture("/cross.jpeg")
    const [ref, api] = useSphere(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)] }))
    useFrame((state) => {
      for (let i = 0; i < 40; i++) {
        // Get current whereabouts of the instanced sphere
        ref.current.getMatrixAt(i, mat)
        // Normalize the position and multiply by a negative force.
        // This is enough to drive it towards the center-point.
        api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-50).toArray(), [0, 0, 0])
      }
    })
    return <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, 40]} geometry={sphereGeometry} material={baubleMaterial} material-map={texture} />
  }
  
  function Pointer() {
    const viewport = useThree((state) => state.viewport)
    const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
    return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
  }
  
  function Effects(props) {
    const { scene, camera } = useThree()
    return (
      <EffectComposer {...props}>
        <sSAOPass args={[scene, camera, 100, 100]} kernelRadius={1.2} kernelSize={0} />
      </EffectComposer>
    )
  }
  

const InfoSection2 = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <Canvas
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 6.5, near: 1, far: 10 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
<ambientLight intensity={1} />
<directionalLight position={[-2, 5, 2]} intensity={1} />
<Suspense fallback={null}>\
  {/* <Model /> */}
  {/* <Scenemodel position={[-3, -0.39, 0.2]} rotation={[0, 2, 0]} scale={0.006} /> */}
  <SombreroSuperficieMath rotation={[0, Math.PI / 1.5, 0]} scale={0.00025} />

</Suspense>
</Canvas>
              {/* <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>

        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
    <ambientLight intensity={0.25} />
    <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
    <directionalLight intensity={5} position={[-10, -10, -10]} color="purple" />
    <Physics gravity={[0, 2, 0]} iterations={10}>
      <Pointer />
      <Clump />
    </Physics>
    {/* <Environment files="/adamsbridge.hdr" /> */}
    <Effects />
    {/* <Sky /> */}
  </Canvas>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;

