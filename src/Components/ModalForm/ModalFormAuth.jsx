import { useForm } from "react-hook-form";
import style from "./ModalFormAuth.module.scss";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { signInUser } from "../../Services/UsersFB/AuthService.js";
import { useNavigate } from "react-router-dom";
import ornaments from "./../../assets/pictures/tatar_ornament.png";
import ModalAuth from "../../Components/ModalWindow/ModalAuth.jsx";
import ModalFormAutonomy from "./ModalFormAutonomy.jsx";
import Loader from "../Loader/Loader";
import {Link} from 'react-router-dom';


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
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

    const onSubmit = async (data) => {
    const { email, password } = data;

   try {
      const response = await signInUser(email, password, navigate);
      if (response.success) {
        reset();
        onClose(true);
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

  // const handleOpenRegister = () => {
  //   onClose(false);
  //   setShowRegisterModal(true);
  // };

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
              <Link to="/restorepassword" >
            <p className={style.restore__link} onClick={() => onClose(false)}>Восстановить пароль</p>
          </Link>
            </div>
            <div className={style.button__container}>
              <button
                type="submit"
                className={style.button__submit}
                disabled={isSubmitting}
                onClick={() => onClose(false)}
              >
                {isSubmitting ? <Loader /> : "Войти"}
              </button>
            </div>
            <div className={style.link__container}>
              Нет аккаунта?
              <Link to="/registrationpage">
            <p className={style.link}  onClick={() => onClose(false)}>Регистрация</p>
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
        <div className={style.overlay}></div>
      </div>
      {showRegisterModal && (
        <ModalFormAutonomy onClose={() => setShowRegisterModal(false)} />
      )}
    </>
  );
}