import style from "./ModalNewsImgAdmin.module.scss";
import { useState } from "react";

export default function ModalForNewsImg({ onClose }) {
	const [selectedImage, setSelectedImage] = useState(null); // Состояние для выбранного изображения

	// Обработчик выбора изображения
	const handleImageChange = (e) => {
		const file = e.target.files[0]; // Получаем файл
		if (file) {
			setSelectedImage(URL.createObjectURL(file)); // Сохраняем URL для предпросмотра
		}
	};

	// Обработчик сохранения изображения
	const handleSave = () => {
		if (selectedImage) {
			onSave(selectedImage); // Передача нового изображения в NewsInput
			onClose(); // Закрытие модального окна
		}
	};

	return (
		<div className={style.modal__container}>
			<div className={style.modal__overlay}>
				<div className={style.modal}>
					{/* Кнопка для закрытия */}
					<button className={style.close} onClick={onClose}>
						&times;
					</button>

					<h2 className={style.title}>Загрузить фото</h2>

					{/* Поле для загрузки файла */}
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className={style.fileInput}
					/>

					{/* Предпросмотр изображения */}
					{selectedImage && (
						<div className={style.previewContainer}>
							<img
								src={selectedImage}
								alt="Предварительный просмотр"
								className={style.previewImage}
							/>
						</div>
					)}

					{/* Кнопка сохранения */}
					<button className={style.button__submit} onClick={handleSave}>
						Сохранить и закрыть
					</button>
				</div>
			</div>
		</div>
	);
}
