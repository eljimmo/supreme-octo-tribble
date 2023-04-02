import { React, Suspense, useRef } from 'react';
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
import { Canvas, useFrame } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture, MeshTransmissionMaterial, ContactShadows, Environment } from '@react-three/drei'
import Model from '../GEO/Geo'
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import Scenemodel from '../3d_models/Scene_draco'
import Brainmodel from '../3d_models/brain';
import { OrbitControls } from 'three-stdlib';
import { Physics, useSphere } from "@react-three/cannon"
import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'
import { easing } from 'maath'



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


const store = proxy({ open: false })
export const useStore = () => useProxy(store)


function Selector({ children }) {
  const ref = useRef()
  const store = useStore()
  useFrame(({ viewport, camera, pointer }, delta) => {
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3])
    easing.damp3(ref.current.position, [(pointer.x * width) / 2, (pointer.y * height) / 2, 3], store.open ? 0 : 0.1, delta)
    easing.damp3(ref.current.scale, store.open ? 4 : 0.01, store.open ? 0.5 : 0.2, delta)
    easing.dampC(ref.current.material.color, store.open ? '#f0f0f0' : '#ccc', 0.1, delta)
  })
  return (
    <>
      <mesh ref={ref}>
        <circleGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} />
      </mesh>
      <group
        onPointerOver={() => (store.open = true)}
        onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        onPointerUp={() => (store.open = false)}>
        {children}
      </group>
    </>
  )
}


const InfoSection3 = ({
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
            <Canvas dpr={[1.5, 2]} linear shadows>

            {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}> */}


<ambientLight intensity={1} />

<directionalLight position={[-2, 5, 2]} intensity={1} />
{/* <Suspense fallback={null}> */}
<Selector>

  <Brainmodel position={[0, 0, 0]} rotation={[0, 2, 0]} scale={1.90} />
</Selector>
{/* </Suspense> */}

</Canvas>

            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection3;

