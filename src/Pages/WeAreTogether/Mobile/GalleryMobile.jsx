import gallery from '../../../Common/gallery.json'
import { Carousel } from 'antd'
import style from './Mobile.module.scss'
import { Link } from "react-router-dom";
import React from "react";

export default function GalleryMobile(){
    return(
        <article className={style.active__modal}>	
				 <Carousel className={style.carousel__modal} effect='fade' autoplay arrows > 
					 {gallery.map((item) => {
						 return( 
						 <div key={item.id}> 
                          <Link to="/we-are-together" className={style.close__button}>Назад</Link>
						 <h3 className={style.gallery__content}> 
								 <img className={style.gallery__img}  
								 src={item.img}  
								 alt='фотографии людей'/> 
							 </h3> 
						 </div> 
					 )})} 
				 </Carousel> 
			</article>
    )
}