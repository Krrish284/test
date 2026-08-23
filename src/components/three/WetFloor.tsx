import { useMemo } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

interface WetFloorProps {
  resolution: number;
}

export function WetFloor({ resolution }: WetFloorProps) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.8, -1.35, -2]}>
      <planeGeometry args={[60, 60]} />
      <MeshReflectorMaterial
        blur={[280, 60]}
        resolution={resolution}
        mixBlur={1}
        mixStrength={28}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.3}
        mirror={0.55}
        color="#0A0C0E"
        metalness={0.55}
        roughness={0.9}
      />
    </mesh>
  );
}

interface LaneGridProps {
  accentX: number;
}

export function LaneGrid({ accentX }: LaneGridProps) {
  const lanes = useMemo(() => [-2.6, -1.7, -0.8, 0.1, 1.0, 1.9], []);

  return (
    <group position={[0.8, -1.34, -6]}>
      {lanes.map((x) => (
        <mesh key={x} position={[x, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.025, 44]} />
          <meshBasicMaterial color="#EDF1EE" transparent opacity={x === accentX ? 0 : 0.16} />
        </mesh>
      ))}
      <mesh position={[accentX, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.03, 44]} />
        <meshBasicMaterial color="#D6FF3F" transparent opacity={0.34} />
      </mesh>
    </group>
  );
}
