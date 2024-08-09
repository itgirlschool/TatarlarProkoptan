import React, { useEffect, useState } from "react";

import style from "./Contacts.module.scss";

import Charter from "./Charter";
import phone from "../../assets/icon/phoneCharity.svg";
import email from "../../assets/icon/emailCharity.svg";
import contacts from "../../assets/images/contacts.svg";
import document from "../../assets/images/document.svg";

export default function Contacts() {
  const [isCharterOpen, setIsCharterOpen] = useState(false);

  const onHandleCharter = (value) => {
    setIsCharterOpen(!isCharterOpen);
    setIsCharterOpen(value);
  };

  return (
    <section>
      <div className={style.container}>
        <div className={style.content__outer}>
          <div className={style.content}>
            <h2 className={style.content__title}>Контакты</h2>
            <p className={style.content__name}>
              ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ "МЕСТНАЯ НАЦИОНАЛЬНО-КУЛЬТУРНАЯ АВТОНОМИЯ
              ТАТАР"
            </p>
            <p className={style.content__name}>
              г. Прокопьевск, Кемеровская область
            </p>

            <div className={style.content__contacts}>
              <div className={style.content__contacts_data}>
                <p className={style.content__contacts_dataname}>ОГРН</p>
                <p>1244200007941</p>
              </div>
              <div className={style.content__contacts_data}>
                <p className={style.content__contacts_dataname}>
                  Дата присвоения ОГРН
                </p>
                <p>25.06.2024</p>
              </div>
              <div className={style.content__contacts_data}>
                <p className={style.content__contacts_dataname}>ИНН</p>
                <p>4223133516</p>
              </div>
              <div className={style.content__contacts_data}>
                <p className={style.content__contacts_dataname}>КПП</p>
                <p>422301001</p>
              </div>
              <div className={style.content__contacts_data}>
                <p className={style.content__contacts_dataname}>
                  Председатель правления
                </p>
                <p>Якутович Лилия Идрисовна</p>
              </div>
              <div className={style.content__contacts_data}>
                <img src={phone} alt="Phone" className={style.icon} />
                <a className={style.link} href="tel:+79050698829">
                  +7 905 069 8829
                </a>
              </div>
              <div className={style.content__contacts_data}>
                <img src={email} alt="E-mail" className={style.icon} />
                <a className={style.link} href="mailto:RAHMA_LI@MAIL.RU">
                  RAHMA_LI@MAIL.RU
                </a>
              </div>
            </div>
          </div>
          <div className={style.pictures}>
            <img src={contacts} alt="mail" className={style.pictures__img} />
          </div>
        </div>
        <div className={style.content__charter}>
          {isCharterOpen ? (
            <Charter isOpen={onHandleCharter}/>
          ) : (
            <button
              className={`${style.content__charter_btn}`}
              onClick={onHandleCharter}
            >
              <img
                src={document}
                alt="document"
                className={style.content__charter_icon}
              />
              <p className={style.content__charter_name}>Устав</p>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
