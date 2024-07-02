import React, { useState } from "react";

import style from './Charity.module.scss';

import CharityModal from './CharityModal';

import phone from '../../assets/icon/phoneCharity.svg';
import email from '../../assets/icon/emailCharity.svg';
import usmuch from '../../assets/icon/us_much.svg';
import world from '../../assets/icon/world.svg';

const Charity = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [counter, setCounter] = useState(150);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>

          <h2 className={style.content__title}>Каждый может принять участие в благотворительной помощи и волонтерстве</h2>
          <p className={style.content__text}>Хочешь присоединиться к команде волонтеров?</p>

          <div className={style.content__contacts}>
            <div className={style.content__contacts_phone}>
              <img src={phone} alt="Phone" className={style.icon} />
              <a href="tel:+79050698829">+7 905 069 8829</a>
            </div>

            <div className={style.content__contacts_email}>
              <img src={email} alt="E-mail" className={style.icon} />
              <a href="mailto:RAHMA_LI@MAIL.RU">RAHMA_LI@MAIL.RU</a>
            </div>
          </div>

          <div className={style.content__join}>
            <button
              className={`${style.content__join_btn} ${style.pulse}`}
              onClick={openModal}>
              Принять участие
            </button>

            <div className={style.content__join_counter}>
              <img src={usmuch} alt="Us much" className={style.icon} />
              <p><span>{counter}</span>+</p>
            </div>
          </div>
        </div>

        <div className={style.pictures}>
          <img src={world} alt="Follow Us world" className='' />
        </div>
      </div>

      <CharityModal
        openModal={modalOpen}
        closeModal={closeModal}
        updateCounter={updateCounter} />
    </section>
  );
};

export default Charity;
