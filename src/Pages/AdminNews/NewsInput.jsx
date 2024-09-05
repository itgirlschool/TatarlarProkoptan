import style from "./NewsInput.module.scss";
import newsArr from "../../Common/news.json";
import { useState } from "react";
import ModalForNewsText from "../../Components/ModalNewsTextAdmin/ModalForNewsText";
import ModalForNewsImg from "../../Components/ModalNewsImgAdmin/ModalNewsImgAdmin";

export default function NewsInput() {
	const [news, setNews] = useState(newsArr);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [isModalImgOpened, setIsModalImgOpened] = useState(false);

	const openModal = () => {
		setIsModalOpened(true);
		setIsModalImgOpened(false);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsModalOpened(false);
		document.body.style.overflow = "auto";
	};

	const openImgModal = () => {
		setIsModalImgOpened(true);
		setIsModalOpened(false);
		document.body.style.overflow = "hidden";
	};

	const closeImgModal = () => {
		setIsModalImgOpened(false);
		document.body.style.overflow = "auto";
	};

	return (
		<div>
			{news.map((item) => (
				<div className={style.banner} key={item.id}>
					<div className={style.banner_img}>
						<a href="#">
							<img className={style.img} src={item.img} alt="news" />
						</a>
						<button className={style.button} onClick={openImgModal}>
							Редактировать фото
						</button>
					</div>
					<p className={style.banner_text}>
						{item.text}
						<br />
						<button className={style.button} onClick={openModal}>
							Редактировать текст новости
						</button>
					</p>
				</div>
			))}
			{(isModalOpened && <ModalForNewsText onClose={closeModal} />) ||
				(isModalImgOpened && <ModalForNewsImg onClose={closeImgModal} />)}
		</div>
	);
}
