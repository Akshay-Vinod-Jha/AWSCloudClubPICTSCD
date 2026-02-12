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
import CommunityJourneySection from "./components/community-journey/CommunityJourneySection";
import TeamSection from "./components/team/TeamSection";
import PastEventsSection from "./components/past-events/PastEventsSection";
import RegistrationSection from "./components/registration/RegistrationSection";
import Footer from "./components/footer/Footer";
import useRevealObserver from "./utils/useRevealObserver";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  // Initialize global reveal animation observer
  useRevealObserver();

  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <StatsSection />
      {/* <TracksSection /> */}
      <div id="agenda">
        <AgendaSection />
      </div>
      {/* <WorkshopsSection /> */}
      <div id="speakers">
        <SpeakersSection />
      </div>
      <div id="venue">
        <VenueSection />
      </div>
      <div id="sponsors">
        <SponsorsSection />
      </div>
      <div id="register">
        <RegistrationSection />
      </div>
      <div id="connect">
        <CommunityJourneySection />
      </div>
      {/* <TeamSection /> */}
      {/* <PastEventsSection /> */}
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

//<CommunityJourneySection /> contact us
