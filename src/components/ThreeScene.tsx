import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingShapes() {
  const cubeRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.2;
      cubeRef.current.rotation.y += delta * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.1;
      sphereRef.current.rotation.z += delta * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      {/* Floating Cube */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={cubeRef} position={[2, 1, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#3B82F6" emissive="#1E40AF" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      {/* Floating Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={sphereRef} position={[-2, -1, 1]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#7C3AED" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      {/* Floating Torus */}
      <Float speed={1.2} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={torusRef} position={[0, -2, -1]}>
          <torusGeometry args={[0.8, 0.3, 16, 100]} />
          <meshStandardMaterial color="#06B6D4" emissive="#0891B2" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </>
  );
}

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[0, 10, -10]} intensity={0.3} color="#06B6D4" />
        
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default ThreeScene;