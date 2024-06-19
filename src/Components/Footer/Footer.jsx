import React from "react";
import hamburgerMenu from "../../../public/hamburger-menu.svg";
import logoVkonakte from "../../../public/vkontakte.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__document">
            <a href="../../../public/charter.pdf" target="_blank">
              Устав
            </a>
          </div>
          <div className="footer__contacts contacts">
            <p>Председатель: Якутович Лилия Идрисовна</p>
            <p>
              <a className="contacts__phone" href="tel:+79050698829">
                +7 905 069 8829
              </a>
            </p>
            <p>
              <a className="contacts__mail" href="mailto:rahma_li@mail.ru">
                rahma_li@mail.ru
              </a>
            </p>
            <p>г. Прокопьевск, Кемеровская область, Кузбасс</p>
          </div>
          <div className="footer__nav nav">
            <a href="https://vk.com/tatar_prk">
              <img
                className="nav__vkontakte"
                src={logoVkonakte}
                alt="logo-vkontakte"
              />
            </a>
            <img
              className="nav__hamburgerMenu"
              src={hamburgerMenu}
              alt="hamburgerMenu"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
