import React from "react";
import hamburgerMenu from "/hamburger-menu.svg";
import logoVkonakte from "/vkontakte.svg";
import Footer_nav from "./Footer_nav";

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
            <p>
              Общественная организация "Местная национально-культурная автономия
              татар" г.Прокопьевск. Председатель: Якутович Лилия Идрисовна.
            </p>
            <div className="contacts__wrapper">
              <div className="contacts__logos">
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
                <p className="contacts__address">
                  г.Прокопьевск, Кемеровская область, Кузбасс
                </p>
                <a href="https://vk.com/tatar_prk">
                  <img
                    className="contacts__vkontakte"
                    src={logoVkonakte}
                    alt="logo-vkontakte"
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Footer_nav />
          </div>
        </div>
      </footer>
    </div>
  );
}
