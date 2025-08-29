import AboutUs from "./components/about-us";
import Events from "./components/events";
import Header from "./components/header";
import Initiative from "./components/initiative";
import InitiativeGrid from "./components/initiative-grid";
import Volunteer from "./components/volunteer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <AboutUs />
      <Initiative />
      <InitiativeGrid />
      <Volunteer />
      <Events />
    </main>

  );
}
