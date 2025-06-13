// components/Snowfall.tsx
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Snowfall() {
  const snowRef = useRef<THREE.Points>(null);

  const count = 100;

  // Generate initial random positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 50; // X
      pos[i * 3 + 1] = Math.random() * 80 - 40;     // Y: from +40 to -40
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50; // Z
    }
    return pos;
  }, []);

  // Animate falling
  useFrame(() => {
    if (!snowRef.current) return;

    const positionsArray = snowRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      positionsArray[i * 3 + 1] -= 0.05; // falling speed

      // Reset snowflake to top when it falls below bottom
      if (positionsArray[i * 3 + 1] < -40) {
        positionsArray[i * 3 + 1] = 40;
      }
    }

    snowRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={snowRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="white"
        size={0.1}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
