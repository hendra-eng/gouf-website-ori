import { useMemo, useRef } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, RoundedBox, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { ZAFEB_MARK } from "@/components/Logo";

const TEAL = "#0D4746";
const TEAL_LIGHT = "#155E5B";
const MINT = "#34D399";
const GLOW = "#A7F3D0";
const PAPER = "#FAF9F5";

const EXTRUDE: THREE.ExtrudeGeometryOptions = { depth: 12, bevelEnabled: true, bevelThickness: 1.3, bevelSize: 1.1, bevelSegments: 3, curveSegments: 16 };

/* Ubah path SVG logo asli menjadi geometri 3D (ter-extrude), dipusatkan & diskalakan ke ~3.3 unit */
function useLogoGeometry() {
  return useMemo(() => {
    const loader = new SVGLoader();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg">${ZAFEB_MARK.paths.map(p=>`<path d="${p}"/>`).join('')}</svg>`;
    const { paths } = loader.parse(svg);
    const geos = paths.map((p) => new THREE.ExtrudeGeometry(SVGLoader.createShapes(p), EXTRUDE));
    const group = new THREE.Group();
    geos.forEach((g) => group.add(new THREE.Mesh(g)));
    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const scale = 3.3 / Math.max(size.x, size.y);
    return { geos, center, scale };
  }, []);
}

/* Logo zafeb 3D — hasil extrude dari path SVG logo asli */
function LogoG() {
  const group = useRef<THREE.Group>(null);
  const { geos, center, scale } = useLogoGeometry();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t * 0.35) * 0.4 + px * 0.5, 0.06);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py * 0.3 + Math.sin(t * 0.5) * 0.05, 0.06);
  });
  return (
    <group ref={group}>
      {/* panel teal di belakang logo */}
      <RoundedBox args={[4.3, 4.3, 0.35]} radius={0.6} smoothness={6} position={[0, 0, -0.45]} castShadow receiveShadow>
        <meshStandardMaterial color={TEAL} roughness={0.35} metalness={0.15} />
      </RoundedBox>
      <group scale={[scale, -scale, scale]} position={[-center.x * scale, center.y * scale, -0.2]}>
        {geos.map((g, i) => (
          <mesh key={i} geometry={g} castShadow>
            <meshStandardMaterial color={ZAFEB_MARK.colors[i]} emissive={MINT} emissiveIntensity={0.08} roughness={0.25} metalness={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* Koin melayang mengorbit logo */
function Coin({ angle, radius, tilt, speed }: { angle: number; radius: number; tilt: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius * tilt + Math.sin(t * 2) * 0.12, Math.sin(t) * 1.2);
    ref.current.rotation.x = Math.PI / 2 + Math.sin(t) * 0.5;
    ref.current.rotation.z = t * 0.8;
  });
  return (
    <mesh ref={ref} castShadow>
      <cylinderGeometry args={[0.3, 0.3, 0.08, 48]} />
      <meshStandardMaterial color={GLOW} roughness={0.2} metalness={0.7} emissive={MINT} emissiveIntensity={0.12} />
    </mesh>
  );
}

/* Panel grafik batang yang "hidup" */
function ChartSlab(props: ThreeElements["group"]) {
  const bars = useRef<THREE.Mesh[]>([]);
  const heights = useMemo(() => [0.5, 0.8, 0.65, 1.05, 0.9, 1.25], []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    bars.current.forEach((m, i) => {
      if (!m) return;
      const h = heights[i] * (1 + Math.sin(t * 1.2 + i * 0.7) * 0.12);
      m.scale.y = h;
      m.position.y = h / 2 + 0.06;
    });
  });
  return (
    <group {...props}>
      <RoundedBox args={[2.5, 0.12, 1.1]} radius={0.05} smoothness={4} receiveShadow>
        <meshStandardMaterial color={PAPER} roughness={0.6} />
      </RoundedBox>
      {heights.map((_, i) => (
        <mesh key={i} ref={(el) => { if (el) bars.current[i] = el; }} position={[-1.0 + i * 0.4, 0.5, 0]} castShadow>
          <boxGeometry args={[0.24, 1, 0.24]} />
          <meshStandardMaterial color={i % 2 === 0 ? TEAL_LIGHT : MINT} roughness={0.35} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

/* Kartu tipis melayang (seperti kartu metrik) */
function MetricCard(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <RoundedBox args={[1.5, 0.9, 0.08]} radius={0.12} smoothness={4} castShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </RoundedBox>
      <mesh position={[-0.3, 0.2, 0.05]}>
        <boxGeometry args={[0.7, 0.07, 0.02]} />
        <meshStandardMaterial color={TEAL} />
      </mesh>
      <mesh position={[-0.15, -0.05, 0.05]}>
        <boxGeometry args={[1.0, 0.14, 0.02]} />
        <meshStandardMaterial color={MINT} emissive={MINT} emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[-0.35, -0.3, 0.05]}>
        <boxGeometry args={[0.6, 0.05, 0.02]} />
        <meshStandardMaterial color="#cfe3dd" />
      </mesh>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 2, 3]} intensity={18} color={MINT} />
      <pointLight position={[3, -2, 4]} intensity={6} color={GLOW} />

      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.9}>
        <LogoG />
      </Float>

      {[0, 1.25, 2.5, 3.75, 5.0].map((a, i) => (
        <Coin key={i} angle={a} radius={2.15} tilt={0.35} speed={0.35} />
      ))}

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
        <ChartSlab position={[1.75, -1.7, 0.6]} rotation={[0.1, -0.45, 0.05]} scale={0.8} />
      </Float>
      <Float speed={2.1} rotationIntensity={0.35} floatIntensity={0.6}>
        <MetricCard position={[-1.95, 1.45, 0.3]} rotation={[0.08, 0.45, -0.05]} scale={0.9} />
      </Float>
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.8}>
        <MetricCard position={[1.9, 1.7, -0.3]} rotation={[-0.05, -0.4, 0.08]} scale={0.9} />
      </Float>

      <ContactShadows position={[0, -2.35, 0]} opacity={0.35} scale={10} blur={2.6} far={4} color={TEAL} />
    </>
  );
}
