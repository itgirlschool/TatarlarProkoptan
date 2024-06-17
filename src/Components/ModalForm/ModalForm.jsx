import { useForm } from "react-hook-form";
import style from "./ModalForm.module.scss";
import { useState } from "react";
import Checkbox from "../../assets/svg/checkbox.svg";
import postData from "./postData";
import Loader from "../Loader/Loader";
import FeedbackWindow from "./FeedBackWindow";

export default function ModalForm({ onClose }) {
  const [statusChecked, setStatusChecked] = useState(false);
  const checkboxClasses = [style.checkbox, style.checkbox__hidden];
  const [statusCheckbox, setStatusCheckbox] = useState(checkboxClasses[0]);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(true);

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
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
    },
  });
  const onSubmit = async ({ lastName, firstName, surName, phone, email }) => {
    try {
      await postData(lastName, firstName, surName, phone, email);
      reset();
      setStatusChecked(!statusChecked);
      setStatusCheckbox(`${style.checkbox}`);
      setIsFeedbackOpen(true);
      setResponseStatus(true);
      // if (isSubmitSuccessful) {
      //   setStatusModal(`${style.container__closed}`);
      //   setIsFeedbackOpen(true);
      //   setResponseStatus(true);
      // } else {
      //   setResponseStatus(false);
      // }
    } catch (err) {
      setError("email", { message: "Введенный email уже занят" });
      setError("phone", { message: "Введенный телефон уже занят" });
      console.log(err);
    }
  };

  const onHandleClose = () => {
    onClose(false);
  };

  const onCloseFeedback = (value) => {
    onClose(value);
  };

  return !isFeedbackOpen ? (
    <div className={style.modal__window}>
      <div className={style.modal__container}>
        <form
          className={style.container__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={style.header}>Заявка на вступление в автономию</h2>
          <p className={style.paragragh}>Заполните, пожалуйста, форму:</p>
          <div className={style.container__inputs}>
            <input
              className={style.input}
              type="text"
              placeholder="Фамилия*"
              {...register("lastName", {
                required: "Поле не заполнено",
              })}
            />
            {errors.lastName && (
              <p className={style.error}>{errors.lastName.message}</p>
            )}
            <input
              className={style.input}
              type="text"
              placeholder="Имя*"
              {...register("firstName", {
                required: "Поле не заполнено",
              })}
            />
            {errors.firstName && (
              <p className={style.error}>{errors.firstName.message}</p>
            )}
            <input
              className={style.input}
              type="text"
              placeholder="Отчество*"
              {...register("surName", {
                required: "Поле не заполнено",
              })}
            />
            {errors.surName && (
              <p className={style.error}>{errors.surName.message}</p>
            )}
            <input
              className={style.input}
              type="tel"
              placeholder="Телефон*"
              {...register("phone", {
                required: "Поле не заполнено",
                pattern: {
                  value: /(?:\+|\d)[\d\-\(\) ]{9,}\d/g,
                  message:
                    "Номер телефона может содержать только цифры, пробелы и знаки +, -, (, )",
                },
              })}
            />
            {errors.phone && (
              <p className={style.error}>{errors.phone.message}</p>
            )}
            <input
              className={style.input}
              type="text"
              placeholder="email*"
              {...register("email", {
                required: "Поле не заполнено",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Адрес должен содержать @ и.",
                },
              })}
            />
            {errors.email && (
              <p className={style.error}>{errors.email.message}</p>
            )}
            <div className={style.container__agreement}>
              {statusChecked && (
                <img src={Checkbox} alt="checkbox" className={style.checked} />
              )}
              <input
                onClick={onHandleChecked}
                className={statusCheckbox}
                type="checkbox"
                id="agreement"
                {...register("agreement", {
                  required: "Поле не заполнено",
                })}
              />
              <label htmlFor="agreement" className={style.agreement}>
                Я соглашаюсь с политикой конфиденциальности и обработки
                персональных данных*
              </label>
            </div>
            {errors.agreement && (
              <p className={style.error}>{errors.agreement.message}</p>
            )}
          </div>
          <div className={style.container__buttons}>
            <button onClick={onHandleClose} className={style.button__cancel}>
              Отмена
            </button>
            <button
              disabled={isSubmitting}
              className={style.button__submit}
              type="submit"
            >
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
