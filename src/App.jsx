import Header from './components/Header'
// import Skyline from './components/Skyline'
import PixelCity from './components/PixelCity'
import Rain from './components/Rain'

function App() {
  return (
    <>
      <PixelCity />
      <Header />
      <canvas id="cityCanvas" className="city-canvas"></canvas>
      <Rain />
    </>
  );
}

export default App
