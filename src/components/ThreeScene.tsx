import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingIcons() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3B82F6" emissive="#1E40AF" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

function AnimatedText() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          position={[-2, 0, 0]}
        >
          DEV
          <meshStandardMaterial color="#8B5CF6" emissive="#7C3AED" emissiveIntensity={0.2} />
        </Text3D>
      </Center>
    </Float>
  );
}

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        <FloatingIcons />
        <AnimatedText />
      </Canvas>
    </div>
  );
};

export default ThreeScene;