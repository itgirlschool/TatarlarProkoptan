import { useForm } from "react-hook-form";
import onSubmit from "./modalFormTemplate";
import style from "./ModalForm.module.scss";

export default function ModalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.container__inputs}>
          <input
            type="text"
            placeholder="Фамилия"
            {...register(
              "lastName",
              { required: "Поле не заполнено" },
              {
                pattern: {
                  value: "/[А-яа-я]/g{3}",
                  message: "Только буквы",
                },
              }
            )}
          />
          <input
            type="text"
            placeholder="Имя"
            {...register(
              "firstName",
              { required: "Поле не заполнено" },
              {
                pattern: {
                  value: "/[А-яа-я]/g{3}",
                  message: "Только буквы",
                },
              }
            )}
          />
          <input
            type="text"
            placeholder="Отчество"
            {...register(
              "surName",
              { required: "Поле не заполнено" },
              {
                pattern: {
                  value: "/[А-яа-я]/g{3}",
                  message: "Только буквы",
                },
              }
            )}
          />
          <input
            type="tel"
            placeholder="Телефон"
            {...register(
              "phone",
              { required: "Поле не заполнено" },
              {
                pattern: {
                  value: "^(?:+1)?s?(?d{3})?[-.s]?d{3}[-.s]?d{4}$",
                  message: "Только буквы",
                },
              }
            )}
          />
        </div>
        <div className={style.container__buttons}>
          <button className={style.button__cancel}>Отмена</button>
          <button className={style.button__submit} type="submit">Отправить</button>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
}
