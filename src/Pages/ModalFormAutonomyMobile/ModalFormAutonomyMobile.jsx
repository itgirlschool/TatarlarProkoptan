import { useForm } from "react-hook-form";
import style from "./ModalFormMobile.module.scss";
import { useState } from "react";
import Checkbox from "../../assets/images/checkboxGreen.svg";
import postData from "../../Components/ModalForm/postData";
import Loader from "../../Components/Loader/Loader";
import FeedbackWindowMobile from "./FeedBackWindowMobile";
import mask from "../../Common/inputPhone";
import { isPhoneTaken } from "../../Components/ModalForm/postData";
import { isEmailTaken } from "../../Components/ModalForm/postData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ModalFormAutonomyMobile() {
  const [statusChecked, setStatusChecked] = useState(false);
  const checkboxClasses = [style.checkbox, style.checkbox__hidden];
  const [statusCheckbox, setStatusCheckbox] = useState(checkboxClasses[0]);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(false);

  const navigate = useNavigate();

  const usersAutonomy = useSelector((state) => state.autonomy.users);

  const onHandleChecked = () => {
    setStatusChecked(!statusChecked);
    if (statusCheckbox === checkboxClasses[0]) {
      setStatusCheckbox(checkboxClasses[1]);
    } else {
      setStatusCheckbox(checkboxClasses[0]);
    }
  };
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmittSuccessful },
  } = useForm({
    defaultValues: {
      lastName: "",
      firstName: "",
      surName: "",
      phone: "",
      email: "",
    },
  });
  const onSubmit = async ({ lastName, firstName, surName, phone, email }) => {
    try {
      const isPhoneNumberTaken = await isPhoneTaken(phone, usersAutonomy);
      const isEmailAddressTaken = await isEmailTaken(email, usersAutonomy);
      if (isPhoneNumberTaken || isEmailAddressTaken) {
        if (isPhoneNumberTaken) {
          setError("phone", {
            message: "Введенный телефон уже указан в другой заявке",
          });
        }
        if (isEmailAddressTaken) {
          setError("email", {
            message: "Введенный email уже указан в другой заявке",
          });
        }
      } else {
        await postData(lastName, firstName, surName, phone, email);
        reset();
        setStatusChecked(!statusChecked);
        setStatusCheckbox(`${style.checkbox}`);
        setIsFeedbackOpen(true);
        setResponseStatus(true);
      }
    } catch (err) {
      setResponseStatus(false);
    }
  };

  const onCloseFeedback = (value) => {
    onClose(value);
  };

  return !isFeedbackOpen ? (
    <div className={style.modal__container}>
      <form className={style.container__form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={style.header}>Заявка на вступление в автономию</h1>
        <div className={style.container__inputs}>
          <div className={style.input__wrapper}>
            <label className={style.label} htmlFor="lastName">
              Фамилия
            </label>
            <input
              className={style.input}
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "Пожалуйста, заполните поле",
                pattern: {
                  value: /[^\s]/,
                  message: "Пожалуйста, заполните поле",
                },
              })}
            />
            {errors.lastName && (
              <p className={style.error}>{errors.lastName.message}</p>
            )}
          </div>
          <div className={style.input__wrapper}>
            <label className={style.label} htmlFor="firstName">
              Имя
            </label>
            <input
              className={style.input}
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "Пожалуйста, заполните поле",
                pattern: {
                  value: /[^\s]/,
                  message: "Пожалуйста, заполните поле",
                },
              })}
            />
            {errors.firstName && (
              <p className={style.error}>{errors.firstName.message}</p>
            )}
          </div>
          <div className={style.input__wrapper}>
            <label className={style.label} htmlFor="surName">
              Отчество
            </label>
            <input
              className={style.input}
              type="text"
              id="surName"
              {...register("surName", {
                required: "Пожалуйста, заполните поле",
                pattern: {
                  value: /[^\s]/,
                  message: "Пожалуйста, заполните поле",
                },
              })}
            />
            {errors.surName && (
              <p className={style.error}>{errors.surName.message}</p>
            )}
          </div>
          <div className={style.input__wrapper}>
            <label className={style.label} htmlFor="phone">
              Номер телефона
            </label>
            <input
              className={style.input}
              type="text"
              onInput={mask}
              onClick={mask}
              onFocus={mask}
              id="phone"
              {...register("phone", {
                required: "Пожалуйста, заполните поле",
                pattern: {
                  value: /^\+7[\d]{10}$/,
                  message:
                    "Пожалуйста, введите номер телефона в формате +79999999999",
                },
              })}
            />
            {errors.phone && (
              <p className={style.error}>{errors.phone.message}</p>
            )}
          </div>
          <div className={style.input__wrapper}>
            <label className={style.label} htmlFor="email">
              Электронная почта
            </label>
            <input
              className={style.input}
              type="text"
              id="email"
              {...register("email", {
                required: "Пожалуйста, заполните поле",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message:
                    "Адрес должен быть написан латинскими буквами, содержать символы @ и .",
                },
              })}
            />
            {errors.email && (
              <p className={style.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={style.container__agreement}>
            {statusChecked && (
              <img src={Checkbox} alt="checkbox" className={style.checked} />
            )}
            <input
              onClick={onHandleChecked}
              className={
                errors.agreement ? style.checkbox__empty : statusCheckbox
              }
              type="checkbox"
              id="agreement"
              {...register("agreement", {
                required: "Пожалуйста, заполните поле",
              })}
            />
            <label htmlFor="agreement" className={style.agreement}>
              Я соглашаюсь с политикой конфиденциальности и обработки
              персональных данных
            </label>
          </div>
        </div>
        <div className={style.container__buttons}>
          <button onClick={() => navigate(-1)} className={style.button__cancel}>
            ОТМЕНА
          </button>
          <button
            disabled={isSubmitting}
            className={style.button__submit}
            type="submit"
          >
            {isSubmitting ? <Loader /> : "ОТПРАВИТЬ"}
          </button>
        </div>
      </form>
    </div>
  ) : (
    <FeedbackWindowMobile
      responseStatus={responseStatus}
      onCloseFeedback={onCloseFeedback}
    />
  );
}
