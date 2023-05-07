// import gsap from "gsap";
// import React from "react";
// import { useState, Suspense, useMemo } from "react";
// import * as THREE from "three";

// import { useLayoutEffect } from "react";
// import { useRef } from "react";
// import styled from "styled-components";
// import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber";
// import { useTexture,
//   shaderMaterial,
//   useAspect, 
//   useVideoTexture,
//   OrbitControls,
//   Effects,
//   RenderTexture,
//   PerspectiveCamera,
//   Environment,
//   PerformanceMonitor,
//   Html,
//   Stage,
//   useGLTF,
//   SoftShadows,
//   Text,
//   RoundedBox,
//   Cylinder
//  } from "@react-three/drei";
//  import { LUTPass, LUTCubeLoader } from 'three-stdlib';
//  import { easing, geometry } from 'maath'
//  import './components.css'
//  import {
//   HeroContainer,
//   HeroBg,
//   VideoBg,
//   HeroContent,
// } from '../components/HeroSection/HeroElements';



//  extend(geometry)


//  extend({ LUTPass })



// // function Model(props) {
// //   const group = useRef()
// //   const light = useRef()
// //   const { nodes } = useGLTF('/graces-draco.glb')
// //   useFrame((state, delta) => {
// //     easing.dampE(group.current.rotation, [0, -state.pointer.x * (Math.PI / 10), 0], 1.5, delta)
// //     easing.damp3(group.current.position, [0, -5.5, 1 - Math.abs(state.pointer.x)], 1, delta)
// //     easing.damp3(light.current.position, [state.pointer.x * 12, 0, 8 + state.pointer.y * 4], 0.2, delta)
// //   })
// //   return (
// //     <group ref={group} {...props}>
// //       <mesh castShadow receiveShadow geometry={nodes.Node_3.geometry} rotation={[-Math.PI / 2, 0, 0]} scale={0.2} dispose={null}>
// //         <meshLambertMaterial color="#404044" />
// //       </mesh>
// //       {/* <Annotation position={[1.75, 3, 2.5]}>
// //         NeuroEvolution <span style={{ fontSize: '1.5em' }}></span>
// //       </Annotation> */}
// //       {/* <Annotation position={[-4.5, 3.6, -3]}>
// //         Markov Chains <span style={{ fontSize: '1.5em' }}></span>
// //       </Annotation> */}
// // <TextRing
// //           position={[3, 7.5, 0]}
// //           rotation={[0, 0, 0.15]}
// //           color={'red'}
// //           fontSizing={390}
// //           repeatCount={4}>
// //           AGENCY
// //         </TextRing>
// //         <TextRing
// //           position={[-.50, 9.0, 0]}
// //           rotation={[0, 0, 0.15]}
// //           color={'pink'}
// //           fontSizing={390}
// //           repeatCount={4}>
// //           EVOLUTION
// //         </TextRing>
// //         <TextRing
// //           position={[-3.0, 7.50, 1]}
// //           rotation={[0, 0, 0.15]}
// //           color={'green'}
// //           fontSizing={390}
// //           repeatCount={7}>
// //           MEMORY
// //         </TextRing>
// //       {/* <Annotation position={[1.5, 8, -3]}>
// //         <span style={{ fontSize: '1.5em' }}></span> Long Short-Term Memory
// //       </Annotation> */}
// //       <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001}>
// //         <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
// //       </spotLight>
// //     </group>
// //   )
// // }

// function Annotation({ children, ...props }) {
//   return (
//     <Html
//       {...props}
//       transform
//       occlude="blending"
//       geometry={
//         /** The geometry is optional, it allows you to use any shape.
//          *  By default it would be a plane. We need round edges here ...
//          */
//         <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
//       }>
//       <div className="annotation">{children}</div>
//     </Html>
//   )
// }

















//  function Grading() {
//   const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
//   return (
//     <Effects>
//       <lUTPass lut={texture3D} intensity={0.75} />
//     </Effects>
//   )
// }


//  export const ImageFadeMaterial = shaderMaterial(
//   {
//     effectFactor: 1.2,
//     dispFactor: 0,
//     tex: undefined,
//     tex2: undefined,
//     disp: undefined
//   },
//   ` varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//     }`,
//   ` varying vec2 vUv;
//     uniform sampler2D tex;
//     uniform sampler2D tex2;
//     uniform sampler2D disp;
//     uniform float _rot;
//     uniform float dispFactor;
//     uniform float effectFactor;
//     void main() {
//       vec2 uv = vUv;
//       vec4 disp = texture2D(disp, uv);
//       vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
//       vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
//       vec4 _texture = texture2D(tex, distortedPosition);
//       vec4 _texture2 = texture2D(tex2, distortedPosition2);
//       vec4 finalTexture = mix(_texture, _texture2, dispFactor);
//       gl_FragColor = finalTexture;
//       #include <tonemapping_fragment>
//       #include <encodings_fragment>
//     }`
// )

