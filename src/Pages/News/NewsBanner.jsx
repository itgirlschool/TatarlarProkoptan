import style from "./NewsBanner.module.scss";
import { useEffect, useState } from "react";
import { db } from "../../../firestoreInit.js";
import { collection, getDocs } from "firebase/firestore";

export default function NewsBanner() {
	const [news, setNews] = useState([]);

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
				console.error("Ошибка при получении новостей:", error);
			}
		};
		fetchNews();
	}, []);

	return news.map((item) => (
		<div className={style.banner} key={item.id}>
			<div className={style.banner_img}>
				<img className={style.img} src={item.img || ""} alt="news" />
			</div>
			<p className={style.banner_text}>
				{item.text || "Новость без текста"}
				<br />
				<a href="#" className={style.news_link} onClick={(e) => e.preventDefault()}>
					Читать полностью
				</a>
			</p>
		</div>
	));
}
