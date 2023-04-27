import React, { Suspense } from 'react';
import styled, { keyframes } from "styled-components";
import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
} from './HeroElements';
import { Card, Image, Group, Badge, Text, createStyles, Center, Button, rem } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber"
import { useTexture,
  shaderMaterial,
  useAspect, 
  useVideoTexture,
  OrbitControls,
  Effects,
  Environment,
  Html,
  Stage
 } from "@react-three/drei"
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import { LUTPass, LUTCubeLoader } from 'three-stdlib'
import a15 from "./10.jpg";


extend({ LUTPass })



function Grading() {
  const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
  return (
    <Effects>
      <lUTPass lut={texture3D} intensity={0.75} />
    </Effects>
  )
}


export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
)

extend({ ImageFadeMaterial })

function FadingImage() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useTexture(["/bluesight.jpg", "/crosshair.jpg", "/10.jpg"])
  const [hovered, setHover] = useState(false)
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
  })
  return (
    <mesh onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
      <planeGeometry />
      <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
    </mesh>
  )
}



const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    imageSection: {
      padding: theme.spacing.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: rem(-0.25),
      textTransform: 'uppercase',
    },
  
    section: {
      padding: theme.spacing.md,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    icon: {
      marginRight: rem(5),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
  }));
  
  const mockdata = [
    { label: '4 passengers', icon: IconUsers },
    { label: '100 km/h in 4 seconds', icon: IconGauge },
    { label: 'Automatic gearbox', icon: IconManualGearbox },
    { label: 'Electric', icon: IconGasStation },
  ];
  
  export function FeaturesCard() {
    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
      <Center key={feature.label}>
        <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
        <Text size="xs">{feature.label}</Text>
      </Center>
    ));
  
    return (
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
          {/* <Canvas camera={{ position: [0, 0, 2], fov: 5 }}>
      <FadingImage />
    </Canvas>   */}
        </Card.Section>
  
        <Group position="apart" mt="md">
          <div>
            <Text fw={500}>Tesla Model S</Text>
            <Text fz="xs" c="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>
  
        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            Basic configuration
          </Text>
  
          <Group spacing={8} mb={-8}>
            {features}
          </Group>
        </Card.Section>
  
        <Card.Section className={classes.section}>
          <Group spacing={30}>
            <div>
              <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                $168.00
              </Text>
              <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                per day
              </Text>
            </div>
  
            <Button radius="xl" style={{ flex: 1 }}>
              Rent now
            </Button>
          </Group>
        </Card.Section>
      </Card>
    );
  }
  
  
  





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
  
  


  function Sphere(props) {
    const texture = useTexture('/Nebula.jpg')
    return (
      <mesh {...props}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
      </mesh>
    )
  }
  


  const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  color: white;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;
  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--white);
}
50%{
    box-shadow: 2px 2px 25px var(--white);
}
100%{
    box-shadow: 1px 1px 10px var(--white);
}
`;



const TText = styled.div`
  font-size: var(--fontxs);
  color: white;
  width: 30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }
  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }
    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;


const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;
const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const TText2 = styled.div`
  font-size: var(--fontxs);
  color: white;
  width: 30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }
  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-right: 1rem;
    }
    & > *:last-child {
      align-self: flex-start;
      padding-right: 0;
      padding-left: 1rem;
      text-align: right;
    }
  }
`;


const Processor = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 48em) {
    display: none;
  }
`;

function HeroSection_3() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>

        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />





      </HeroBg>
      <HeroContent>
      <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>

      <ambientLight />
      <spotLight intensity={1.5} angle={4.2} penumbra={1} position={[5, 15, 10]} />
      <Environment preset="forest" />

        <Suspense fallback={<Html center className="loading" children="Loading..." />}>

        <FadingImage />
          <Sphere 
            scale={[2.1, 2.1, 2.1]}
            rotation={[0, -0.2, 0]} />
                <Grading />

       </Suspense>

       <OrbitControls makeDefault autoRotate />

      </Canvas>
      

      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection_3;
