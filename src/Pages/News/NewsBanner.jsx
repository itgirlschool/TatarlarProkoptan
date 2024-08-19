import style from './NewsBanner.module.scss';
import news from '../../Common/news.json';


export default function NewsBanner(){
    return(
    news.map((item)=>{
            return(
                <div className={style.banner} key={item.id}>
                 <div className={style.banner_img}>
                <a href="#"> 
                <img className={style.img} src={item.img} alt="news"/>
                </a>
             </div>
             <p className={style.banner_text}>{item.text}<br/>
             <a href="#" className={style.news_link}>Читать полностью</a>
             </p>
             </div>
            )
        })
          
    )
}