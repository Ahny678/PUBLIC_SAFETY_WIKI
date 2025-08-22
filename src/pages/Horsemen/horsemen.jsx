import ImageGrid from "../../components/ImageGrid/ImageGrid";
import { allHorsemen } from "../../constants/horsemen";
import { heroHM } from "../../constants/horsemen";
import Hero from "../../components/HeroSection/hero";
function Horsemen() {
  return (
    <>
      <Hero {...heroHM} />
      {allHorsemen.map((horseman, index) => (
        <ImageGrid key={index} horseman={horseman} />
      ))}
    </>
  );
}

export default Horsemen;
