import LandingPage from "./components/LandingPage";
import { Navbar, Marquee, About, PlaySection } from "./components/index";

function App() {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <PlaySection />
    </div>
  )
}

export default App
