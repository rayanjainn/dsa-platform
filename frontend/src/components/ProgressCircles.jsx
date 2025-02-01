import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import THREE from "three";

export default function ProgressCircles() {
  const groupRef = useRef(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus args={[3, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#22c55e" wireframe />
      </Torus>
      <Torus args={[2, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#eab308" wireframe />
      </Torus>
      <Torus args={[1, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ef4444" wireframe />
      </Torus>
    </group>
  );
}
