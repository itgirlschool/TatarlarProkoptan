import { useEffect } from "react";
import { db } from "../../../firestoreInit.js";
import newsData from "../../Common/news1.json";
import { setDoc, doc } from "firebase/firestore";

import { setLogLevel } from "firebase/firestore";
setLogLevel("debug");

export default function UploadNews() {
	useEffect(() => {
		const uploadNewsToFirestore = async () => {
			try {
				const promises = newsData.map(async (item) => {
					try {
						console.log(`Загружаем новость с id ${item.id}...`);
						const newsDocRef = doc(db, "news", item.id); // Создание документа с id
						await setDoc(newsDocRef, item); // Запись данных в документ
						console.log(`Новость с id ${item.id} успешно загружена`);
					} catch (error) {
						console.error(`Ошибка при загрузке новости с id ${item.id}: `, error);
					}
				});

				await Promise.all(promises); // Ожидание завершения всех загрузок
				console.log("Все новости успешно загружены в Firestore!");
			} catch (error) {
				console.error("Ошибка при загрузке новостей в Firestore: ", error);
			}
		};

		uploadNewsToFirestore();
	}, []);

	return (
		<div>
			<h1>UploadNews Firestore...</h1>
		</div>
	);
}
