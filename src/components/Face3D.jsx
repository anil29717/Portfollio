import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Head() {
  const groupRef = useRef();
  const eyeL = useRef();
  const eyeR = useRef();
  const pupilL = useRef();
  const pupilR = useRef();
  const browL = useRef();
  const browR = useRef();
  const { pointer } = useThree();

  const mat = useMemo(() => ({
    skin: new THREE.MeshStandardMaterial({ color: '#c8956c', roughness: 0.65, metalness: 0.0 }),
    hair: new THREE.MeshStandardMaterial({ color: '#1a1a1a', roughness: 0.8, metalness: 0.05 }),
    eyeWhite: new THREE.MeshStandardMaterial({ color: '#f0f0f0', roughness: 0.3, metalness: 0.0 }),
    pupil: new THREE.MeshStandardMaterial({ color: '#1a1210', roughness: 0.4, metalness: 0.1 }),
    iris: new THREE.MeshStandardMaterial({ color: '#3d2510', roughness: 0.4, metalness: 0.1 }),
    lip: new THREE.MeshStandardMaterial({ color: '#a07060', roughness: 0.7, metalness: 0.0 }),
    glasses: new THREE.MeshStandardMaterial({ color: '#111118', roughness: 0.1, metalness: 0.9 }),
    lens: new THREE.MeshStandardMaterial({ color: '#1a3050', roughness: 0.0, metalness: 0.3, transparent: true, opacity: 0.35 }),
    headphone: new THREE.MeshStandardMaterial({ color: '#111118', roughness: 0.2, metalness: 0.8 }),
    pad: new THREE.MeshStandardMaterial({ color: '#1a1a28', roughness: 0.9, metalness: 0.0 }),
    neonCyan: new THREE.MeshStandardMaterial({ color: '#00f0ff', emissive: '#00f0ff', emissiveIntensity: 1.5, roughness: 0.1 }),
    neonPink: new THREE.MeshStandardMaterial({ color: '#ff00aa', emissive: '#ff00aa', emissiveIntensity: 1.2, roughness: 0.1 }),
    hoodie: new THREE.MeshStandardMaterial({ color: '#1a1a3a', roughness: 0.6, metalness: 0.1 }),
  }), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.5, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * -0.25, 0.06);
    }

    // Eyes follow mouse
    const ex = pointer.x * 0.03;
    const ey = pointer.y * 0.02;
    if (pupilL.current) { pupilL.current.position.x = -0.28 + ex; pupilL.current.position.y = 0.05 + ey; }
    if (pupilR.current) { pupilR.current.position.x = 0.28 + ex; pupilR.current.position.y = 0.05 + ey; }

    // Eyebrows react
    const browLift = pointer.y * 0.03;
    if (browL.current) browL.current.position.y = 0.25 + browLift;
    if (browR.current) browR.current.position.y = 0.25 + browLift;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <mesh material={mat.skin}>
        <sphereGeometry args={[0.85, 28, 28]} />
      </mesh>

      {/* Jaw / chin area (slightly elongated) */}
      <mesh material={mat.skin} position={[0, -0.35, 0.15]}>
        <sphereGeometry args={[0.55, 20, 20]} />
      </mesh>

      {/* Hair - top */}
      <mesh material={mat.hair} position={[0, 0.3, -0.05]}>
        <sphereGeometry args={[0.87, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
      </mesh>
      {/* Hair - back & sides */}
      <mesh material={mat.hair} position={[0, 0.1, -0.25]}>
        <boxGeometry args={[1.7, 0.7, 0.6]} />
      </mesh>
      {/* Hair - fringe / front */}
      <mesh material={mat.hair} position={[0, 0.5, 0.4]}>
        <boxGeometry args={[1.2, 0.3, 0.35]} />
      </mesh>
      {/* Hair sweep side */}
      <mesh material={mat.hair} position={[0.5, 0.45, 0.2]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.5, 0.25, 0.3]} />
      </mesh>

      {/* Eyes */}
      <group position={[0, 0.05, 0.72]}>
        {/* Eye whites */}
        <mesh ref={eyeL} material={mat.eyeWhite} position={[-0.28, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        <mesh ref={eyeR} material={mat.eyeWhite} position={[0.28, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        {/* Irises */}
        <mesh position={[-0.28, 0, 0.08]} material={mat.iris}>
          <sphereGeometry args={[0.07, 12, 12]} />
        </mesh>
        <mesh position={[0.28, 0, 0.08]} material={mat.iris}>
          <sphereGeometry args={[0.07, 12, 12]} />
        </mesh>
        {/* Pupils (move with mouse) */}
        <mesh ref={pupilL} position={[-0.28, 0, 0.11]} material={mat.pupil}>
          <sphereGeometry args={[0.04, 10, 10]} />
        </mesh>
        <mesh ref={pupilR} position={[0.28, 0, 0.11]} material={mat.pupil}>
          <sphereGeometry args={[0.04, 10, 10]} />
        </mesh>

        {/* Eyelids (upper) */}
        <mesh material={mat.skin} position={[-0.28, 0.08, 0.04]}>
          <boxGeometry args={[0.22, 0.04, 0.15]} />
        </mesh>
        <mesh material={mat.skin} position={[0.28, 0.08, 0.04]}>
          <boxGeometry args={[0.22, 0.04, 0.15]} />
        </mesh>

        {/* Eyebrows */}
        <mesh ref={browL} material={mat.hair} position={[-0.28, 0.25, 0.03]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.22, 0.04, 0.06]} />
        </mesh>
        <mesh ref={browR} material={mat.hair} position={[0.28, 0.25, 0.03]} rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.22, 0.04, 0.06]} />
        </mesh>
      </group>

      {/* Nose */}
      <mesh material={mat.skin} position={[0, -0.1, 0.8]}>
        <sphereGeometry args={[0.08, 12, 12]} />
      </mesh>
      <mesh material={mat.skin} position={[0, -0.18, 0.75]}>
        <sphereGeometry args={[0.06, 10, 10]} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, -0.35, 0.7]} material={mat.lip}>
        <boxGeometry args={[0.25, 0.04, 0.08]} />
      </mesh>
      {/* Slight smile curve */}
      <mesh position={[-0.12, -0.33, 0.68]} material={mat.lip} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.06, 0.02, 0.06]} />
      </mesh>
      <mesh position={[0.12, -0.33, 0.68]} material={mat.lip} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.06, 0.02, 0.06]} />
      </mesh>

      {/* Ears */}
      <mesh material={mat.skin} position={[-0.82, 0, 0]}>
        <sphereGeometry args={[0.14, 10, 10]} />
      </mesh>
      <mesh material={mat.skin} position={[0.82, 0, 0]}>
        <sphereGeometry args={[0.14, 10, 10]} />
      </mesh>

      {/* Glasses */}
      <group position={[0, 0.05, 0.73]}>
        <mesh material={mat.glasses} position={[-0.28, 0, 0]}>
          <torusGeometry args={[0.17, 0.02, 8, 24]} />
        </mesh>
        <mesh material={mat.lens} position={[-0.28, 0, 0.01]}>
          <circleGeometry args={[0.16, 24]} />
        </mesh>
        <mesh material={mat.glasses} position={[0.28, 0, 0]}>
          <torusGeometry args={[0.17, 0.02, 8, 24]} />
        </mesh>
        <mesh material={mat.lens} position={[0.28, 0, 0.01]}>
          <circleGeometry args={[0.16, 24]} />
        </mesh>
        {/* Bridge */}
        <mesh material={mat.glasses} position={[0, 0, 0.02]}>
          <boxGeometry args={[0.2, 0.025, 0.02]} />
        </mesh>
        {/* Arms */}
        <mesh material={mat.glasses} position={[-0.46, 0, -0.15]}>
          <boxGeometry args={[0.02, 0.02, 0.4]} />
        </mesh>
        <mesh material={mat.glasses} position={[0.46, 0, -0.15]}>
          <boxGeometry args={[0.02, 0.02, 0.4]} />
        </mesh>
      </group>

      {/* Headphones */}
      <group>
        {/* Band */}
        <mesh material={mat.headphone} position={[0, 0.75, -0.05]} rotation={[0.08, 0, 0]}>
          <torusGeometry args={[0.72, 0.04, 10, 28, Math.PI]} />
        </mesh>
        {/* Left cup */}
        <group position={[-0.88, 0, 0]}>
          <mesh material={mat.headphone} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 20]} />
          </mesh>
          <mesh material={mat.pad} position={[0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.16, 0.04, 10, 20]} />
          </mesh>
          <mesh position={[-0.06, 0, 0]} material={mat.neonCyan} rotation={[0, 0, Math.PI / 2]}>
            <ringGeometry args={[0.06, 0.08, 20]} />
          </mesh>
        </group>
        {/* Right cup */}
        <group position={[0.88, 0, 0]}>
          <mesh material={mat.headphone} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 20]} />
          </mesh>
          <mesh material={mat.pad} position={[-0.06, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.16, 0.04, 10, 20]} />
          </mesh>
          <mesh position={[0.06, 0, 0]} material={mat.neonPink} rotation={[0, 0, Math.PI / 2]}>
            <ringGeometry args={[0.06, 0.08, 20]} />
          </mesh>
        </group>
      </group>

      {/* Neck + hoodie collar */}
      <mesh material={mat.skin} position={[0, -0.75, 0]}>
        <capsuleGeometry args={[0.2, 0.2, 8, 12]} />
      </mesh>
      <mesh material={mat.hoodie} position={[0, -1.0, 0]}>
        <capsuleGeometry args={[0.45, 0.2, 10, 14]} />
      </mesh>
    </group>
  );
}

export default function Face3DScene() {
  return (
    <div className="w-56 h-56 md:w-64 md:h-64 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} color="#e0e0ff" />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-2, 2, -1]} intensity={0.3} color="#00f0ff" />
        <pointLight position={[1, 0, 3]} intensity={0.6} color="#ff00aa" distance={8} />
        <pointLight position={[-1, 0, 3]} intensity={0.4} color="#00f0ff" distance={8} />
        <hemisphereLight args={['#1a1a3a', '#050510', 0.3]} />
        <Head />
      </Canvas>
    </div>
  );
}
