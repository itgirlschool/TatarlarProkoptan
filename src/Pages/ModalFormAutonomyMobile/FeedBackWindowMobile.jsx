import style from "../../Components/ModalForm/ModalForm.module.scss";
import Reject from "../../assets/images/errorrequest.svg";
import Document from "../../assets/images/document.svg";
import { useNavigate } from "react-router-dom";

export default function FeedbackWindowMobile({
  responseStatus,
}) {
  const navigate = useNavigate();
  return (
    <div className={style.modal__container}>
      <div className={style.feedback__wrapper}>
        {responseStatus ? (
          <img
            src={Document}
            alt="document"
            className={style.feedback__image}
          />
        ) : (
          <img src={Reject} alt="reject" className={style.feedback__image} />
        )}

        <div className={style.feedback__info}>
          {responseStatus ? (
            <>
              <h1 className={style.header__feedback}>
                Ваша заявка принята, спасибо!
              </h1>
              <p className={style.paragragh__feedback}>
                Здесь можно оставить инфо о том, что что-то придет по почте или
                еще что-то для вновь вступивших
              </p>
            </>
          ) : (
            <>
              <h1 className={style.header__feedback}>
                Сервер временно не доступен!
              </h1>
              <p className={style.paragragh__feedback}>
                Пожалуйста, попробуйте позже
              </p>
            </>
          )}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={style.button__feedback}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
