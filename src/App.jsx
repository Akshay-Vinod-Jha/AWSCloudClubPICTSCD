import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import StatsSection from "./components/stats/StatsSection";
import TracksSection from "./components/tracks/TracksSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TracksSection />
    </div>
  );
}

export default App;
