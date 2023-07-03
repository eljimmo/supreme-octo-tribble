import * as THREE from 'three'
import { useEffect, useRef, useState, Suspense } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, SoftShadows, PerspectiveCamera, Html, useGLTF } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { RectAreaLightUniformsLib, FlakesTexture } from 'three-stdlib'





extend(geometry)
const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

function Model(props) {
  const group = useRef()
  const light = useRef()
  const { nodes } = useGLTF('/graces-draco.glb')
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x * (Math.PI / 10), 0], 1.5, delta)
    easing.damp3(group.current.position, [0, -5.5, 1 - Math.abs(state.pointer.x)], 1, delta)
    easing.damp3(light.current.position, [state.pointer.x * 12, 0, 8 + state.pointer.y * 4], 0.2, delta)
  })
  return (
    <group ref={group} {...props}>
      <mesh castShadow receiveShadow geometry={nodes.Node_3.geometry} rotation={[-Math.PI / 2, 0, 0]} scale={0.2} dispose={null}>
        <meshLambertMaterial color="#404044" />
      </mesh>
      {/* <Annotation position={[1.75, 3, 2.5]}>
        Thalia <span style={{ fontSize: '1.5em' }}>🌗</span>
      </Annotation>
      <Annotation position={[-4.5, 3.6, -3]}>
        Euphrosyne <span style={{ fontSize: '1.5em' }}>🌖</span>
      </Annotation>
      <Annotation position={[1.5, 8, -3]}>
        <span style={{ fontSize: '1.5em' }}>🌕</span> Aglaia
      </Annotation> */}
      <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </spotLight>
    </group>
  )
}


function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
      }>
      <div className="annotation">{children}</div>
    </Html>
  )
}


RectAreaLightUniformsLib.init()
THREE.Vector2.prototype.equals = function (v, epsilon = 0.001) {
  return Math.abs(v.x - this.x) < epsilon && Math.abs(v.y - this.y) < epsilon
}



function useLerpedMouse() {
  const mouse = useThree((state) => state.mouse)
  const lerped = useRef(mouse.clone())
  const previous = new THREE.Vector2()
  useFrame((state) => {
    previous.copy(lerped.current)
    lerped.current.lerp(mouse, 0.1)
    // Regress system when the mouse is moved
    if (!previous.equals(lerped.current)) state.performance.regress()
  })
  return lerped
}

function YBot(props) {
  const ref = useRef()
  const [texture] = useState(() => new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping))
  const { nodes, materials } = useGLTF('/untitled-draco2.glb')
  const mouse = useLerpedMouse()
  useFrame((state) => {
    ref.current.rotation.y = (mouse.current.x * Math.PI) / 10
    ref.current.rotation.x = (mouse.current.y * Math.PI) / 200
  })
  return (
    <group ref={ref} dispose={null} {...props}>
      <mesh castShadow receiveShadow geometry={nodes.Alpha_Surface.geometry}>
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.2}
          color={materials.Alpha_Body_MAT.color}
          normalMap={texture}
          normalMap-repeat={[35, 35]}
          normalScale={[0.15, 0.15]}
        />
      </mesh>
      <mesh castShadow geometry={nodes.Alpha_Joints.geometry}>
        <meshStandardMaterial metalness={1} roughness={0.1} color={materials.Alpha_Joints_MAT.color} />
      </mesh>
    </group>
  )
}

const Lights = () => {
  const lights = useRef()
  const mouse = useLerpedMouse()
  useFrame((state) => {
    lights.current.rotation.x = (mouse.current.x * Math.PI) / 2
    lights.current.rotation.y = Math.PI * 0.25 - (mouse.current.y * Math.PI) / 2
  })
  return (
    <>
      <directionalLight intensity={1} position={[2, 2, 0]} color="purple" distance={5} />
      <spotLight intensity={2} position={[-5, 10, 2]} angle={0.2} penumbra={1} castShadow shadow-mapSize={[2048, 2048]} />
      <group ref={lights}>
        <rectAreaLight intensity={2} position={[4.5, 0, -3]} width={40} height={4} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        <rectAreaLight intensity={2} position={[-10, 2, -10]} width={40} height={4} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </group>
    </>
  )
}

function Effects() {
  const ref = useRef()
  useFrame((state) => {
    // Disable SSAO on regress
    ref.current.blendMode.setBlendFunction(state.performance.current < 1 ? BlendFunction.SKIP : BlendFunction.MULTIPLY)
  }, [])
  return (
    <EffectComposer multisampling={8}>
      <SSAO ref={ref} intensity={20} radius={0.1} luminanceInfluence={0} bias={0.035} />
      <Bloom mipmapBlur radius={0.75} luminanceThreshold={0.8} intensity={5} />
    </EffectComposer>
  )
}



export default function Portalapp () {
  return (
  <Canvas camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
    <color attach="background" args={['#5b5b5b']} />
    <ambientLight intensity={0.75} />
    {/* <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}> */}
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
        {/* </PerspectiveCamera> */}
    <Frame id="01" name={`AI`} author="artificial intelligence" bg="#9fc5e8" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
    
    <fog attach="fog" args={['black', 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[-10, 5.5, 3]} rotation={[0, -0.2, 0]} />

      {/* <Gltf src="graces-draco.glb" scale={8} position={[0, -0.7, -2]} /> */}
      <SoftShadows samples={3} />
    
    {/* <Lights />

    <Suspense fallback={<Html center className="loading" children="Loading..." />}>

      <Gltf src="graces-draco.glb" scale={8} position={[0, -0.7, -2]} />
      </Suspense> */}

    </Frame>
    <Frame id="02" name="RL" author="reinforcment learning"  bg="#ffd966">
      {/* <Gltf src="untitled-draco2.glb" position={[0, -2, -3]} /> */}

      <Lights />
      <Suspense fallback={<Html center className="loading" children="Loading..." />}>
      <Gltf src="untitled-draco2.glb" position={[0, -2, -3]} />
      </Suspense>
      {/* <mesh scale={4} position={[0, 1, -0.2]}> */}
        {/* <planeGeometry /> */}
      {/* </mesh> */}
      {/* <Effects /> */}

    </Frame>
    <Frame id="03" name="ML" author="machine learning" bg="#8e7cc3" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
      <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
    </Frame>
    <Rig />
  </Canvas>
  )
}

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text font={suspend(medium).default} fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text font={suspend(regular).default} fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text font={suspend(regular).default} fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}
