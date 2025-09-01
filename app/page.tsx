import AboutUs from "./components/about-us";
import Events from "./components/events";
import Header from "./components/header";
import InitiativeSection from "./components/initiative-section";
import InitiativeGrid from "./components/initiative-grid";
import Volunteer from "./components/volunteer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <AboutUs />
      <InitiativeSection />
      <InitiativeGrid />
      <Volunteer />
      <Events />
    </main>

  );
}
