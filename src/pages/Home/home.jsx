import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/footer";
import Hero from "../../components/HeroSection/hero";
import { featureK, featureQ, featureY, hero } from "../../constants/home";

function Home() {
  return (
    <>
      <Hero {...hero} />
      <Feature {...featureK} />
      <Feature {...featureQ} />
      <Feature {...featureY} />
      <Footer />
    </>
  );
}
export default Home;
