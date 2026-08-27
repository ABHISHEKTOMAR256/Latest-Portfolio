"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const particlePositions = (() => {
  const positions = [];

  for (let i = 0; i < 3000; i++) {
    const radius = 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  }

  return new Float32Array(positions);
})();

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
      ref.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlePositions} stride={3}>
      <PointMaterial
        transparent
        color="#60A5FA"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function NetworkBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}