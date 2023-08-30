// import "./styles.css";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import React, { useRef, useState, useMemo } from "react";
// import { OrbitControls, Plane } from "@react-three/drei";
// import * as d3 from "d3";

// const MyRotatingBox = ({ depth, width, height, x, y, z }) => {
//   const myMesh = useRef();
//   const [active, setActive] = useState(false);
  
//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     // myMesh.current.rotation.x = a;
//   });

//   return (
//     <mesh
//       onPointerEnter={() => setActive(true)}
//       onPointerLeave={() => setActive(false)}
//       ref={myMesh}
//       scale={1}
//       position={[x, y, z]}
//     >
//       <boxBufferGeometry args={[width, height, depth]} />
//       <meshPhongMaterial color={active ? "yellow" : "royalblue"} />
//     </mesh>
//   );
// };

// export default function ThreejsApp() {
//   const data = useMemo(() => d3.range(10).map(() => Math.random()), []);
//   const maxVal = useMemo(() => Math.max(...data), [data]);
  
//   const scaleValue = useMemo(
//     () => d3.scaleLinear().domain([0, maxVal]).range([1, 3]),
//     [maxVal]
//   );

//   const scaleValueMargin = useMemo(
//     () => d3.scaleLinear().domain([maxVal, 0]).range([2 / 2, 0]),
//     [maxVal]
//   );

//   const scaleX = useMemo(
//     () =>
//       d3.scaleBand().domain(d3.range(data.length)).range([0, 1]).paddingInner(0.1),
//     [data]
//   );

//   return (
//     <div className="App">
//       <h1>D3 + React-three-fiber graph test</h1>
//       <Canvas style={{ minHeight: "600px" }}>
//         <OrbitControls />
//         <ambientLight intensity={0.1} />
//         <directionalLight color="red" position={[0, 0, 5]} />
//         {data.map((d, i) => (
//           <MyRotatingBox
//             depth={0.1}
//             width={scaleX.bandwidth()}
//             height={scaleValue(d)}
//             x={scaleX(i) || 0}
//             y={scaleValueMargin(d)}
//             z={0}
//             key={i}
//           />
//         ))}
//         <mesh position={[0, -0.5, 0]}>
//           <Plane args={[3, 1]} rotation={[Math.PI / 2, 0, 0]}>
//             <meshBasicMaterial
//               attach="material"
//               color="#000"
//               side={THREE.DoubleSide}
//             />
//           </Plane>
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }
