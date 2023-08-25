import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import App from '../Curl_Noise/App'


export default function Videoapp2() {
  return (
    <Canvas orthographic>
    {/* // <Canvas gl={{ antialias: false }} camera={{ position: [0, 2.5, 5], fov: 35 }}>  */}
    {/* <App/> */}
      
      <Scene />
    </Canvas>
  )
}

function Scene() {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="board.jpg" />}>
        <VideoMaterial url="125.mp4" />
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
