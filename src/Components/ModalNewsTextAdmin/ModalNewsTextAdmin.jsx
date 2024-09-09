import style from "./ModalForNewsText.module.scss";
import { useState } from "react";

export default function ModalForNewsText({ onClose, initialText, onSave }) {
	const [text, setText] = useState(initialText); // Устанавливаем начальный текст

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const handleSave = () => {
		onSave(text);
		onClose();
	};

	return (
		<div className={style.modal__container}>
			<div className={style.modal__overlay}>
				<div className={style.modal}>
					<button className={style.close} onClick={onClose}>
						&times;
					</button>
					<h2 className={style.title}>Введите текст новости</h2>
					<textarea
						className={style.textarea}
						value={text}
						onChange={handleTextChange}
						maxLength={300} // Ограничение на 300 символов
					/>
					<div className={style.charCounter}>{text.length}/300 символов</div>
					<button className={style.button__submit} onClick={handleSave}>
						Сохранить и закрыть
					</button>
				</div>
			</div>
		</div>
	);
}
