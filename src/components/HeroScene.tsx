import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Grid } from '@react-three/drei';
import * as THREE from 'three';

// 1. Futuristic Screen/Monitor Component
function UltrawideMonitor() {
  const codeLinesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (codeLinesRef.current) {
      // Gently pulse or animate holographic screen data
      const time = state.clock.getElapsedTime();
      codeLinesRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshBasicMaterial;
          mat.opacity = 0.4 + Math.sin(time * 2 + i) * 0.3;
        }
      });
    }
  });

  return (
    <group position={[0, 0.4, -0.6]}>
      {/* Ultrawide Curved Monitor Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.2, 1.9, 0.12]} />
        <meshPhysicalMaterial
          color="#1c1917"
          roughness={0.25}
          metalness={0.8}
          clearcoat={0.6}
        />
      </mesh>

      {/* Heavy Heavy Duty Monitor Stand */}
      <mesh position={[0, -1.2, -0.3]} castShadow>
        <cylinderGeometry args={[0.06, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#292524" roughness={0.15} metalness={0.9} />
      </mesh>
      <mesh position={[0, -1.6, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <ringGeometry args={[0.08, 0.5, 32]} />
        <meshStandardMaterial color="#1c1917" roughness={0.15} metalness={0.9} />
      </mesh>

      {/* Screen Face */}
      <mesh position={[0, 0, 0.061]}>
        <planeGeometry args={[5.0, 1.7]} />
        <meshPhysicalMaterial
          color="#030712"
          roughness={0.1}
          metalness={0.95}
          emissive="#1e1b4b"
          emissiveIntensity={0.6}
          clearcoat={1.0}
        />
      </mesh>

      {/* Holographic Screen Overlay Graphics */}
      <group ref={codeLinesRef} position={[0, 0, 0.063]}>
        {[...Array(8)].map((_, i) => {
          const width = 1.2 + Math.random() * 2.5;
          const x = -1.8 + width / 2 + Math.random() * 0.3;
          return (
            <mesh key={i} position={[x, 0.6 - i * 0.18, 0]}>
              <planeGeometry args={[width, 0.02]} />
              <meshBasicMaterial
                color={i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a78bfa' : '#2dd4bf'}
                transparent
                opacity={0.6}
              />
            </mesh>
          );
        })}
        {/* Futuristic Grid Overlay on screen */}
        <mesh position={[0, 0, -0.001]}>
          <planeGeometry args={[4.8, 1.5]} />
          <meshBasicMaterial
            color="#1e293b"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </group>
  );
}

// 2. Keyboard Component
function MechanicalKeyboard() {
  const rows = 4;
  const cols = 14;
  const spacingX = 0.15;
  const spacingY = 0.14;

  const keys = useMemo(() => {
    const list = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Spacebar exception
        if (r === 0 && c >= 5 && c <= 9) continue;
        const x = (c - (cols - 1) / 2) * spacingX;
        const y = (r - (rows - 1) / 2) * spacingY;
        list.push({ id: `${r}-${c}`, x, y, sizeX: 0.11, sizeY: 0.1 });
      }
    }
    // Add Spacebar manually
    list.push({ id: 'space', x: 0, y: -(rows - 1) / 2 * spacingY, sizeX: 0.7, sizeY: 0.1 });
    return list;
  }, []);

  return (
    <group position={[0, -1.2, 0.9]} rotation={[-0.15, 0, 0]}>
      {/* Keyboard Case */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.08, 0.8]} />
        <meshStandardMaterial color="#1c1917" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Underglow glow reflection strip */}
      <mesh position={[0, -0.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.3, 0.75]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Individual Keycaps */}
      {keys.map((k) => (
        <mesh key={k.id} position={[k.x, 0.05, k.y]} castShadow>
          <boxGeometry args={[k.sizeX, 0.04, k.sizeY]} />
          <meshStandardMaterial
            color={
              k.id === 'space'
                ? '#1e293b'
                : Math.random() > 0.85
                ? '#3b82f6'
                : Math.random() > 0.9
                ? '#10b981'
                : '#292524'
            }
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// 3. Ergonomic Gaming Mouse
function ErgonomicMouse() {
  return (
    <group position={[1.5, -1.22, 0.95]} rotation={[-0.1, -0.15, 0]}>
      {/* Mouse Chassis */}
      <mesh castShadow>
        <boxGeometry args={[0.22, 0.11, 0.38]} />
        <meshStandardMaterial color="#1c1917" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Laser side-glow line */}
      <mesh position={[0, 0.01, 0.01]}>
        <boxGeometry args={[0.23, 0.01, 0.3]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>
    </group>
  );
}

// 4. Steaming Coffee Mug
function SteamingCoffeeMug() {
  const steamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (steamRef.current) {
      const time = state.clock.getElapsedTime();
      steamRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        // Float steam upward and fade out
        mesh.position.y = 0.3 + ((time * 0.4 + i * 0.3) % 0.8);
        mesh.position.x = Math.sin(time * 2 + i) * 0.05;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshBasicMaterial;
          mat.opacity = (1 - (mesh.position.y - 0.3) / 0.8) * 0.4;
        }
      });
    }
  });

  return (
    <group position={[-1.5, -1.15, 0.75]}>
      {/* Porcelain Ceramic Body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.45, 32]} />
        <meshPhysicalMaterial
          color="#fafaf9"
          roughness={0.12}
          metalness={0.05}
          clearcoat={1.0}
        />
      </mesh>

      {/* Minimal Handle */}
      <mesh position={[-0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.12, 0.035, 12, 24, Math.PI]} />
        <meshPhysicalMaterial
          color="#fafaf9"
          roughness={0.12}
          clearcoat={1.0}
        />
      </mesh>

      {/* Coffee Fluid Surface */}
      <mesh position={[0, 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.17, 32]} />
        <meshStandardMaterial color="#2d1606" roughness={0.8} />
      </mesh>

      {/* Animated Steam Rings */}
      <group ref={steamRef}>
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[0, 0.3, 0]}>
            <torusGeometry args={[0.08, 0.005, 8, 16]} />
            <meshBasicMaterial color="#e7e5e4" transparent opacity={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// 5. Floating Glass IDE Code Panel
function CodeGlassPanel({ position, color, title, delay = 0 }: { position: [number, number, number], color: string, title: string, delay?: number }) {
  const panelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (panelRef.current) {
      const time = state.clock.getElapsedTime() * 1.2 + delay;
      // Elegant floating floating motion
      panelRef.current.position.y = position[1] + Math.sin(time) * 0.22;
      panelRef.current.rotation.y = Math.sin(time * 0.5) * 0.05;
      panelRef.current.rotation.x = Math.cos(time * 0.4) * 0.03;
    }
  });

  return (
    <group ref={panelRef} position={position}>
      {/* Physical Frosted Glass Panel */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.2, 0.03]} />
        <meshPhysicalMaterial
          color="#0f172a"
          roughness={0.15}
          metalness={0.8}
          transparent
          opacity={0.35}
          transmission={0.7}
          thickness={0.8}
          clearcoat={1.0}
        />
      </mesh>

      {/* Frame border highlight */}
      <mesh>
        <boxGeometry args={[1.82, 1.22, 0.03]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
      </mesh>

      {/* Header bar of code panel */}
      <group position={[-0.75, 0.48, 0.016]}>
        <mesh>
          <planeGeometry args={[0.18, 0.06]} />
          <meshBasicMaterial color={color} transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Hologram lines for Code lines inside panel */}
      <group position={[0, -0.05, 0.016]}>
        {[...Array(6)].map((_, i) => {
          const width = 0.7 + Math.random() * 0.7;
          return (
            <mesh key={i} position={[-0.75 + width / 2, 0.25 - i * 0.14, 0]}>
              <planeGeometry args={[width, 0.025]} />
              <meshBasicMaterial color={color} transparent opacity={0.5} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// 6. Neural Net / AI Hologram Node Constellation Core
function NeuralConstellation() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 280;

  // Generate constellation coordinates
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);
    const c1 = new THREE.Color('#3b82f6');
    const c2 = new THREE.Color('#a78bfa');
    const c3 = new THREE.Color('#2dd4bf');

    for (let i = 0; i < particleCount; i++) {
      // Cylinder distribution simulating connection lines
      const theta = Math.random() * Math.PI * 2;
      const r = 3 + Math.random() * 5;
      const h = (Math.random() - 0.5) * 8;

      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = h;
      pos[i * 3 + 2] = Math.sin(theta) * r;

      const randomColor = new THREE.Color();
      const rand = Math.random();
      if (rand < 0.35) {
        randomColor.copy(c1).lerp(c2, Math.random());
      } else {
        randomColor.copy(c2).lerp(c3, Math.random());
      }

      cols[i * 3] = randomColor.r;
      cols[i * 3 + 1] = randomColor.g;
      cols[i * 3 + 2] = randomColor.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.z += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 7. Advanced Floating Neural Network / AI Core Component
function FuturisticNeuralNetworkCore() {
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow elegant rotations
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y = time * 0.15;
      outerSphereRef.current.rotation.x = time * 0.08;
    }
    
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -time * 0.25;
      // Core pulsing glow
      const pulse = 1.0 + Math.sin(time * 3) * 0.15;
      innerSphereRef.current.scale.set(pulse, pulse, pulse);
      if (innerSphereRef.current.material) {
        const mat = innerSphereRef.current.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 1.2 + Math.sin(time * 3) * 0.4;
      }
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.4;
      ringRef1.current.rotation.y = time * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -time * 0.35;
      ringRef2.current.rotation.z = time * 0.15;
    }

    // Overall floating micro-movement
    if (groupRef.current) {
      groupRef.current.position.y = 1.1 + Math.sin(time * 1.5) * 0.15;
    }
  });

  // Calculate static neural nodes on the outer vertices
  const vertices = useMemo(() => {
    const points = [];
    const radius = 1.1;
    // 12 points of an icosahedron
    for (let i = 0; i < 12; i++) {
      const phi = Math.acos(-1 + (2 * i) / 12);
      const theta = Math.sqrt(12 * Math.PI) * phi;
      points.push([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ]);
    }
    return points;
  }, []);

  return (
    <group ref={groupRef} position={[0, 1.1, 0.4]}>
      {/* 1. Inner Glowing Energy Core */}
      <mesh ref={innerSphereRef} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 2. Secondary Glowing Wireframe Cage */}
      <mesh ref={outerSphereRef} castShadow>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.35}
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Neural Nodes (Glowing vertices on the cage) */}
      {vertices.map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? "#2dd4bf" : "#a78bfa"}
              emissive={idx % 2 === 0 ? "#2dd4bf" : "#a78bfa"}
              emissiveIntensity={1.2}
              roughness={0.1}
            />
          </mesh>
          {/* Connection lines pointing to the core */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([0, 0, 0, -pos[0], -pos[1], -pos[2]]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#475569"
              transparent
              opacity={0.25}
            />
          </line>
        </group>
      ))}

      {/* 4. Orbit Ring 1 (Lateral) */}
      <group ref={ringRef1}>
        <mesh>
          <torusGeometry args={[1.4, 0.015, 8, 64]} />
          <meshStandardMaterial
            color="#2dd4bf"
            emissive="#2dd4bf"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh position={[1.4, 0, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* 5. Orbit Ring 2 (Vertical/Diagonal) */}
      <group ref={ringRef2}>
        <mesh>
          <torusGeometry args={[1.5, 0.012, 8, 64]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.8}
            transparent
            opacity={0.5}
          />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}

