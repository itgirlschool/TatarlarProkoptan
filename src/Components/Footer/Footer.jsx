import React from "react";
import styles from "./Footer.module.scss";
import logoVkonakte from "/vkontakte.svg";
import Footer_nav from "./Footer_nav";
import pattern from "/pattern.svg";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__document}>
            <a href="../../../public/charter.pdf" target="_blank">
              Устав
            </a>
          </div>
          <div className={`${styles.footer__contacts} contacts`}>
            <p>
              Общественная организация "Местная национально-культурная автономия
              татар" г.Прокопьевск. Председатель: Якутович Лилия Идрисовна.
            </p>
            <div className={styles.contacts__wrapper}>
              <div className={styles.contacts__logos}>
                <p>
                  <a className={styles.contacts__phone} href="tel:+79050698829">
                    +7 905 069 8829
                  </a>
                </p>
                <p>
                  <a
                    className={styles.contacts__mail}
                    href="mailto:rahma_li@mail.ru"
                  >
                    rahma_li@mail.ru
                  </a>
                </p>
                <p className={styles.contacts__address}>
                  г.Прокопьевск, Кемеровская область, Кузбасс
                </p>
                <a href="https://vk.com/tatar_prk">
                  <img
                    className={styles.contacts__vkontakte}
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
        <img
          alt="pattern"
          className={`${styles.pattern} ${styles["pattern-left"]}`}
          src={pattern}
        />
        <img
          alt="pattern"
          className={`${styles.pattern} ${styles["pattern-right"]}`}
          src={pattern}
        />
      </footer>
    </div>
  );
}
