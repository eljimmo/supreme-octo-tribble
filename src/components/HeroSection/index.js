import React, { Suspense } from 'react';
import Video from './videos/iStock_optic.mp4';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  VideoBg,
  

  
} from './HeroElements';
import { Canvas, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
// import * as THREE from 'three'
import Typewriter from 'typewriter-effect';



function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, 0]}
      lineHeight={0.8}
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}






export default function HeroSection() {

  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };
  return (
    <HeroContainer id='home'>



      <HeroBg>


      <div style={{ color: 'white', position: [0, 0, 0] }}>

<Typewriter
options={{
strings: ['Creating Intelligence', 'Creating Agency', 'Creating Consciousness'],
autoStart: true,
loop: true,
}}
/>

</div>


        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />




      </HeroBg>



      <HeroContent>

        {/* <Canvas 
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 53.5, near: 1, far: 10 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
      <Experience />
      </Canvas> */}

     
      {/* <Frosted_App/> */}


      <Canvas
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 53.5, near: 1, far: 40 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>

<Caption>LEIBNIZ</Caption>




<ambientLight intensity={1} />
<directionalLight position={[-2, 5, 2]} intensity={1} />
<Suspense fallback={null}>


</Suspense>
</Canvas>

</HeroContent>




   </HeroContainer>




  );
}



