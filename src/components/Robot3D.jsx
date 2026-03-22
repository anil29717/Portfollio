import React, { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, useGLTF, useAnimations, Html } from '@react-three/drei';
import * as THREE from 'three';

const THEMES = [
  { primary: '#00f0ff', secondary: '#ff00aa', accent: '#7b00ff' },
  { primary: '#ff00aa', secondary: '#00ff88', accent: '#ffaa00' },
  { primary: '#00ff88', secondary: '#00f0ff', accent: '#ff00aa' },
];

const EMOTES = [
  { name: 'Idle', label: '// idle' },
  { name: 'Wave', label: '// wave()' },
  { name: 'Dance', label: '// dance()' },
  { name: 'ThumbsUp', label: '// thumbsUp()' },
  { name: 'Jump', label: '// jump()' },
  { name: 'Punch', label: '// punch()' },
  { name: 'Running', label: '// run()' },
  { name: 'Yes', label: '// yes()' },
  { name: 'No', label: '// no()' },
];

const CODE_SNIPPETS = [
  ['const dev = new Developer();', 'dev.setStack("MERN");', 'dev.build(awesome);'],
  ['async function deploy() {', '  await docker.push();', '  return "live!";', '}'],
  ['React.useState(() => {', '  fetchData().then(go);', '});'],
  ['git commit -m "🚀"', 'git push origin main', '// deployed ✓'],
  ['const skills = [', '  "React", "Node",', '  "MongoDB", "AWS"', '];'],
];

/* ── Neon circular platform ── */
function Platform({ theme }) {
  const ringRef = useRef();
  useFrame((s) => {
    if (ringRef.current) ringRef.current.rotation.z = s.clock.getElapsedTime() * 0.3;
  });
  return (
    <group position={[0, -1.2, 0]}>
      <mesh ref={ringRef} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.65, 0.012, 8, 64]} />
        <meshStandardMaterial color={theme.primary} emissive={theme.primary} emissiveIntensity={2} />
      </mesh>
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.005, 8, 64]} />
        <meshStandardMaterial color={theme.secondary} emissive={theme.secondary} emissiveIntensity={1} transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.63, 48]} />
        <meshBasicMaterial color={theme.primary} transparent opacity={0.04} />
      </mesh>
      <pointLight position={[0, 0.15, 0]} intensity={1} color={theme.primary} distance={3} />
    </group>
  );
}

/* ── Holographic code panels that appear on click ── */
function CodePanel({ snippet, position, rotation, theme, startTime }) {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    const elapsed = s.clock.getElapsedTime() - startTime;
    if (elapsed > 3) { ref.current.visible = false; return; }
    const fadeIn = Math.min(elapsed * 3, 1);
    const fadeOut = elapsed > 2.2 ? 1 - (elapsed - 2.2) / 0.8 : 1;
    const opacity = fadeIn * fadeOut;
    ref.current.scale.setScalar(opacity);
    ref.current.position.y = position[1] + elapsed * 0.15;
  });
  return (
    <group ref={ref} position={position} rotation={rotation}>
      <Html transform distanceFactor={4} style={{ pointerEvents: 'none' }}>
        <div style={{
          background: 'rgba(10,10,20,0.85)',
          border: `1px solid ${theme.primary}40`,
          borderRadius: '6px',
          padding: '8px 12px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          lineHeight: '1.6',
          color: theme.primary,
          boxShadow: `0 0 20px ${theme.primary}20`,
          backdropFilter: 'blur(8px)',
          whiteSpace: 'pre',
          minWidth: '160px',
        }}>
          {snippet.map((line, i) => (
            <div key={i} style={{ color: i === 0 ? theme.primary : i % 2 === 0 ? '#7ee787' : '#c9d1d9' }}>{line}</div>
          ))}
        </div>
      </Html>
    </group>
  );
}

/* ── The Robot Character ── */
function Robot({ theme, emoteIdx, onEmoteEnd }) {
  const { scene, animations } = useGLTF('/character.glb');
  const groupRef = useRef();
  const bodyRef = useRef();
  const { actions, mixer } = useAnimations(animations, groupRef);
  const currentAction = useRef(null);
  const { pointer } = useThree();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    const emote = EMOTES[emoteIdx];
    if (!actions[emote.name]) return;

    const newAction = actions[emote.name];
    if (currentAction.current && currentAction.current !== newAction) {
      currentAction.current.fadeOut(0.3);
    }

    newAction.reset().fadeIn(0.3).play();
    if (emote.name !== 'Idle') {
      newAction.setLoop(THREE.LoopOnce, 1);
      newAction.clampWhenFinished = true;
    } else {
      newAction.setLoop(THREE.LoopRepeat);
    }
    currentAction.current = newAction;

    const onFinish = () => {
      if (emote.name !== 'Idle') onEmoteEnd();
    };
    mixer.addEventListener('finished', onFinish);
    return () => mixer.removeEventListener('finished', onFinish);
  }, [emoteIdx, actions, mixer, onEmoteEnd]);

  useFrame(() => {
    if (bodyRef.current) {
      const targetY = pointer.x * 0.5;
      const targetX = pointer.y * -0.12;
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, targetY, 0.04);
      bodyRef.current.rotation.x = THREE.MathUtils.lerp(bodyRef.current.rotation.x, targetX, 0.04);
    }
  });

  return (
    <group ref={bodyRef}>
      <group ref={groupRef} position={[0, -1.2, 0]} scale={[0.55, 0.55, 0.55]}>
        <primitive object={scene} />
      </group>
      <pointLight position={[-0.6, 0.3, 0.5]} intensity={1} color={theme.primary} distance={4} />
      <pointLight position={[0.6, -0.1, 0.5]} intensity={0.5} color={theme.secondary} distance={3} />
      <spotLight
        position={[0, 2, 1]}
        angle={0.5}
        penumbra={0.8}
        intensity={1.5}
        color={theme.primary}
        distance={6}
      />
    </group>
  );
}

