import style from "./ModalForm.module.scss";
import { useState } from "react";

export default function FeedbackWindow({}) {
  const [statusFeedBack, setStatusFeedBack] = useState(
    `${style.container__opened}`
  );
  const onHandleStatus = () => {
    setStatusFeedBack(`${style.container__closed}`);
  };

  return (
    <div className={statusFeedBack}>
      <h2 className={style.header}>
        Ваша заявка принята, спасибо!
      </h2>
      <p className={style.paragragh}>
        Здесь можно оставить инфо о том, что что-то придет по почте или еще
        что-то для вновь вступивших
      </p>
      <button onClick={onHandleStatus} className={style.button__submit}>
        OK
      </button>
    </div>
  );
}
