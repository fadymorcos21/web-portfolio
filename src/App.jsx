import BackgroundAtmosphere from "./components/BackgroundAtmosphere";
import Navbar from "./components/Navbar";
import SideToc from "./components/SideToc";
import AboutSection from "./sections/AboutSection";
import AppsSection from "./sections/AppsSection";
import ClientPlatformsSection from "./sections/ClientPlatformsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-midnight-950 font-body text-slate-100">
      <BackgroundAtmosphere />
      <div className="relative z-10">
        <Navbar />
        <SideToc />
        <main>
          <HeroSection />
          <ClientPlatformsSection />
          <ExperienceSection />
          <AppsSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
