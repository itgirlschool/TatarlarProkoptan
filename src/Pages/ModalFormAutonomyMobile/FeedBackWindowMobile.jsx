import style from "./FeedbackWindowMobile.module.scss";
import Reject from "../../assets/images/errorrequest.svg";
import Document from "../../assets/images/document.svg";
import { useNavigate } from "react-router-dom";

export default function FeedbackWindowMobile({ responseStatus }) {
  const navigate = useNavigate();
  return (
    <div className={style.modal__containerMobile}>
      <div className={style.feedback__wrapperMobile}>
        {responseStatus ? (
          <img
            src={Document}
            alt="document"
            className={style.feedback__imageMobile}
          />
        ) : (
          <img
            src={Reject}
            alt="reject"
            className={style.feedback__imageMobile}
          />
        )}

        <div className={style.feedback__infoMobile}>
          {responseStatus ? (
            <>
              <h1 className={style.header__feedbackMobile}>
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
            className={style.button__feedbackMobile}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
