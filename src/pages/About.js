// import React, { useState, Suspense, useEffect, useRef, useMemo } from 'react';
// import { Affix, Button, Text, Transition, rem } from '@mantine/core';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer/index';
// import DesignSection from '../components/DesignSection';
// import { TopLine, Heading, WhiteTopLine, Heading2, Subtitle2, Column1 } from '../components/InfoSection/InfoElements';
// import Sidebar from '../components/Sidebar/index';
// import styled, { keyframes } from "styled-components";

// import { useFrame } from '@react-three/fiber'
// import { Cylinder } from '@react-three/drei'
// import * as THREE from 'three'
// import Services from '../components/Services';
// import { HeroBg, VideoBg } from '../components/HeroSection/HeroElements';
// import InfoSection from '../components/InfoSection';
// import InfoSectionCanva from '../components/InfoSection/index_Canvas';

// import {
//   homeObjOne,
//   homeObjTwo,
//   homeObjThree,


// } from '../components/InfoSection/Data';








// export default function About_Index() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (

//     <div style={{ width: '100vw', height: '100vh', overflow: 'auto', background: '#040404' }}>


  
       
//     <Navbar toggle={toggle} />
//       <Sidebar isOpen={isOpen} toggle={toggle} />


// <DesignSection/>

// {/* <HeroBg>
//         <VideoBg autoPlay loop muted src={require('../Assets/videos/iStock_optic.mp4').default} type='video/mp4' />

//       </HeroBg> */}
  
//       <Services/>


// < InfoSection {...homeObjOne} />
// < InfoSectionCanva {...homeObjTwo} />
// < InfoSection {...homeObjThree} />

 

//       <Affix position={{ bottom: rem(20), right: rem(20) }}>
//             <Button
//               variant="outline"
//             >
//               I am still in Development.
//             </Button>
//       </Affix>

//         <Footer/>
//         {/* // </HeroContainer>  */}
//         </div>
        
//   );
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
