import LandingPage from "./components/LandingPage";
import { Navbar, Marquee, About, PlaySection, Features } from "./components/index";

function App() {

  return (
    <div className="w-full h-screen bg-zinc-100">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <PlaySection />
      <Features />
    </div>
  )
}

export default App
