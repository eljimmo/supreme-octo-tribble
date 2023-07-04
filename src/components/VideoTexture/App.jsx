import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
// import Video from '../../Assets/videos/iStock_optic.mp4';

export default function Videoapp() {
  return (
    <Canvas orthographic>
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
