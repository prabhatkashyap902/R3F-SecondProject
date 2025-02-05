import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./components/Scene";
import { SoftShadows } from "@react-three/drei";

function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 5, 15] }} shadows>
        <SoftShadows
          frustum={3.75}
          size={25}
          near={9}
          samples={17}
          rings={11} // Rings and samples control the softness
        />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
