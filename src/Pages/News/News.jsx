import NewsBanner from "./NewsBanner";
import style from './News.module.scss';

export default function News(){
    return(
        <div className={style.news_board}>
        <NewsBanner/>
        </div>
    )
}