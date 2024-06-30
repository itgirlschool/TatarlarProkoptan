import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homepage from "../../assets/homepage.jpg";
import style from "./HomePage.module.scss";
import ModalHomePage from "./ModalHomePage.jsx";

export default function HomePage() {
  const [modalActive, setModalActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 465);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const handleHistoryClick = () => {
    if (isMobile) {
      navigate("/homePageMobile");
    } else {
      setModalActive(true);
    }
  };

  return (
    <>
      <h1 className={style.title}>Татары Прокопьевска</h1>
      <div className={style.info}>
        <div className={style.video__container}>
          <h2 className={style.title__video}>Прокопьевск</h2>
          <p>Город на юге Кузбасса. 189 км от столицы</p>
          <div className={style.video}>
            <iframe
              className={style.iframe}
              src="https://www.youtube.com/embed/bWqBGrflpqE?si=GOt3IbzR3VF3anQT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={style.info__video}>
          <div>
            <div className={style.info__text}>
              <span className={style.text}>Основан:</span> 1931 год
            </div>
            <div className={style.info__text}>
              <span className={style.text}>Население:</span> 196 406
              человек&#42;
            </div>
            <div className={style.info__text}>
              <span className={style.text}>Численность татар:</span> 7412
              человек&#42;&#42;
            </div>
          </div>
          <button className={style.button} onClick={handleHistoryClick}>
            История
          </button>
          <ModalHomePage active={modalActive} setActive={setModalActive} />
        </div>
      </div>
      <div className={style.note}>
        <p>*Данные о населении актуальны на 2024 год</p>
        <p>**Данные о численности татар актуальны на 2010 год</p>
      </div>
      <p className={style.welcome__title}>Исенмесез Дуслар! </p>
      <div className={style.welcome}>
        <div className={style.container__welcomeimg}>
          <img
            className={style.welcome__img}
            src={homepage}
            alt="татары Прокопьевска"
          />
        </div>
        <div className={style.welcome__text}>
          <p>
            Общественная организация "Татарская национально-культурная автономия
            города Прокопьевск" приветствует вас на своем сайте! Целью нашей
            организации является объединение граждан Российской Федерации,
            относящих себя к этнической общности татар, и проживающих на
            территории города Прокопьевск и Кемеровской области-Кузбасс. Мы
            содействуем возрождению и развитию национального самосознания и
            самобытности татар, проживающих в Прокопьевске, устанавливаем и
            поддерживаем культурные связи с татарами других регионов РФ и мира.
            Мы содействуем изучению и сохранению татарского языка, организации
            национального краеведения и охране национальных памятников истории и
            культуры. Мы знакомим широкую общественность с историческим и
            культурным наследием, а также традициям и историей татарского
            народа. Мы организуем и проводим мероприятия и встречи.
          </p>
          <p className={style.welcome__end}>Добро пожаловать! Рахим итегез!</p>
        </div>
      </div>
    </>
  );
}
