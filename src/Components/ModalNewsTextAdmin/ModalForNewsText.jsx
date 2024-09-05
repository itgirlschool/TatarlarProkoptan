import style from "./ModalForNewsText.module.scss";
import { useState } from "react";

export default function ModalForNewsText({ onClose }) {
	return (
		<div className={style.modal__container}>
			<div className={style.modal__overlay}>
				<div className={style.modal}>
					<h2>введите текст новости</h2>
					<textarea />
					<button onClick={onClose}>Сохранить и закрыть</button>
				</div>
			</div>
		</div>
	);
}
