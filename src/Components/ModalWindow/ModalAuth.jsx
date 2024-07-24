import React from "react";
import style from "./ModalAuth.module.scss";


const ModalAuth = ({ showModal, closeModal, success, message, type }) => {
  if (!showModal) {
    return null;
  }

  const titles = {
    registration: "Регистрация",
    authorization: "Авторизация",
    restorePassword: "Восстановление пароля",
  };
  const messages = {
    registration: success ? "Вы успешно зарегистрированы!" : `Ошибка регистрации: ${message}`,
    authorization: success ? "Вы успешно авторизованы!" : `Ошибка авторизации: ${message}`,
    restorePassword: success ? "Письмо с инструкцией для восстановления пароля отправлено на вашу почту" : `Ошибка восстановления пароля: ${message}`
  };

  return (
    <div className={style.modal__container}>
      <div className={style.modal__message}>
        <h2>{titles[type]}</h2>
        <p className={success ? style.success__message__success : style.modal__message__error}>{messages[type]}</p>
        <button onClick={closeModal} className={style.button__submit}>Закрыть</button>
      </div>
    </div>
  );
};

export default ModalAuth;
