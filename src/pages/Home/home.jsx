import Feature from "../../components/Feature/Feature";
import Hero from "../../components/HeroSection/hero";
import { featureK, featureQ, featureY, hero } from "../../constants/home";

function Home() {
  return (
    <>
      <Hero {...hero} />
      <Feature {...featureK} />
      <Feature {...featureQ} />
      <Feature {...featureY} />
    </>
  );
}
export default Home;
