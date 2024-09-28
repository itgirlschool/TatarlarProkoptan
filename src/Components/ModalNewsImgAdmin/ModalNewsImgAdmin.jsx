import style from "./ModalNewsImgAdmin.module.scss";
import { useState } from "react";

export default function ModalForNewsImg({ onSave, onClose }) {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectedImage(URL.createObjectURL(file));
		}
	};

	const handleSave = () => {
		if (selectedImage) {
			onSave(selectedImage);
			onClose();
		}
	};

	return (
		<div className={style.modal__container}>
			<div className={style.modal__overlay}>
				<div className={style.modal}>
					<button className={style.close} onClick={onClose}>
						&times;
					</button>
					<h2 className={style.title}>Загрузить фото</h2>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className={style.fileInput}
					/>
					{selectedImage && (
						<div className={style.previewContainer}>
							<img
								src={selectedImage}
								alt="Предварительный просмотр"
								className={style.previewImage}
							/>
						</div>
					)}
					<button className={style.button__submit} onClick={handleSave}>
						Сохранить и закрыть
					</button>
				</div>
			</div>
		</div>
	);
}
