import './App.css';
import '@google/model-viewer';

function App() {
  return (
    <div className="App">
      <model-viewer
           src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            camera-controls></model-viewer>
    </div>
  );
}

export default App;
