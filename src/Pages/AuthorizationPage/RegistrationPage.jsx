import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slice/UserAuthSlice.js";
import style from "./RegistrationPage.module.scss";
import { addUserAutonomy } from "../../Services/AutonomyFB/autonomy.js";

const schema = yup.object().shape({
  firstName: yup.string().required("Требуется имя"),
  lastName: yup.string().required("Требуется фамилия"),
  email: yup
    .string()
    .email("Не верный email адрес")
    .required("Требуется email"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать от 6 символов")
    .required("Требуется пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    .required("Подтвердите пароль"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const users = useSelector((state) => state.autonomy.users);

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    try {
      const user = await addUserAutonomy({ firstName, lastName, email, password });
      dispatch(setUser(user));
      alert(`Вы успешно зарегистрированы, ${user.email}`);
      navigate("/home");
    } catch (error) {
      alert("Ошибка регистрации: " + error.message);
    }
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <img
        src="src/assets/pictures/tatar_ornament.png"
        className={style.tatar__ornament}
        alt="tatar ornament"
      />
      <h2 className={style.header}>Регистрация</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="firstName">
            Имя
          </label>
          <input
            className={errors.firstName ? style.input__empty : style.input}
            type="text"
            id="firstName"
            placeholder="Имя"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className={style.error}>{errors.firstName.message}</p>
          )}
        </div>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="lastName">
            Фамилия
          </label>
          <input
            className={errors.lastName ? style.input__empty : style.input}
            type="text"
            id="lastName"
            placeholder="Фамилия"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className={style.error}>{errors.lastName.message}</p>
          )}
        </div>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            className={errors.email ? style.input__empty : style.input}
            type="email"
            id="email"
            placeholder="E-mail"
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
            placeholder="Пароль"
            {...register("password")}
          />
          {errors.password && (
            <p className={style.error}>{errors.password.message}</p>
          )}
        </div>
        <div className={style.input__wrapper}>
          <label className={style.label} htmlFor="confirmPassword">
            Подтвердите пароль
          </label>
          <input
            className={errors.confirmPassword ? style.input__empty : style.input}
            type="password"
            id="confirmPassword"
            placeholder="Подтвердите пароль"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className={style.error}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className={style.button__container}>
          <button
            type="submit"
            className={style.button__submit}
            disabled={isSubmitting}
          >
            Подтвердить
          </button>
          <button
            type="button"
            className={style.button__back}
            onClick={handleBackClick} // Исправлено: теперь onClick вызывает handleBackClick
          >
            Назад
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
