
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./AuthorizationPage.module.scss"; 
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/UserAuthSlice";
import { Link } from "react-router-dom";
import { getAutonomyAllUsers } from "../../Services/UsersFB/users"; 
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Не верный email адрес")
    .required("Требуется email"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать от 6 символов")
    .required("Требуется пароль"),
});

const AuthorizationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const users = useSelector((state) => state.autonomy.users);
  
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const user = await getAutonomyAllUsers(email, password);
      dispatch(setUser(user));
      alert(`Вы успешно авторизованы, ${user.email}`);
      navigate("/home");
    } catch (error) {
      alert("Ошибка авторизации: " + error.message);
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
    </div>
  );
};

export default AuthorizationPage;
