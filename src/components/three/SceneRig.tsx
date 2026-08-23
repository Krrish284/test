import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { AdditiveBlending, DoubleSide, type Group, type SpotLight as ThreeSpotLight, type PointLight } from 'three';
import { useFlash } from '../effects/flash-context';

export function SceneRig() {
  const floodRef = useRef<Group>(null);
  const spotRef = useRef<ThreeSpotLight>(null);
  const rimRef = useRef<PointLight>(null);
  const lastFlash = useRef(0);
  const { flashAt } = useFlash();

  if (flashAt > 0 && flashAt !== lastFlash.current) {
    lastFlash.current = flashAt;
  }

  useFrame(({ clock }) => {
    const elapsed = clock.elapsedTime * 1000 - lastFlash.current;
    const burst = lastFlash.current > 0 && elapsed >= 0 ? Math.exp(-elapsed / 240) : 0;
    if (spotRef.current) {
      spotRef.current.intensity = 140 + burst * 850;
    }
    if (rimRef.current) {
      rimRef.current.intensity = 24 + burst * 200;
    }
    if (floodRef.current) {
      const target = 1 + burst * 0.05;
      floodRef.current.scale.setScalar(
        floodRef.current.scale.x + (target - floodRef.current.scale.x) * 0.2
      );
    }
  });

  return (
    <>
      <color attach="background" args={['#060708']} />
      <fog attach="fog" args={['#060708', 10, 30]} />

      <ambientLight intensity={0.16} color="#BFDDE8" />
      <spotLight
        ref={spotRef}
        position={[-6, 9, -3]}
        angle={0.5}
        penumbra={0.85}
        intensity={140}
        distance={40}
        color="#EDF1EE"
      />
      <pointLight ref={rimRef} position={[4.5, 1.6, -3]} intensity={24} color="#D6FF3F" />

      <group ref={floodRef}>
        <mesh position={[-3.4, 3.2, -2.4]} rotation={[0, 0, 0.62]}>
          <coneGeometry args={[2.6, 11, 48, 1, true]} />
          <meshBasicMaterial
            color="#BFDDE8"
            transparent
            opacity={0.05}
            side={DoubleSide}
            blending={AdditiveBlending}
            depthWrite={false}
            fog={false}
          />
        </mesh>
      </group>

      <Environment resolution={256}>
        <Lightformer intensity={2.4} position={[0, 5, -9]} scale={[12, 4, 1]} color="#BFDDE8" />
        <Lightformer intensity={1.1} position={[-7, 2, 2]} scale={[3, 8, 1]} color="#EDF1EE" />
        <Lightformer intensity={0.8} position={[7, 1, 1]} scale={[2, 6, 1]} color="#D6FF3F" />
      </Environment>
    </>
  );
}
