import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./BurgerMenu.module.scss";

const links = [
  { name: "О нас", path: "/" },
  { name: "События", path: "/events" },
  { name: "Культура", path: "/culture" },
  { name: "Сабантуй", path: "/sabantui" },
  { name: "Благотворительность", path: "/charity" },
  { name: "Мы вместе", path: "/we-are-together" },
];

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? style.open : "";

  return (
    <>
      <button
        className={`${style.burger} ${isOpen}`}
        onClick={toggleMenu}
      ></button>
      <div className={`${style.background} ${isOpen}`}></div>
      <div className={`${style.menu} ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={toggleMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default BurgerMenu;
