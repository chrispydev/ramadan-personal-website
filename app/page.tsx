import AboutUs from "./components/about-us";
import Header from "./components/header";
import Initiative from "./components/initiative";
import InitiativeGrid from "./components/initiative-grid";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <Initiative />
      <InitiativeGrid />
    </main>

  );
}
