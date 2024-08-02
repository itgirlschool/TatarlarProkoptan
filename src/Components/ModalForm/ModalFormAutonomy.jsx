import { useForm } from "react-hook-form";
import style from "./ModalFormAutonomy.module.scss";
import { useState } from "react";
import postData from "./postData";
import Loader from "../Loader/Loader";
import FeedbackWindow from "./FeedBackWindow";
import mask from "../../Common/inputPhone";
import { isPhoneTaken } from "./postData";
import { isEmailTaken } from "./postData";
import { useSelector } from "react-redux";

export default function ModalFormAutonomy({ onClose }) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(false);

  const usersAutonomy = useSelector((state) => state.autonomy.users);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      lastName: "",
      firstName: "",
      surName: "",
      phone: "",
      email: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data) => {
    const { lastName, firstName, surName, phone, email, agreeToTerms } = data;

    if (!agreeToTerms) {
      setError("agreeToTerms", {
        message: "",
      });
      return;
    }

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
    <div className={style.modal__window} onClick={() => onClose(false)}>
      <div
        className={style.modal__container}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.close} onClick={() => onClose(false)}>
          &times;
        </button>
        <form
          className={style.container__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={style.header}>Заявка на вступление в автономию</h2>
          <div className={style.container__inputs}>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="lastName">
                Фамилия
              </label>
              {errors.lastName && (
                <p className={style.error}>{errors.lastName.message}</p>
              )}
              <input
                className={style.input}
                type="text"
                id="lastName"
                placeholder="Фамилия"
                {...register("lastName", {
                  required: "Пожалуйста, заполните поле",
                  pattern: {
                    value: /[^\s]/,
                    message: "Пожалуйста, заполните поле",
                  },
                })}
              />
            </div>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="firstName">
                Имя
              </label>
              {errors.firstName && (
                <p className={style.error}>{errors.firstName.message}</p>
              )}
              <input
                className={style.input}
                type="text"
                id="firstName"
                placeholder="Имя"
                {...register("firstName", {
                  required: "Пожалуйста, заполните поле",
                  pattern: {
                    value: /[^\s]/,
                    message: "Пожалуйста, заполните поле",
                  },
                })}
              />
            </div>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="surName">
                Отчество
              </label>
              {errors.surName && (
                <p className={style.error}>{errors.surName.message}</p>
              )}
              <input
                className={style.input}
                type="text"
                id="surName"
                placeholder="Отчество"
                {...register("surName", {
                  required: "Пожалуйста, заполните поле",
                  pattern: {
                    value: /[^\s]/,
                    message: "Пожалуйста, заполните поле",
                  },
                })}
              />
            </div>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="phone">
                Номер телефона
              </label>
              {errors.phone && (
                <p className={style.error}>{errors.phone.message}</p>
              )}
              <input
                className={style.input}
                type="text"
                placeholder="+..."
                onInput={mask}
                onClick={mask}
                onFocus={mask}
                id="phone"
                {...register("phone", {
                  required: "Пожалуйста, заполните поле",
                  pattern: {
                    value: /^\+7[\d]{10}$/,
                    message: "Формат номера +79999999999",
                  },
                })}
              />
            </div>
            <div className={style.input__wrapper}>
              <label className={style.label} htmlFor="email">
                Электронная почта
              </label>
              {errors.email && (
                <p className={style.error}>{errors.email.message}</p>
              )}
              <input
                className={style.input}
                type="text"
                placeholder="E-MAIL"
                id="email"
                {...register("email", {
                  required: "Пожалуйста, заполните поле",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Только латинские буквы и символы @ и .",
                  },
                })}
              />
            </div>

            <div className={style.confident}>
              <label className={style.confident__checkbox}>
                <input
                  className={style.confident__checkbox_input}
                  id="checkbox"
                  type="checkbox"
                  name="agreeToTerms"
                  {...register("agreeToTerms", {
                    required: true,
                  })}
                />
                <span
                  className={`${style.confident__checkmark} ${
                    errors.agreeToTerms
                      ? style.confident__checkmark_invalid
                      : ""
                  }`}
                ></span>
              </label>
              <p className={style.confident__text}>
                Я соглашаюсь с политикой конфиденциальности и обработки
                персональных данных
              </p>
            </div>
          </div>
          <div className={style.container__buttons}>
            <button onClick={() => onClose(false)} className={style.btn}>
              Отмена
            </button>
            <button disabled={isSubmitting} className={style.btn} type="submit">
              {isSubmitting ? <Loader /> : "Отправить"}
            </button>
          </div>
        </form>
      </div>
      <div className={style.overlay}></div>
    </div>
  ) : (
    <FeedbackWindow
      responseStatus={responseStatus}
      onCloseFeedback={onCloseFeedback}
    />
  );
}
