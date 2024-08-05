import style from './NewsBanner.module.scss';
import news from '../../Common/news.json';


export default function NewsBanner(){
    return(
    news.map((item)=>{
            return(
                <div className={style.banner} key={item.id}>
                 <div className={style.banner_img}>
                 <img className={style.img} src={item.img} alt="news" />
             </div>
             <p className={style.banner_text}>{item.text}</p>
             </div>
            )
        })
          
    )
}