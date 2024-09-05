import style from "./ModalNewsImgAdmin.module.scss";
import { useState } from "react";

export default function ModalForNewsImg({ onClose }) {
	return (
		<div className={style.modal__container}>
			<div className={style.modal__overlay}>
				<div className={style.modal}>
					<h2>Загрузить фото</h2>
					<textarea />
					<button onClick={onClose}>Сохранить и закрыть</button>
				</div>
			</div>
		</div>
	);
}
