import { React, Suspense, useRef, useState, useMemo, useEffect, useLayoutEffect } from 'react';
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
import { useAspect, useVideoTexture, Scroll, Image, ScrollControls, useIntersect, useTexture, useCursor, Effects as EffectComposer } from '@react-three/drei'
  import Model from '../GEO/Geo'
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import Scenemodel from '../3d_models/Scene_draco'
import { useSphere, Physics } from '@react-three/cannon'
import * as THREE from "three"
import { AsciiEffect } from 'three-stdlib'


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
    const texture = useTexture("/crosshair.jpg")
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
  


  function Torusknot(props) {
    const ref = useRef()
    const [clicked, click] = useState(false)
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1.25}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      </mesh>
    )
  }
  
  function AsciiRenderer({
    renderIndex = 1,
    bgColor = 'black',
    fgColor = 'white',
    characters = ' .:-+*=%@#',
    invert = true,
    color = false,
    resolution = 0.15
  }) {
    // Reactive state
    const { size, gl, scene, camera } = useThree()
  
    // Create effect
    const effect = useMemo(() => {
      const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
      effect.domElement.style.position = 'absolute'
      effect.domElement.style.top = '0px'
      effect.domElement.style.left = '0px'
      effect.domElement.style.pointerEvents = 'none'
      return effect
    }, [characters, invert, color, resolution])
  
    // Styling
    useLayoutEffect(() => {
      effect.domElement.style.color = fgColor
      effect.domElement.style.backgroundColor = bgColor
    }, [fgColor, bgColor])
  
    // Append on mount, remove on unmount
    useEffect(() => {
      gl.domElement.style.opacity = '0'
      gl.domElement.parentNode.appendChild(effect.domElement)
      return () => {
        gl.domElement.style.opacity = '1'
        gl.domElement.parentNode.removeChild(effect.domElement)
      }
    }, [effect])
  
    // Set size
    useEffect(() => {
      effect.setSize(size.width, size.height)
    }, [effect, size])
  
    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
      effect.render(scene, camera)
    }, renderIndex)
  
    // This component returns nothing, it is a purely logical
  }
  
  
  
 
function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 0 : 1, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="c4cA8UN.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="c4cA8UN.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="c4cA8UN.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
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
                    to='Home'
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
            <Canvas>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <AsciiRenderer fgColor="white" bgColor="black" />
    </Canvas>
            {/* <Column2> */}
            {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>

<ambientLight intensity={0.25} />
<spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
<directionalLight intensity={5} position={[-10, -10, -10]} color="purple" />
<Physics gravity={[0, 2, 0]} iterations={10}>
  <Pointer />

  <Clump />
</Physics>
<Effects />
<OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

</Canvas> */}
            {/* <Canvas
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 6.5, near: 1, far: 10 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
<ambientLight intensity={1} />
<directionalLight position={[-2, 5, 2]} intensity={1} />
<Suspense fallback={null}>
<OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

  <SombreroSuperficieMath rotation={[0, Math.PI / 1.5, 0]} scale={0.00025} />

</Suspense>
</Canvas> */}
    
            {/* </Column2> */}
            {/* <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <color attach="background" args={['#f0f0f0']} />
    <ScrollControls damping={6} pages={5}>
      <Items />
      <Scroll html style={{ width: '100%' }}>
        <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
        <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
        <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
          her
          <br />
          mes.
        </h1>
      </Scroll>
    </ScrollControls>
  </Canvas> */}
          </InfoRow>

        </InfoWrapper>

        {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}> */}
        {/* <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>

    <ambientLight intensity={0.25} />
    <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
    <directionalLight intensity={5} position={[-10, -10, -10]} color="purple" />
    <Physics gravity={[0, 2, 0]} iterations={10}>
      <Pointer />

      <Clump />
    </Physics>
    <Effects />
  </Canvas> */}
    {/* <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <color attach="background" args={['#f0f0f0']} />
    <ScrollControls damping={6} pages={5}>
      <Items />
      <Scroll html style={{ width: '100%' }}>
        <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
        <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
        <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
          her
          <br />
          mes.
        </h1>
      </Scroll>
    </ScrollControls>
  </Canvas> */}

      </InfoContainer>
    </>
  );
};

export default InfoSection2;

