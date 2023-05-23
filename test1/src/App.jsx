import { Canvas } from '@react-three/fiber';
import './App.css';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        {/* <ambientLight intensity={0.1} /> */}
        <directionalLight color="white" position={[0, 2, 1]} />
        <mesh
          rotation={[0, 45, 0]}>
          <boxGeometry args={[3, 3, 2]} />
          <meshStandardMaterial />

        </mesh>
      </Canvas>
    </div>
  )
}

export default App
