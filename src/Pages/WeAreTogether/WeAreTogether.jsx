import style from './WeAreTogether.module.scss'
import { Carousel } from 'antd'
import children from '../../Common/children.json'
import help from '../../Common/help.json'
import gallery from '../../Common/gallery.json'
import childrenImg from '../../assets/images/children9.jpg';
import helpImg from '../../assets/images/help.jpg';
import galleryImg from '../../assets/images/gallery4.jpg';
import { useState } from 'react'






const WeAreTogether = () => {

	const [activeChildren, setActiveChildren] = useState(true);
	const [activeHelp, setActiveHelp] = useState(true)
	const [activeGallery, setActiveGallery] = useState(true)


	const handleClickChildren =()=>{
	setActiveChildren((prev) => !prev);
	}
	const handleClickHelp =()=>{
		setActiveHelp((prev) => !prev);
		}
	const handleClickGallery =()=>{
		setActiveGallery((prev) => !prev);
		}

	return (
		<section className={style.content}>
			<div className={style.header__content}>
			<h1 className={style.header}>БЭЗ БЕРГЭ! МЫ ВМЕСТЕ!</h1>
			<p className={style.text}>Единство и братство народов России всегда было и остается главной опорой и преимуществом России, которое помогает покорять ей новые вершины. Мы в России хорошо знаем, каким богатством является такое многообразие наций, каким мощным позитивным зарядом развития и духовного взаимообогащения оно обладает. Мы едины!</p>
			</div>
			<div className={style.article__content}>
			{ activeChildren ? (
			<article className={style.content__img}>
				<div className={style.img__block}>
				<img src={childrenImg} alt='наша молодежь' className={style.img} onClick={handleClickChildren}/>
				 </div> 
				 </article>) : (
					<article className={style.content__img}>
				{/* <h2 className={style.header__img}>Наша молодежь</h2> */}
				 <Carousel className={style.carousel} effect='fade' arrows draggable>
					{children.map((item) => { 
					 return( 
						 <div key={item.id}  onClick={handleClickChildren}> 
							 <h3 className={style.gallery__content}> 
								 <img className={style.gallery__img}  
								 src={item.img}  
								 alt='фотографии с нашей молодежью'
								/>  
							</h3> 
						 </div> 
				 )})}
				 </Carousel> 
			</article> )}
			{activeHelp ? (
			<article className={style.content__img}>
			<div className={style.img__block}>
				<img src={helpImg} alt='мы помогаем' className={style.img} onClick={handleClickHelp}/>
				 </div> 
				 </article>) :(
					<article className={style.content__img}>
				{/* <h2 className={style.header__img}>Помогаем в трудную минуту</h2> */}
				 <Carousel className={style.carousel} effect='fade' arrows draggable >
					 {help.map((item) => { 
						 return( 
						 <div key={item.id} onClick={handleClickHelp}> 
							 <h3 className={style.gallery__content}> 
								 <img className={style.gallery__img}  
								 src={item.img}  
								 alt='фотографии помощи бойцам сво'/> 
							 </h3> 
					 </div> 
					 )})} 
				 </Carousel> 
			</article>
			)}
			{ activeGallery ? (<article className={style.content__img}>
			<div className={style.img__block}>
				<img src={galleryImg} alt='наша галерея' className={style.img} onClick={handleClickGallery}/>
				 </div> 
				 </article>) 
				 :
			(<article className={style.content__img}>
				{/* <h2 className={style.header__img}>Галерея</h2> */}
				 <Carousel className={style.carousel} effect='fade' arrows draggable > 
					 {gallery.map((item) => {
						 return( 
						 <div key={item.id} onClick={handleClickGallery}> 
						 <h3 className={style.gallery__content}> 
								 <img className={style.gallery__img}  
								 src={item.img}  
								 alt='фотографии людей'/> 
							 </h3> 
						 </div> 
					 )})} 
				 </Carousel> 
			</article>)}
			</div>
		</section>
	)
}

export default WeAreTogether