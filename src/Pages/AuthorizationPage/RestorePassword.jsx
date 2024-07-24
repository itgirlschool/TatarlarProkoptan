import React, { useState } from "react";
import { useForm } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";
 import * as yup from "yup";
 import {useSelector} from "react-redux";
import style from "./RestorePassword.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ModalAuth from "../../Components/ModalWindow/ModalAuth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import ornaments from '../../assets/pictures/tatar_ornament.png'

 const schema = yup.object().shape({
   email: yup
     .string()
     .email("Неверный email адрес")
     .required("Введите email адрес"),
 });

const RestorePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {users} = useSelector((state) => state.users);

  const auth = getAuth();
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({
    showModal: false,
    success: false,
    message: "",
    type: "",
  });

  const onSubmit = async (data) => {
    const { email } = data;
    const verificationUser = users.find((user) => user.email === email);
    if(verificationUser) {
      sendPasswordResetEmail(auth,email)
    }
};

  const handleCloseModal = () => {
    setModalData({ ...modalData, showModal: false });
  };

  const handleBackClick = () => {
    navigate("/authorizationpage");
  };

  return (
    <div className={style.container}>
      <img
        src={ornaments}
        className={style.tatar__ornament}
        alt="tatar ornament"
      />
      <h2 className={style.header}>Восстановление пароля</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            className={errors.email ? style.input__empty : style.input}
            type="email"
            id="email"
            placeholder="Е-mail"
            {...register("email")}
          />
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={style.button__container}>
          <button
            type="submit"
            className={style.button__submit}
            disabled={isSubmitting}
          >
            Отправить
          </button>
          <button
            type="button"
            className={style.button__back}
            onClick={handleBackClick}
          >
            Назад
          </button>
        </div>
        <div className={style.link__container}>
          Вспомнили пароль?
          <Link to="/authorizationpage">
            <p className={style.link}>Авторизация</p>
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

export default RestorePassword;
