import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <main className="app transition-all ease-in">
        <h4 className="head-text">Virtual Dressing Room</h4>
        <Home/>
        <Canvas/>
        <Customizer/>
      </main>
    </>
  )
}

export default App
