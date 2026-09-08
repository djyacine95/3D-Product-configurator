import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

type ChairProps = {
  fabric: string
  wood: string
}

function Chair({ fabric, wood }: ChairProps) {
  const legs: [number, number][] = [
    [-0.3, -0.28],
    [0.3, -0.28],
    [-0.3, 0.28],
    [0.3, 0.28],
  ]

  return (
    <group position={[0, -0.55, 0]}>
      {legs.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.28, z]} castShadow>
          <cylinderGeometry args={[0.032, 0.028, 0.56, 16]} />
          <meshStandardMaterial color={wood} roughness={0.42} metalness={0.08} />
        </mesh>
      ))}

      <mesh position={[0, 0.58, 0]} castShadow>
        <boxGeometry args={[0.78, 0.07, 0.72]} />
        <meshStandardMaterial color={wood} roughness={0.4} />
      </mesh>

      <mesh position={[0, 0.66, 0]} castShadow>
        <boxGeometry args={[0.74, 0.1, 0.68]} />
        <meshStandardMaterial color={fabric} roughness={0.7} />
      </mesh>

      <mesh position={[0, 1.12, -0.3]} castShadow>
        <boxGeometry args={[0.76, 0.78, 0.08]} />
        <meshStandardMaterial color={wood} roughness={0.4} />
      </mesh>

      <mesh position={[0, 1.14, -0.24]} castShadow>
        <boxGeometry args={[0.68, 0.68, 0.08]} />
        <meshStandardMaterial color={fabric} roughness={0.7} />
      </mesh>

      <mesh position={[-0.4, 0.92, 0.02]} rotation={[0, 0, 0.08]} castShadow>
        <boxGeometry args={[0.07, 0.18, 0.58]} />
        <meshStandardMaterial color={wood} roughness={0.4} />
      </mesh>
      <mesh position={[0.4, 0.92, 0.02]} rotation={[0, 0, -0.08]} castShadow>
        <boxGeometry args={[0.07, 0.18, 0.58]} />
        <meshStandardMaterial color={wood} roughness={0.4} />
      </mesh>
    </group>
  )
}

const fabrics = [
  { id: 'sand', color: '#c4a484' },
  { id: 'moss', color: '#5f735c' },
  { id: 'ink', color: '#2b3344' },
  { id: 'clay', color: '#b85c38' },
]

type Props = {
  fabric: string
  onFabric: (color: string) => void
}

export function ChairDemo({ fabric, onFabric }: Props) {
  return (
    <div className="viewer-card">
      <Canvas
        camera={{ position: [2.1, 1.4, 2.4], fov: 38 }}
        shadows
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#1c1612']} />
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.35}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Chair fabric={fabric} wood="#6b4a32" />
        <ContactShadows position={[0, -0.55, 0]} opacity={0.45} blur={2.4} />
        <OrbitControls enablePan={false} minDistance={2.2} maxDistance={5} />
      </Canvas>
      <div className="viewer-ui">
        <p className="viewer-caption">Live starter demo · drag to orbit</p>
        <div className="swatches">
          {fabrics.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`swatch${fabric === f.color ? ' active' : ''}`}
              style={{ background: f.color }}
              aria-label={`Fabric ${f.id}`}
              onClick={() => onFabric(f.color)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
