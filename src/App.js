import './App.css';
import '@google/model-viewer';

function App() {
  return (
    <div className="App">
      {/* <model-viewer
           src="https://lazykvotermein.github.io/LazyKvotermein/build/Horse.glb"
            // ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            autoplay
            camera-controls></model-viewer>
      <model-viewer
           src="https://lazykvotermein.github.io/LazyKvotermein/build/Lantern.glb"
            // ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            autoplay
            camera-controls></model-viewer> */}
        <model-viewer
            src="https://lazykvotermein.github.io/LazyKvotermein/Horse.glb"
            ios-src="https://lazykvotermein.github.io/LazyKvotermein/build/1.usdz"
            alt="A 3D model of an astronaut"
            ar
            auto-rotate
            autoplay
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