/* ── Orbiting particles ── */
function OrbitParticles({ theme }) {
  const ref = useRef();
  const particles = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    angle: (i / 30) * Math.PI * 2,
    radius: 1.5 + Math.random() * 1,
    y: (Math.random() - 0.5) * 2.5,
    speed: 0.2 + Math.random() * 0.35,
    size: 0.008 + Math.random() * 0.018,
    phase: Math.random() * Math.PI * 2,
  })), []);

  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      const p = particles[i];
      const a = p.angle + t * p.speed;
      child.position.set(
        Math.cos(a) * p.radius,
        p.y + Math.sin(t * 0.5 + p.phase) * 0.25,
        Math.sin(a) * p.radius
      );
    });
  });

  return (
    <group ref={ref}>
      {particles.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? theme.secondary : i % 3 === 1 ? theme.accent : theme.primary}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Emote burst ring ── */
function EmoteBurst({ active, theme }) {
  const ref = useRef();
  const startRef = useRef(0);

  useEffect(() => {
    if (active) startRef.current = 0;
  }, [active]);

  useFrame((s, delta) => {
    if (!ref.current || !active) { if (ref.current) ref.current.visible = false; return; }
    startRef.current += delta;
    const t = startRef.current;
    if (t > 1) { ref.current.visible = false; return; }
    ref.current.visible = true;
    const scale = 0.5 + t * 3;
    ref.current.scale.set(scale, scale, scale);
    ref.current.material.opacity = (1 - t) * 0.6;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]} visible={false}>
      <torusGeometry args={[0.6, 0.03, 8, 48]} />
      <meshBasicMaterial color={theme.primary} transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ── Main Scene ── */
function Scene() {
  const [themeIdx, setThemeIdx] = useState(0);
  const [emoteIdx, setEmoteIdx] = useState(0);
  const [showBurst, setShowBurst] = useState(false);
  const [codePanels, setCodePanels] = useState([]);
  const burstKey = useRef(0);
  const theme = THEMES[themeIdx];
  const { clock } = useThree();

  const triggerEmote = useCallback(() => {
    setEmoteIdx(prev => {
      const next = (prev + 1) % EMOTES.length;
      if (next === 0) return 1;
      return next;
    });
    setThemeIdx(i => (i + 1) % THEMES.length);
    burstKey.current += 1;
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 1100);

    const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    const angle = Math.random() * Math.PI * 2;
    const r = 1.5 + Math.random() * 0.4;
    setCodePanels(prev => [
      ...prev.slice(-3),
      {
        id: Date.now(),
        snippet,
        position: [Math.cos(angle) * r, 0.5 + Math.random() * 0.8, Math.sin(angle) * r],
        rotation: [0, -angle + Math.PI, 0],
        startTime: clock.getElapsedTime(),
      },
    ]);
  }, [clock]);

  const handleEmoteEnd = useCallback(() => {
    setEmoteIdx(0);
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} color="#c0c0ff" />
      <directionalLight position={[3, 5, 4]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-3, 3, -2]} intensity={0.4} color={theme.secondary} />
      <pointLight position={[0, 3, 3]} intensity={1.5} color={theme.primary} distance={8} />
      <hemisphereLight args={['#1a1a3a', '#0a0a1a', 0.5]} />

      <Float speed={1} rotationIntensity={0.005} floatIntensity={0.03}>
        <group onClick={(e) => { e.stopPropagation(); triggerEmote(); }}>
          <mesh visible={false}><boxGeometry args={[3, 4, 3]} /></mesh>
          <Robot theme={theme} emoteIdx={emoteIdx} onEmoteEnd={handleEmoteEnd} />
          <Platform theme={theme} />
          <EmoteBurst key={burstKey.current} active={showBurst} theme={theme} />
          {codePanels.map(p => (
            <CodePanel key={p.id} snippet={p.snippet} position={p.position} rotation={p.rotation} theme={theme} startTime={p.startTime} />
          ))}
        </group>
      </Float>

      <OrbitParticles theme={theme} />

      <Html position={[0, -1.6, 0]} center style={{ pointerEvents: 'none' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: theme.primary,
          textAlign: 'center',
          opacity: 0.6,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          textShadow: `0 0 10px ${theme.primary}60`,
          whiteSpace: 'nowrap',
        }}>
          {EMOTES[emoteIdx].label}
        </div>
      </Html>
    </>
  );
}

export default function DevRoom3DScene() {
  return (
    <div className="w-full h-full relative cursor-pointer select-none">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      {/* <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] text-[10px] text-[#00f0ff]/20 tracking-[0.2em] uppercase pointer-events-none">
        click bot for emotes
      </div> */}
    </div>
  );
}

useGLTF.preload('/character.glb');
