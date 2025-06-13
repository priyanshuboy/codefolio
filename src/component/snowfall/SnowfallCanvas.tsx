// components/SnowfallCanvas.tsx
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const Snowfall = () => {
  const count = 1000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 100
      arr[i * 3 + 1] = Math.random() * 100
      arr[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return arr
  }, [count])

  const velocities = useMemo(() => {
    const arr = new Array(count).fill(0).map(() => Math.random() * 0.2 + 0.05)
    return arr
  }, [count])

  const meshRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (!meshRef.current) return

    const pos = meshRef.current.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < count; i++) {
      pos.array[i * 3 + 1] -= velocities[i]
      if (pos.array[i * 3 + 1] < -50) {
        pos.array[i * 3 + 1] = 50
      }
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
   <bufferAttribute
  attach="attributes-position"
  args={[positions, 3]} 
/>
      </bufferGeometry>
      <pointsMaterial color="white" size={0.5} />
    </points>
  )
}

export default function SnowfallCanvas() {
  return (
       <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10, // 👈 stays behind everything
        pointerEvents: 'none', // 👈 lets you scroll/click normally
      }}
    >
      <ambientLight />
      <Snowfall />
    </Canvas>
  )
}