// Main Interactive Scene
export default function HeroScene() {
  const mainGroup = useRef<THREE.Group>(null);
  const floatingWorkspace = useRef<THREE.Group>(null);
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);

  // Smooth mouse inputs for high-end cinematic parallax
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    // Lerp mouse inputs
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.04;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.04;

    // Cinematic Camera movement - dynamic pan with mouse
    state.camera.position.x += (mouse.current.x * 1.8 - state.camera.position.x) * 0.03;
    state.camera.position.y += (-mouse.current.y * 1.5 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, -0.5);

    // Gently rotate workspace
    if (floatingWorkspace.current) {
      floatingWorkspace.current.rotation.y = mouse.current.x * 0.12;
      floatingWorkspace.current.rotation.x = -mouse.current.y * 0.08;
    }

    // Animate background light orbs
    const time = state.clock.getElapsedTime();
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.5) * 6;
      light1.current.position.y = Math.cos(time * 0.3) * 3;
    }
    if (light2.current) {
      light2.current.position.y = Math.sin(time * 0.4) * 4;
      light2.current.position.z = Math.cos(time * 0.6) * 5;
    }
  });

  return (
    <>
      {/* Core Studio Lighting */}
      <ambientLight intensity={0.25} />

      {/* Volumetric Spot lights */}
      <directionalLight
        position={[10, 15, 8]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      {/* Cyber Glow RGB Accent Lights */}
      <pointLight
        ref={light1}
        position={[-5, 4, 3]}
        intensity={3.5}
        color="#3b82f6" // Electric blue
        distance={20}
        decay={1.8}
      />
      <pointLight
        ref={light2}
        position={[5, -4, -2]}
        intensity={3.0}
        color="#8b5cf6" // Deep Violet
        distance={18}
        decay={1.5}
      />
      <pointLight
        position={[0, 5, 4]}
        intensity={2.0}
        color="#2dd4bf" // Neon Emerald/Teal
        distance={15}
      />

      {/* Main Container */}
      <group ref={mainGroup}>
        {/* Hologram Star constellation network */}
        <NeuralConstellation />

        {/* Floating geometric tech accents */}
        <Float speed={2.0} floatIntensity={1.4} rotationIntensity={0.6}>
          <mesh position={[-5.5, 2.5, -4]} castShadow>
            <octahedronGeometry args={[0.6]} />
            <meshStandardMaterial
              color="#3b82f6"
              roughness={0.15}
              metalness={0.9}
              transparent
              opacity={0.65}
            />
          </mesh>
        </Float>

        <Float speed={1.8} floatIntensity={1.2} rotationIntensity={1.0}>
          <mesh position={[5.5, -2.0, -3]} castShadow>
            <torusGeometry args={[0.45, 0.15, 16, 64]} />
            <meshStandardMaterial
              color="#a78bfa"
              roughness={0.15}
              metalness={0.8}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      </group>

      {/* Floating physical dev workspace desk */}
      <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.1}>
        <group ref={floatingWorkspace}>
          {/* Curved Monitor */}
          <UltrawideMonitor />

          {/* Mechanical Keyboard */}
          <MechanicalKeyboard />

          {/* Gaming Mouse */}
          <ErgonomicMouse />

          {/* Warm Coffee Mug with Steam */}
          <SteamingCoffeeMug />

          {/* Floating Glass Code Panels */}
          <CodeGlassPanel
            position={[-2.7, 1.2, 0.4]}
            color="#3b82f6"
            title="server.ts"
            delay={0}
          />
          <CodeGlassPanel
            position={[2.7, 0.7, 0.6]}
            color="#8b5cf6"
            title="App.tsx"
            delay={Math.PI / 2}
          />

          {/* Floating AI Constellation core inside workspace */}
          <FuturisticNeuralNetworkCore />
        </group>
      </Float>

      {/* Reflective Digital Grid Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
      
      <group position={[0, -4.99, 0]}>
        <Grid
          renderOrder={-1}
          position={[0, 0, 0]}
          args={[50, 50]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#020617"
          sectionSize={2.5}
          sectionThickness={1.0}
          sectionColor="#0f172a"
          fadeDistance={30}
          infiniteGrid
        />
      </group>
    </>
  );
}
