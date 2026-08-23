import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, type Points } from 'three';

const COUNT = 260;
const BOUNDS = { x: 16, y: 7, z: 14 };

export function MistParticles({ drift }: { drift: boolean }) {
  const points = useRef<Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * BOUNDS.x;
      array[i * 3 + 1] = Math.random() * BOUNDS.y - 1.2;
      array[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z - 3;
    }
    return array;
  }, []);

  useFrame((_, delta) => {
    if (!drift || !points.current) {
      return;
    }
    const attribute = points.current.geometry.getAttribute('position') as {
      getY: (i: number) => number;
      setY: (i: number, v: number) => void;
      needsUpdate: boolean;
    };
    for (let i = 0; i < COUNT; i += 1) {
      const nextY = attribute.getY(i) + delta * 0.06;
      attribute.setY(i, nextY > 5 ? -1.2 : nextY);
    }
    attribute.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#9FB8C8"
        transparent
        opacity={0.32}
        blending={AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
        fog={false}
      />
    </points>
  );
}
