import style from './ChildrenModal.module.scss'
import children from '../../Common/children.json'
import { Carousel } from 'antd'



export default function ChildrenModule ({active, setActive}){
    return(
        <article className={active ? `${style.active}` : `${style.content__modal}`}>
				  <Carousel className={style.carousel__modal} effect='fade' autoplay arrows> 
					 {children.map((item) => {  
					  return(  
						  <div key={item.id} >  
                           <button onClick={()=>setActive(false)} className={style.close__button}>Назад</button>
							  <h3 className={style.gallery__content}>  
								  <img className={style.gallery__img}   
								  src={item.img}  
								 alt='фотографии с нашей молодежью'
								/>   
							 </h3>  
						 </div> 
			  )})}
				 </Carousel>  
			</article> 
    )
}