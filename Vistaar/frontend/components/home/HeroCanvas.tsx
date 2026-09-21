"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Particle field scene — sparse, slowly drifting points.
 * Extremely low geometry count; no textures, no post-processing.
 * Must stay performant on mid-range mobile GPUs.
 */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random positions once
  const positions = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.025;
    pointsRef.current.rotation.x = Math.sin(t * 0.015) * 0.08;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b35"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

/**
 * Lazy-loaded Three.js hero background canvas.
 * Renders behind all text content (z-index managed by parent).
 * Only mounted when:
 *   - prefers-reduced-motion is false
 *   - device is not low-end
 *   - After first paint (300ms delay in Hero.tsx)
 */
export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{
        antialias: false, // Disabled for performance
        alpha: true,
        powerPreference: "low-power",
        failIfMajorPerformanceCaveat: true, // Bail if GPU can't handle it
      }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <ParticleField />
    </Canvas>
  );
}
