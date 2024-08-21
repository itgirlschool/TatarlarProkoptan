import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./ModalFormAuth.module.scss";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../Services/UsersFB/AuthService.js";
import ornaments from "./../../assets/pictures/tatar_ornament.png";
import ModalAuth from "../../Components/ModalWindow/ModalAuth.jsx";
import ModalFormAutonomy from "./ModalFormAutonomy.jsx";

export default function ModalFormAuth({ onClose }) {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({
    showModal: false,
    success: false,
    message: "",
    type: "authorization",
  });
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Функция для проверки корректности email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? null : "Неверный email адрес";
  };

  // Функция для проверки корректности пароля
  const validatePassword = (password) => {
    return password.length >= 6 ? null : "Пароль должен содержать от 6 символов";
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

   const emailError = validateEmail(email);
    if (emailError) {
      setError("email", { type: "manual", message: emailError });
      return;
    }

   const passwordError = validatePassword(password);
    if (passwordError) {
      setError("password", { type: "manual", message: passwordError });
      return;
    }

   try {
      const response = await signInUser(email, password);
      if (response.success) {
        reset();
        setModalData({
          showModal: true,
          success: true,
          message: "Авторизация успешна!",
          type: "authorization",
        });
      } else {
        setModalData({
          showModal: true,
          success: false,
          message: response.message || "Ошибка авторизации",
          type: "authorization",
        });
      }
    } catch (error) {
      setModalData({
        showModal: true,
        success: false,
        message: "Проверьте свои данные и попробуйте снова.",
        type: "authorization",
      });
    }
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, showModal: false });
    onClose(false);
    if (modalData.success) {
      navigate("/");
    }
  };

  const handleOpenRegister = () => {
    onClose(false);
    setShowRegisterModal(true);
  };

  return (
    <>
      <div className={style.modal__window} onClick={() => onClose(false)}>
        <div className={style.modal__container} onClick={(e) => e.stopPropagation()}>
          <button className={style.close} onClick={() => onClose(false)}>
            &times;
          </button>
          <img
            src={ornaments}
            className={style.tatar__ornament}
            alt="tatar ornament"
          />
          <h2 className={style.header}>Авторизация</h2>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="email">
                Email
              </label>
              <input
                className={errors.email ? style.input__empty : style.input}
                type="email"
                id="email"
                placeholder=" Е-mail"
                {...register("email")}
              />
              {errors.email && <p className={style.error}>{errors.email.message}</p>}
            </div>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="password">
                Пароль
              </label>
              <input
                className={errors.password ? style.input__empty : style.input}
                type="password"
                id="password"
                placeholder=" Пароль"
                {...register("password")}
              />
              {errors.password && <p className={style.error}>{errors.password.message}</p>}
            </div>
            <div className={style.restore__container}>
              Забыли пароль?
              <p className={style.restore__link} onClick={() => navigate("/restorepassword")}>
                Восстановить пароль
              </p>
            </div>
            <div className={style.button__container}>
              <button
                type="submit"
                className={style.button__submit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Загрузка..." : "Войти"}
              </button>
            </div>
            <div className={style.link__container}>
              Нет аккаунта?
              <p className={style.link} onClick={handleOpenRegister}>
                Регистрация
              </p>
            </div>
          </form>
          <ModalAuth
            showModal={modalData.showModal}
            closeModal={handleCloseModal}
            success={modalData.success}
            message={modalData.message}
            type={modalData.type}
          />
        </div>
        <div className={style.overlay}></div>
      </div>
      {showRegisterModal && (
        <ModalFormAutonomy onClose={() => setShowRegisterModal(false)} />
      )}
    </>
  );
}