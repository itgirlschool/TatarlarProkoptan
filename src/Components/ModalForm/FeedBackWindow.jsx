import style from "./ModalForm.module.scss";
import Document from "../../assets/gif/document.gif";
import Reject from "../../assets/gif/attention.gif";

export default function FeedbackWindow({ responseStatus, onCloseFeedback }) {
  const onHandleClose = () => {
    onCloseFeedback(false);
  };

  return (
    <div className={style.modal__window}>
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
                <h2 className={style.header__feedback}>
                  Ваша заявка принята, спасибо!
                </h2>
                <p className={style.paragragh}>
                  Здесь можно оставить инфо о том, что что-то придет по почте
                  или еще что-то для вновь вступивших
                </p>
              </>
            ) : (
              <>
                <h2 className={style.header__feedback}>
                  Сервер временно не доступен!
                </h2>
                <p className={style.paragragh}>Пожалуйста, попробуйте позже</p>
              </>
            )}
            <button
              type="button"
              onClick={onHandleClose}
              className={style.button__submit}
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
}
