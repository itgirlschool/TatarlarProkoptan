import React from "react";
import pattern from "/pattern.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={`${styles.footer__contacts} ${styles.contacts}`}>
          <p className={styles.footer__title}>
            Общественная организация "Местная национально-культурная автономия
            татар" г.Прокопьевск. Председатель: Якутович Лилия Идрисовна.
          </p>
          <div className={styles.contacts__wrapper}>
            <div className={styles.logos__wrapper}>
              <a
                className={styles.contacts__phone}
                href="tel:+79050698829"
                aria-label="Позвонить по телефону +7 905 069 8829"
              >
                +7 905 069 8829
              </a>
              <a
                className={styles.contacts__mail}
                href="mailto:rahma_li@mail.ru"
                aria-label="Отправить письмо на rahma_li@mail.ru"
              >
                rahma_li@mail.ru
              </a>
            </div>
            <div className={styles.logos__wrapper}>
              <p className={styles.contacts__address}>
                г.Прокопьевск, Кемеровская область, Кузбасс
              </p>
              <a
                href="https://vk.com/tatar_prk"
                className={styles.contacts__vkontakte}
                aria-label="Перейти на страницу ВКонтакте"
              ></a>
            </div>
          </div>
        </div>
        <img
          alt="Декоративный элемент слева"
          className={`${styles.pattern} ${styles["pattern-left"]}`}
          src={pattern}
        />
        <img
          alt="Декоративный элемент справа"
          className={`${styles.pattern} ${styles["pattern-right"]}`}
          src={pattern}
        />
      </div>
    </footer>
  );
}
