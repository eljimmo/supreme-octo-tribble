import React from 'react';
import {
  ServicesContainer,
  // ServicesContainer2,
  ServicesH1,
  ServicesWrapper,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP
} from './ServicesElements';
import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend,
  useFrame, 

} from "@react-three/fiber"
import { useTexture, shaderMaterial, 

} from "@react-three/drei"
import { Card, 
  Group,
  Badge, 
  Text, 
  createStyles, Center, 
  Button, 
  rem,
  SimpleGrid,
Title,
TextInput,
Textarea,
MantineProvider,
Container,
Accordion,
} from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';







const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';



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
  { label: '4 AI Models', icon: IconUsers },
  { label: 'All Data Sources', icon: IconGauge },
  { label: 'Lagged Data Modeling', icon: IconManualGearbox },
  { label: 'Dashboard for Stock Analysis', icon: IconGasStation },
];

const mockdata2 = [
  { label: 'Unlimited AI Models', icon: IconUsers },
  { label: 'All Data Sources + custom data', icon: IconGauge },
  { label: 'Live Data Modeling', icon: IconManualGearbox },
  { label: 'Dashboard for Stock Analysis + AI Analysis', icon: IconGasStation },
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
                <Canvas camera={{ position: [0, 0, 2], fov: 5 }}>
      <FadingImage />
    </Canvas>  
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>
            Leibniz Analytica Modeling
           </Text>
          <Text fz="xs" c="dimmed">
            Over 100+ Algorithms
          </Text>
        </div>
        <Badge variant="outline">25% off for Annual Subscription</Badge>
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
LOREUM IPSUM
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              Per Month
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            subscribe Now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}



export function FeaturesCard2() {
  const { classes } = useStyles();
  const features = mockdata2.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
                <Canvas camera={{ position: [0, 0, 2], fov: 5 }}>
      <FadingImage />
    </Canvas>  
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>Leibniz Analytica AI & Modeling </Text>
          <Text fz="xs" c="dimmed">
            Over 100+ Algorithms & 25 AI Models
          </Text>
        </div>
        <Badge variant="outline">25% off for Annual Subscription</Badge>
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
            LOREUM IPSUM
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              Per Month
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            subscribe Now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}





export function ContactUs() {
  const { classes } = useStyles();


  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

  
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want AI to help my trading."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}










export function FaqWithBg() {
  const { classes } = useStyles();
  return (
    <MantineProvider inherit theme={{ colorScheme: 'light' }}>
      <div className={classes.wrapper}>
        <Container size="sm">
          <Title align="center" className={classes.title}>
            Frequently Asked Questions
          </Title>

          <Accordion
            chevronPosition="right"
            defaultValue="reset-password"
            chevronSize={50}
            variant="separated"
            disableChevronRotation
   
          >
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>How can I reset my password?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>Can I create more that one account?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>What payment systems to you work with?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </MantineProvider>
  );
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
  const [texture1, texture2, dispTexture] = useTexture(["/bluesight.jpg", "/crosshair.jpg", "/board.jpg"])
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




export default function Services () {

   return (
    <ServicesContainer id='services'>
     




      <ServicesH1>Algorithmic Stock Trading Architexture</ServicesH1>
      
      <ServicesWrapper>
      <FeaturesCard/>

      <FeaturesCard2/>
      <FeaturesCard/>



      {/* <ServicesCard>

          <ServicesP>
            A comprehensive financial modeling structure enables investors to capture a more holistic valuation towards determining navigation in volatile risk field.
          </ServicesP>
          </ServicesCard> */}


   

          {/* <ServicesCard>

          <ServicesP>
            By minimizing the variable search space, & subsequent effect, a process of data optimization is created to find correlational traces in data.
          </ServicesP>
          </ServicesCard> */}


          {/* <ServicesH2>Unleash the power of Artificial Intelligence Algorithms to analyze financial data.</ServicesH2> */}
          {/* <ServicesCard>
          <ServicesP>
            Created by the Leibniz Analytica Team, data provided by IEX Cloud, graphing library provided by Plotly Dash.
          </ServicesP>
        </ServicesCard> */}



      </ServicesWrapper>
    </ServicesContainer>
  );
};


