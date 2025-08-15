import Devils from "../pages/Devils/devils";
import Fiends from "../pages/Fiends/fiends";
import Home from "../pages/Home/home";
import Horsemen from "../pages/Horsemen/horsemen";

export const navLinks = [
  { name: "Home", path: "/", component: Home },
  { name: "Horsemen", path: "/horsemen", component: Horsemen },
  { name: "Devils", path: "/devils", component: Devils },
  { name: "Fiends", path: "/fiends", component: Fiends },
];
