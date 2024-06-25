import React from "react";
import style from "./Header.module.scss";

export default function NavLink() {
  return (
    <ul>
      <li className={style.nav__link}>О нас</li>
      <li className={style.nav__link}>Мероприятия</li>
      <li className={style.nav__link}>Культура</li>
      <li className={style.nav__link}>Сабантуй</li>
      <li className={style.nav__link}>Благотворительность</li>
      <li className={style.nav__link}>Мы вместе</li>
    </ul>
  );
}
