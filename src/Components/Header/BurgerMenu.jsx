import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.scss";

const links = [
  { label: "О нас", path: "/" },
  { label: "Мероприятия", path: "/events" },
  { label: "Культура", path: "/culture" },
  { label: "Сабантуй", path: "/sabantui" },
  { label: "Благотворительность", path: "/charity" },
  { label: "Мы вместе", path: "/we-are-together" },
];

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? styles.open : "";

  return (
    <>
      <button
        className={`${styles.burger} ${isOpen}`}
        onClick={toggleMenu}
      ></button>
      <div className={`${styles.background} ${isOpen}`}></div>
      <div className={`${styles.menu} ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={isMenuOpen ? styles.appear : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={toggleMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default BurgerMenu;
