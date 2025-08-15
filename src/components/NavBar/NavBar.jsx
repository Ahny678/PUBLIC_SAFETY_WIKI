import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
