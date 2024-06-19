import React from "react";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./AuthorizationPage.module.scss";

const schema = yup.object().shape({
  email: yup.string().email("Не верный email адрес").required("Требуется email"),
  password: yup.string().min(6, "Пароль должен содердать от 6 символов").required("Требуется пароль"),
});

const AuthorizationPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    const { email, password } = data;


  };
  return (
    <div className={style.container}>
              <img src="src/assets/logo/logo.png" 
        className={style.image__logo}
        alt="logo"
        />
      <h2 className={style.header}>Авторизация</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="email">Email</label>
          <input
            className={errors.email ? style.input__empty : style.input}
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && <p className={style.error}>{errors.email.message}</p>}
        </div>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="password">Пароль</label>
          <input
            className={errors.password ? style.input__empty : style.input}
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password && <p className={style.error}>{errors.password.message}</p>}
        </div>
        <div className={style.button__container}>
        <button type="submit" className={style.button__submit} disabled={isSubmitting}>
          Подтвердить
        </button>
        </div>

      </form>

    </div>
  );
};

export default AuthorizationPage;
