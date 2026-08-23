import { Component, useEffect, useRef, useState } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import { Suspense } from 'react';
import { SceneRig } from './SceneRig';
import { ShoePlane } from './ShoePlane';
import { WetFloor, LaneGrid } from './WetFloor';
import { MistParticles } from './MistParticles';
import { imageUrl } from '../../config/env';
import { HERO_PHOTO_ID } from '../../data/products';
import { isWebGLAvailable, prefersReducedMotion } from '../../utils/webgl';

class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('3D scene crashed, showing static fallback.', error, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return <StaticFallback />;
    }
    return this.props.children;
  }
}

function StaticFallback() {
  return (
    <div className="absolute inset-0">
      <img
        src={imageUrl(HERO_PHOTO_ID, 1400)}
        alt="UMBRA GhostPace 1 runner photographed in low light"
        className="h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_50%_20%,transparent_30%,#060708_92%)]" />
    </div>
  );
}

function SceneLoader() {
  const { active, progress, errors } = useProgress();

  if (errors.length > 0) {
    return (
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lane-mute">
        3D scene unavailable — showing still
      </p>
    );
  }
  if (!active) {
    return null;
  }
  return (
    <div className="flex items-center gap-3" role="status" aria-live="polite">
      <span className="block h-1 w-28 overflow-hidden rounded-full bg-white/10">
        <span
          className="block h-full bg-volt transition-[width] duration-300"
          style={{ width: `${Math.round(progress)}%` }}
        />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-lane-dim">
        Loading track surface — {Math.round(progress)}%
      </span>
    </div>
  );
}

export function HeroCanvas() {
  const container = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(true);
  const [visible, setVisible] = useState(true);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');
    const update = () => setNarrow(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const node = container.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0]?.isIntersecting ?? true),
      { threshold: 0.02 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!supported) {
    return (
      <div ref={container} className="absolute inset-0">
        <StaticFallback />
      </div>
    );
  }

  const reduced = prefersReducedMotion();
  const reflectResolution = narrow ? 512 : 1024;

  return (
    <div ref={container} className="absolute inset-0" aria-hidden="true">
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, narrow ? 1.5 : 2]}
        camera={{ position: [0, 0.9, 7.6], fov: 32 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <SceneErrorBoundary>
          <Suspense fallback={null}>
            <SceneRig />
            <WetFloor resolution={reflectResolution} />
            <LaneGrid accentX={-0.8} />
            <group position={narrow ? [0, -0.4, 0] : [0, 0, 0]}>
              <ShoePlane parallax={!reduced && !narrow} />
            </group>
            <MistParticles drift={!reduced} />
          </Suspense>
        </SceneErrorBoundary>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-16 flex justify-center lg:bottom-auto lg:left-10 lg:top-24 lg:justify-start">
        <SceneLoader />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_85%_40%,transparent_45%,rgba(6,7,8,0.55)_100%)]" />
    </div>
  );
}
