import Header from "./components/header";
import HeroSection from "./components/hero";
import InfoSection from "./components/info-section";
import Sponsors from "./components/sponsors";
import SubHero from "./components/subhero";



export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <SubHero/>
      <Sponsors/>
      <InfoSection/>
    </div>
  );
}
