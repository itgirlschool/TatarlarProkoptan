import style from "./NewsInput.module.scss";
// import newsArr from "../../Common/news.json";
import { useState, useEffect } from "react";
import ModalForNewsText from "../../Components/ModalNewsTextAdmin/ModalNewsTextAdmin";
import ModalForNewsImg from "../../Components/ModalNewsImgAdmin/ModalNewsImgAdmin";
import { db } from "../../../firestoreInit.js";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export default function NewsInput() {
	const [news, setNews] = useState([]);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [isModalImgOpened, setIsModalImgOpened] = useState(false);
	const [currentNewsIndex, setCurrentNewsIndex] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const newsCollection = collection(db, "news");
				const newsSnapshot = await getDocs(newsCollection);
				const newsList = newsSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setNews(newsList);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};
		fetchNews();
	}, []);

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

	const updateNewsInFirestore = async (id, updatedNews) => {
		const newsRef = doc(db, "news", id);
		await updateDoc(newsRef, updatedNews);
	};

	const openImgModal = (index) => {
		setCurrentNewsIndex(index);
		setIsModalImgOpened(true);
		setIsModalOpened(false);
		document.body.style.overflow = "hidden";
	};

	const closeImgModal = () => {
		setIsModalImgOpened(false);
		document.body.style.overflow = "auto";
	};

	const updateNewsText = async (index, newText) => {
		const updatedNews = news.map((item, i) =>
			i === index ? { ...item, text: newText } : item,
		);
		setNews(updatedNews);
		await updateNewsInFirestore(updatedNews[index].id, {
			text: newText,
		});
	};

	const updateNewsImage = async (index, newImage) => {
		const updatedNews = news.map((item, i) =>
			i === index ? { ...item, img: newImage } : item,
		);
		setNews(updatedNews);
		await updateNewsInFirestore(updatedNews[index].id, {
			img: newImage,
		});
	};

	return (
		<div className={style.adminNews_wrapper}>
			{news.map((item, index) => (
				<div className={style.banner} key={item.id}>
					<div className={style.banner_img}>
						<img className={style.img} src={item.img} alt="news" />
						<button className={style.button} onClick={() => openImgModal(index)}>
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

// import style from "./NewsInput.module.scss";
// // import newsArr from "../../Common/news.json";
// import { useState, useEffect } from "react";
// import ModalForNewsText from "../../Components/ModalNewsTextAdmin/ModalNewsTextAdmin";
// import ModalForNewsImg from "../../Components/ModalNewsImgAdmin/ModalNewsImgAdmin";

// export default function NewsInput() {
// 	const [news, setNews] = useState([]);
// 	const [isModalOpened, setIsModalOpened] = useState(false);
// 	const [isModalImgOpened, setIsModalImgOpened] = useState(false);
// 	const [currentNewsIndex, setCurrentNewsIndex] = useState(null);

// 	useEffect(() => {
// 		const fetchNewsFromLocalStorage = () => {
// 			try {
// 				const newsJson = localStorage.getItem("news");
// 				if (newsJson) {
// 					const newsList = JSON.parse(newsJson);
// 					setNews(newsList);
// 				}
// 			} catch (error) {
// 				console.error("Error fetching news from localStorage:", error);
// 			}
// 		};
// 		fetchNewsFromLocalStorage();
// 	}, []);

// 	const openModal = (index) => {
// 		setCurrentNewsIndex(index);
// 		setIsModalOpened(true);
// 		setIsModalImgOpened(false);
// 		document.body.style.overflow = "hidden";
// 	};

// 	const closeModal = () => {
// 		setIsModalOpened(false);
// 		document.body.style.overflow = "auto";
// 	};

// 	const saveNewsToLocalStorage = (updatedNews) => {
// 		try {
// 			localStorage.setItem("news", JSON.stringify(updatedNews));
// 		} catch (error) {
// 			console.error("Error saving news to localStorage:", error);
// 		}
// 	};

// 	const updateNewsText = async (index, newText) => {
// 		const updatedNews = news.map((item, i) =>
// 			i === index ? { ...item, text: newText } : item,
// 		);
// 		setNews(updatedNews);
// 		saveNewsToLocalStorage(updatedNews);
// 	};

// 	const updateNewsImage = async (index, newImage) => {
// 		const updatedNews = news.map((item, i) =>
// 			i === index ? { ...item, img: newImage } : item,
// 		);
// 		setNews(updatedNews);
// 		saveNewsToLocalStorage(updatedNews);
// 	};

// 	const openImgModal = (index) => {
// 		setCurrentNewsIndex(index);
// 		setIsModalImgOpened(true);
// 		setIsModalOpened(false);
// 		document.body.style.overflow = "hidden";
// 	};

// 	const closeImgModal = () => {
// 		setIsModalImgOpened(false);
// 		document.body.style.overflow = "auto";
// 	};

// 	return (
// 		<div className={style.adminNews_wrapper}>
// 			{news.map((item, index) => (
// 				<div className={style.banner} key={item.id}>
// 					<div className={style.banner_img}>
// 						<img className={style.img} src={item.img} alt="news" />
// 						<button className={style.button} onClick={() => openImgModal(index)}>
// 							Редактировать фото
// 						</button>
// 					</div>
// 					<p className={style.banner_text}>
// 						{item.text}
// 						<br />
// 						<button className={style.button} onClick={() => openModal(index)}>
// 							Редактировать текст новости
// 						</button>
// 					</p>
// 				</div>
// 			))}
// 			{isModalOpened && (
// 				<ModalForNewsText
// 					onClose={closeModal}
// 					initialText={news[currentNewsIndex]?.text}
// 					onSave={(newText) => updateNewsText(currentNewsIndex, newText)}
// 				/>
// 			)}
// 			{isModalImgOpened && (
// 				<ModalForNewsImg
// 					onClose={closeImgModal}
// 					onSave={(newImage) => updateNewsImage(currentNewsIndex, newImage)}
// 				/>
// 			)}
// 		</div>
// 	);
// }
