import { useState } from "react";
import styles from "./BurgerMenu.module.scss";

const links = [
  "О нас",
  "Мероприятия",
  "Культура",
  "Сабантуй",
  "Благотворительность",
  "Мы вместе",
];

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? styles.open : "";

  const onClick = (href) => {
    toggleMenu();
    console.log(`Clicked on ${href}`);
  };

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
            <a
              key={link}
              className={isMenuOpen ? styles.appear : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default BurgerMenu;
