import style from "./ModalForm.module.scss";

export default function FormInput({ content, type }) {
  return (
    <div className={style.container__input}>
      <input className={style.input} type={type} placeholder={content} defaultValue=''/>
    </div>
  );
}