// extend({ ImageFadeMaterial })

// function FadingImage() {
//   const ref = useRef()
//   const [texture1, texture2, dispTexture] = useTexture(["/bluesight.jpg", "/crosshair.jpg", "/10.jpg"])
//   const [hovered, setHover] = useState(false)
//   useFrame(() => {
//     ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
//   })
//   return (
//     <mesh onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
//       <planeGeometry />
//       <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
//     </mesh>
//   )
// }



// function Sphere(props) {
//   const texture = useTexture('/Nebula.jpg')
//   const light = useRef()

//   const textRef = useRef()
//   useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
//   return (
//     <mesh {...props}>
//       <sphereGeometry args={[1, 64, 64]} />

//       <meshStandardMaterial>
        
//         <RenderTexture attach="map" anisotropy={1}>
          
//           <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />


//           <color attach="background" args={['transparent']} />
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} />

//       <Text ref={textRef} fontSize={1} color="#fafafc">
//             Leibniz
//           </Text>


//         </RenderTexture>
//       </meshStandardMaterial>

//       <Annotation position={[1.75, 3, 2.5]}>
//         Thalia <span style={{ fontSize: '1.5em' }}>🌗</span>
//       </Annotation>

//       <Annotation position={[-4.5, 3.6, -3]}>
//         Euphrosyne <span style={{ fontSize: '1.5em' }}>🌖</span>
//       </Annotation>


//       <Annotation position={[1.5, 8, -3]}>
//         <span style={{ fontSize: '1.5em' }}>🌕</span> Aglaia
//       </Annotation>


//       <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001}>

//       <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
//       </spotLight>



//       <meshPhysicalMaterial map={texture} clearcoat={0} clearcoatRoughness={0} roughness={0} metalness={0} />
//     </mesh>
//   )
// }







// const pointSize = 4

// function ccccc(children, color, fontSizing, uvWidth) {
//   const fontSize = fontSizing

//   if (uvWidth == null) {
//     uvWidth = 2048
//   }

//   const canvas = document.createElement('canvas')
//   canvas.width = uvWidth
//   canvas.height = uvWidth / pointSize
//   const context = canvas.getContext('2d')

//   context.fillStyle = 'transparent'
//   context.fillRect(0, 0, canvas.width, canvas.height)

//   context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
//   context.textAlign = 'center'
//   context.textBaseline = 'middle'
//   context.fillStyle = color

//   context.lineWidth = 2

//   //////////////// LetterSpacing
//   // const ctext = children.split('').join(String.fromCharCode(8202))
//   const ctext = children

//   context.fillText(ctext, canvas.width / 2, canvas.height / 2)

//   return canvas
// }

// export const TextRing = ({ children, position, color, fontSizing, repeatCount, rotation, colorBack, uvWidth }) => {
//   const [hovered, setHover] = useState(false)

//   if (rotation == null) {
//     rotation = [0, 0, 0]
//   }

//   const canvas = useMemo(() => {
//     return ccccc(children, color, fontSizing, uvWidth)
//   }, [children, color, fontSizing, uvWidth])

//   const backCanvas = useMemo(() => {
//     return ccccc(children, color, fontSizing, uvWidth)
//   }, [children, color, fontSizing, uvWidth])

//   const texture = useRef()
//   const texture2 = useRef()
//   useFrame(({ clock }) => {
//     texture.current.offset.x = clock.getElapsedTime() / 2
//     texture2.current.offset.x = clock.getElapsedTime() / 2
//   })

//   const cylArgs = [1, 1, 1 / pointSize, 64, 1, true]

//   //////////// Click isMobile ///////////
//   // const MobileClicker = () => {
//   //   setColor(colorBack)
//   //   setHover(true)
//   //   setTimeout(() => {
//   //     setHover(false)
//   //   }, 100)

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setHover(false)
//   //   }, 100)
//   //   return () => {
//   //     clearTimeout(timer)
//   //   }
//   // }, [])
//   // }
//   // <group
//   //     rotation-y={Math.PI / 4}
//   //     scale={hovered ? [1.15, 1.15, 1.15] : [1, 1, 1]}
//   //     rotation={rotation}
//   //     position={position}
//   //     onPointerDown={(e) => MobileClicker()}>
//   ////////////////////////////////////////

