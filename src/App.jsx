import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import { navLinks } from "./constants/navLinks";
import Footer from "./components/Footer/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: "6rem" }}>
        <Routes>
          {navLinks.map((link) => (
            <Route
              key={link.path}
              path={link.path}
              element={<link.component />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  );
}
