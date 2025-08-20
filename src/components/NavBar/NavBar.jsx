import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import styles from "./NavBar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.NavContainer}>
      <h3 className={styles.Title}>Public Safety Wiki</h3>
      <ul className={styles.NavList}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? styles.ActiveLink : undefined
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