//   return (
//     <group
//       rotation-y={Math.PI / 4}
//       scale={hovered ? [1.15, 1.15, 1.15] : [1, 1, 1]}
//       rotation={rotation}
//       position={position}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}>
//       <Cylinder args={cylArgs} side={THREE.FrontSide}>
//         <meshStandardMaterial transparent attach="material">
//           {/* <meshStandardMaterial attach="material"> */}
//           <canvasTexture
//             attach="map"
//             repeat={[repeatCount, 1]}
//             image={canvas}
//             premultiplyAlpha
//             ref={texture}
//             wrapS={THREE.RepeatWrapping}
//             wrapT={THREE.RepeatWrapping}
//             onUpdate={(s) => (s.needsUpdate = true)}
//           />
//         </meshStandardMaterial>
//       </Cylinder>

//       <Cylinder args={cylArgs}>
//         <meshStandardMaterial transparent attach="material" side={THREE.BackSide}>
//           <canvasTexture
//             attach="map"
//             repeat={[repeatCount * 2, 1]}
//             image={backCanvas}
//             premultiplyAlpha
//             ref={texture2}
//             wrapS={THREE.RepeatWrapping}
//             wrapT={THREE.RepeatWrapping}
//             onUpdate={(s) => (s.needsUpdate = true)}
//           />
//         </meshStandardMaterial>
//       </Cylinder>
//     </group>
//   )
// }


// const Section = styled.section`
//   width: 100vw;
//   height: 100vh;
//   position: relative;

//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;

//   background-color: black;
//   overflow: hidden;
// `;
// const TextContainer = styled.p`
//   width: 100%;
//   height: 50vh;
//   z-index: 1;
//   font-size: 7em;
//   color: white;


//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;


//   span {
//     font-size: var(--fontBig);
//     width: 90%;
//     font-weight: 600;
//     text-transform: capitalize;
//   }

//   @media screen and (max-width: 70em) {
//     span {
//       font-size: var(--fontxxxl);
//     }
//   }
//   @media screen and (max-width: 64em) {
//     span {
//       font-size: var(--fontxxl);
//     }
//   }
//   @media screen and (max-width: 48em) {
//     span {
//       font-size: var(--fontlg);
//     }
//   }
// `;
// const TextContainer2 = styled.p`
//   width: 100%;
//   height: 50vh;
//   font-size: 7em;
//   color: green;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-end;

//   span {
//     font-size: var(--fontxxxl);
//     width: 80%;
//     font-weight: 600;
//     text-transform: capitalize;
//     align-self: flex-end;
//     text-align: right;
//   }

//   @media screen and (max-width: 70em) {
//     span {
//       font-size: var(--fontxxl);
//     }
//   }
//   @media screen and (max-width: 64em) {
//     span {
//       font-size: var(--fontxl);
//     }
//   }
//   @media screen and (max-width: 48em) {
//     span {
//       font-size: var(--fontlg);
//     }
//   }
// `;

// const DesignSection = () => {
//   const container = useRef(null);
//   const textOne = useRef(null);
//   const textTwo = useRef(null);

//   useLayoutEffect(() => {
//     let t1 = gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: container.current,
//           start: "top-=500 top",
//           end: "bottom top",
//           scrub: 1,
//         },
//       })
//       .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
//       .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

//     return () => {
//       if (t1) t1.kill();
//     };
//   }, []);

//   const [enabled, enable] = useState(true)


//   return (
//     <Section ref={container}>
//       <TextContainer ref={textOne}>
//         <span>Intelligent Artificial NeuroEvolution.</span>



//       </TextContainer>

     
//       <TextContainer2 ref={textTwo}>
//         <span>Genetic Algorithms.</span>
//       </TextContainer2>


//       {/* <HeroContainer> */}
//       <HeroContent>

// <Canvas shadows="basic"  camera={{ position: [0, 1.5, 14], fov: 45 }}>

// <Suspense fallback={<Html center className="loading" children="Loading..." />}>


// <fog attach="fog" args={['black', 0, 20]} />
// <pointLight position={[10, -10, -20]} intensity={10} />
// <pointLight position={[-10, -10, -20]} intensity={10} />
// {/* <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} /> */}
// {enabled && <SoftShadows />}
// {/** If PerfMon detects a low framerate it will switch back to harsh shadows */}
// <PerformanceMonitor onDecline={() => enable(false)} />

// </Suspense>

// </Canvas>


// </HeroContent>


// {/* </HeroContainer> */}
//     </Section>


// );
// };

// export default DesignSection;
