import LandingPage from "./components/LandingPage";
import { Navbar, Marquee, About } from "./components/index";

function App() {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  )
}

export default App
