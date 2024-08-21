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
  { label: "Наши активисты", path: "/our-activists" },
  { label: "Контакты", path: "/contacts" },
  { label: "Новости", path: "/news" },
  { label: "Авторизация", path: "/authorizationpage" },
   ];

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? styles.open : "";
  const visibleLinks = isAuthenticated
    ? [...links, { label: "Выйти из аккаунта", path: "/logout" }]
    : links;

  return (
    <>
      <button
        className={`${styles.burger} ${isOpen}`}
        onClick={toggleMenu}
      ></button>
      <div className={`${styles.background} ${isOpen}`}></div>
      <div className={`${styles.menu} ${isOpen}`}>
        <nav>
          {visibleLinks.map((link, index) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={`${isMenuOpen ? styles.appear : ""} ${
                link.label === "Выйти из аккаунта" ? styles.yellowText : ""
              }`}
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
