import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import StatsSection from "./components/stats/StatsSection";
import TracksSection from "./components/tracks/TracksSection";
import AgendaSection from "./components/agenda/AgendaSection";
import WorkshopsSection from "./components/workshops/WorkshopsSection";
import SpeakersSection from "./components/speakers/SpeakersSection";
import VenueSection from "./components/venue/VenueSection";
import SponsorsSection from "./components/sponsors/SponsorsSection";
import useRevealObserver from "./utils/useRevealObserver";
import "./App.css";

function App() {
  // Initialize global reveal animation observer
  useRevealObserver();

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TracksSection />
      <AgendaSection />
      <WorkshopsSection />
      <SpeakersSection />
      <VenueSection />
      <SponsorsSection />
    </div>
  );
}

export default App;
