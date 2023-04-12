import { React, Suspense, useRef, useState } from 'react';
// import { Button } from '../ButtonElements';
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
import { useAspect, useVideoTexture, Scroll, Image, useIntersect, useTexture, MeshTransmissionMaterial, Float, ContactShadows, Environment, ScrollControls, Effects as EffectComposer } from '@react-three/drei'

import Brainmodel from '../3d_models/brain';
import { OrbitControls } from 'three-stdlib';
import { easing } from 'maath'
import { useStore } from './store'
import { Group, Button, rem } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';




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
  WhiteTopLine,
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
                {/* <Group position="center">
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mantinedev"
        leftIcon={<IconBrandTwitter size={rem(18)} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
            '&:not([data-disabled])': theme.fn.hover({
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </Group> */}
                <Button
              variant="outline"
              // to='home'
              // smooth={true}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="/Demo"
            >
              I am still in Development.
            </Button>
                {/* <BtnWrap>
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
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Canvas dpr={[1.5, 2]} linear shadows>

<ambientLight intensity={1} />

<directionalLight position={[-2, 5, 2]} intensity={1} />
<Selector>
<Float>

  <Brainmodel position={[0, -2, 0]} rotation={[0.3, Math.PI / 1.6, 0]} scale={0.75} />
  </Float>

</Selector>

</Canvas>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection3;

