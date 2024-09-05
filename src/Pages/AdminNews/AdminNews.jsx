import NewsInput from "./NewsInput";
import style from "./AdminNews.module.scss";

export default function AdminNews() {
	return (
		<div className={style.news_board}>
			<NewsInput />
		</div>
	);
}
