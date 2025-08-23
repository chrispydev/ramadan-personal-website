import AboutUs from "./components/about-us";
import Header from "./components/header";
import Initiative from "./components/initiative";
import InitiativeGallery from "./components/initiative-gallery";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <Initiative />
      <InitiativeGallery />
    </main>

  );
}
