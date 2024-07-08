import style from './WeAreTogether.module.scss'
import childrenImg from '../../assets/images/children9.jpg';
import helpImg from '../../assets/images/help.jpg';
import galleryImg from '../../assets/images/gallery4.jpg';
import { useState } from 'react'
import ChildrenModule from './ChildrenModule'
import HelpModal from './HelpModal';
import GalleryModal from './GalleryModal';


const WeAreTogether = () => {

	const [activeChildren, setActiveChildren] = useState(false);
	const [activeHelp, setActiveHelp] = useState(false);
	const [activeGallery, setActiveGallery] = useState(false);
	
	

	return (
		<section className={style.content}>
			<div className={style.header__content}>
			<h1 className={style.header}>БЭЗ БЕРГЭ! МЫ ВМЕСТЕ!</h1>
			<p className={style.text}>Единство и братство народов России всегда было и остается главной опорой и преимуществом России, которое помогает покорять ей новые вершины. Мы в России хорошо знаем, каким богатством является такое многообразие наций, каким мощным позитивным зарядом развития и духовного взаимообогащения оно обладает. Мы едины!</p>
			</div>
			<div className={style.article__content}>
			<article className={style.content__img}>
				<div className={style.img__block}>
				<img src={childrenImg} alt='наша молодежь' className={style.img} />
				<h2 className={style.header__img} onClick={()=>setActiveChildren(true)}>Наша молодежь</h2> 
				 </div> 
				 </article>
				 <ChildrenModule active={activeChildren} setActive={setActiveChildren}/>
			<article className={style.content__img}>
			<div className={style.img__block}>
				<img src={helpImg} alt='мы помогаем' className={style.img} />
				<h2 className={style.header__img} onClick={()=>setActiveHelp(true)}>Помогаем в трудную минуту</h2>
				 </div> 
				 </article> 
				<HelpModal active={activeHelp} setActive={setActiveHelp}/>
			<article className={style.content__img}>
			<div className={style.img__block}>
				<img src={galleryImg} alt='наша галерея' className={style.img} />
				<h2 className={style.header__img} onClick={()=>setActiveGallery(true)}>Галерея</h2> 
				 </div> 
				 </article>
				 <GalleryModal active={activeGallery} setActive={setActiveGallery}/>
			
			</div>
		</section>
	)
}

export default WeAreTogether