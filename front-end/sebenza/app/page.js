import Header from "./components/header";
import HeroSection from "./components/hero";
import Sponsors from "./components/sponsors";
import SubHero from "./components/subhero";



export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <SubHero/>
      <Sponsors/>
    </div>
  );
}
