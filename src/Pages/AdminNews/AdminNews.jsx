import NewsInput from "./NewsInput";
import style from "./AdminNews.module.scss";
import UpploadNews from "../../Components/UploadNews/UploadNews";

export default function AdminNews() {
	return (
		<div className={style.news_board}>
			{/* <UpploadNews /> */}
			<NewsInput />
		</div>
	);
}
