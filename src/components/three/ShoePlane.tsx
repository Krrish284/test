import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Image as DreiImage } from '@react-three/drei';
import type { Group } from 'three';
import { imageUrl } from '../../config/env';
import { HERO_PHOTO_ID } from '../../data/products';

interface ShoePlaneProps {
  parallax: boolean;
}

export function ShoePlane({ parallax }: ShoePlaneProps) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }
    const targetY = parallax ? state.pointer.x * 0.22 : 0;
    const targetX = parallax ? -state.pointer.y * 0.12 : 0;
    const t = 1 - Math.pow(0.0015, delta);
    group.current.rotation.y += (targetY - group.current.rotation.y) * t;
    group.current.rotation.x += (targetX - group.current.rotation.x) * t;
  });

  return (
    <group ref={group} position={[2.15, 0.35, 0]}>
      <Float
        speed={1.4}
        rotationIntensity={0.28}
        floatIntensity={0.9}
        floatingRange={[-0.08, 0.14]}
      >
        <mesh>
          <planeGeometry args={[3.3, 2.2]} />
          <DreiImage
            url={imageUrl(HERO_PHOTO_ID, 1400)}
            transparent
            opacity={1}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[-0.04, -0.02, -0.01]}>
          <planeGeometry args={[3.42, 2.32]} />
          <meshBasicMaterial color="#D6FF3F" transparent opacity={0.12} />
        </mesh>
      </Float>
    </group>
  );
}
