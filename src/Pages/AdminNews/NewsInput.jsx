import style from "./NewsInput.module.scss";
import newsArr from "../../Common/news.json";
import { useState } from "react";
import ModalForNewsText from "../../Components/ModalNewsTextAdmin/ModalNewsTextAdmin";
import ModalForNewsImg from "../../Components/ModalNewsImgAdmin/ModalNewsImgAdmin";

export default function NewsInput() {
	const [news, setNews] = useState(newsArr);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [isModalImgOpened, setIsModalImgOpened] = useState(false);
	const [currentNewsIndex, setCurrentNewsIndex] = useState(null);
	const openModal = (index) => {
		setCurrentNewsIndex(index);
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

	const updateNewsText = (index, newText) => {
		const updatedNews = news.map((item, i) =>
			i === index ? { ...item, text: newText } : item,
		);
		setNews(updatedNews);
	};

	const updateNewsImage = (index, newImage) => {
		const updatedNews = news.map((item, i) =>
			i === index ? { ...item, img: newImage } : item,
		);
		setNews(updatedNews);
	};

	return (
		<div>
			{news.map((item, index) => (
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
						<button className={style.button} onClick={() => openModal(index)}>
							Редактировать текст новости
						</button>
					</p>
				</div>
			))}
			{isModalOpened && (
				<ModalForNewsText
					onClose={closeModal}
					initialText={news[currentNewsIndex]?.text}
					onSave={(newText) => updateNewsText(currentNewsIndex, newText)}
				/>
			)}
			{isModalImgOpened && (
				<ModalForNewsImg
					onClose={closeImgModal}
					onSave={(newImage) => updateNewsImage(currentNewsIndex, newImage)}
				/>
			)}
		</div>
	);
}
