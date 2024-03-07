import LandingPage from "./components/LandingPage";
import { Navbar, Marquee } from "./components/index";

function App() {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App
