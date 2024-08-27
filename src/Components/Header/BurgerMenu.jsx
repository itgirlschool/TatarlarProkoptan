import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.scss";

const links = [
  {
    label: "О нас",
    path: "/",
  },
  {
    label: "Мероприятия",
    path: "/events",
  },
  {
    label: "Культура",
    path: "/culture",
  },
  {
    label: "Сабантуй",
    path: "/sabantui",
  },
  {
    label: "Благотворительность",
    path: "/charity",
  },
  {
    label: "Мы вместе",
    path: "/we-are-together",
  },
  {
    label: "Наши активисты",
    path: "/our-activists",
  },
  {
    label: "Контакты",
    path: "/contacts",
  },
  {
    label: "Новвости",
    path: "/news",
  },
  {
    label: "Выйти из аккаунта",
    path: "/authorizationpage",
  },
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
              className={({ isActive }) =>
                `${isMenuOpen ? styles.appear : ""} ${
                  link.label === "Выйти из аккаунта"
                    ? styles.yellowText
                    : ""
                } ${isActive ? styles.active : ""}`
              }
              style={{
                animationDelay: `0.${index + 1}s`,
              }}
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
