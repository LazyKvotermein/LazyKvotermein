import './App.css';
import '@google/model-viewer';

function App() {
  return (
    <div className="App">
      <model-viewer
          src="https://lazykvotermein.github.io/LazyKvotermein/build/stonehenge.glb"
          ios-src="https://lazykvotermein.github.io/LazyKvotermein/build/stonehenge.glb"
          alt="A 3D model of an astronaut"
          ar
          auto-rotate
          camera-controls></model-viewer>
      <model-viewer
          src="https://lazykvotermein.github.io/LazyKvotermein/build/F-16D.glb"
          alt="A 3D model of an astronaut"
          ar
          auto-rotate
          camera-controls></model-viewer>
      <model-viewer
           src="https://lazykvotermein.github.io/LazyKvotermein/build/gun.glb"
            ios-src="https://modelviewer.dev/shared-assets/models/build/gun.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            camera-controls></model-viewer>
        <model-viewer
            src="https://lazykvotermein.github.io/LazyKvotermein/build/building.glb"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            camera-controls></model-viewer>
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
