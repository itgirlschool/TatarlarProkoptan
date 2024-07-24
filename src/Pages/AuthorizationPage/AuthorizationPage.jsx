import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./AuthorizationPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ModalAuth from "../../Components/ModalWindow/ModalAuth.jsx";
import { signInUser } from "../../Services/UsersFB/AuthService.js";


const schema = yup.object().shape({
  email: yup.string().email("Неверный email адрес").required("Требуется email"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать от 6 символов")
    .required("Требуется пароль"),
});

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [modalData, setModalData] = useState({
    showModal: false,
    success: false,
    message: "",
    type: "authorization",
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    signInUser(email, password,navigate);
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, showModal: false });
    if (modalData.success) {
      navigate("/");
    }
  };

  return (
    <div className={style.container}>
      <img
        src="src/assets/pictures/tatar_ornament.png"
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
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
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
          {errors.password && (
            <p className={style.error}>{errors.password.message}</p>
          )}
        </div>
        <div className={style.restore__container}>
          Забыли пароль?
          <Link to="/restorepassword">
            <p className={style.restore__link}>Восстановить пароль</p>
          </Link>
        </div>
        <div className={style.button__container}>
          <button
            type="submit"
            className={style.button__submit}
            disabled={isSubmitting}
          >
            Войти
          </button>
        </div>
        <div className={style.link__container}>
          Нет аккаунта?
          <Link to="/registrationpage">
            <p className={style.link}>Регистрация</p>
          </Link>
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
  );
};

export default AuthorizationPage;
