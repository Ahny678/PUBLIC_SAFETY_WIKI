import Devils from "../pages/Devils/devils";
import Home from "../pages/Home/home";
import Horsemen from "../pages/Horsemen/horsemen";
import Hunters from "../pages/Hunters/hunters";

export const navLinks = [
  { name: "Home", path: "/", component: Home },
  { name: "Horsemen", path: "/horsemen", component: Horsemen },
  { name: "Devils", path: "/devils", component: Devils },
  { name: "Hunters", path: "/hunters", component: Hunters },
];
