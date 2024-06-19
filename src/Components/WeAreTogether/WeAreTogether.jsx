import style from './WeAreTogether.module.scss'
import { Carousel } from 'antd'
import children from '../../Servisec/children.json'
import help from '../../Servisec/help.json'
import gallery from '../../Servisec/gallery.json'

const WeAreTogether = () => {
	return (
		<section className={style.content}>
			<h1 className={style.header}>БЭЗ БЕРГЭ! МЫ ВМЕСТЕ!</h1>
			<p className={style.text}>Единство и братство народов России всегда было и остается главной опорой и преимуществом России, которое помогает покорять ей новые вершины. Мы в России хорошо знаем, каким богатством является такое многообразие наций, каким мощным позитивным зарядом развития и духовного взаимообогащения оно обладает. Мы едины!</p>
			<article className={style.content__img}>
				<h2 className={style.header__img}>Наша молодежь</h2>
				<Carousel className={style.carousel} effect='fade' arrows draggable >
				{children.map((item) => {
					return(
					<div key={item.id}>
						<h3 className={style.gallery__content}>
							<img className={style.gallery__img} 
							src={item.img} 
							alt="img"/>
						</h3>
					</div>
				)})}
			</Carousel>
			</article>
			<article className={style.content__img}>
				<h2 className={style.header__img}>Помогаем в трудную минуту</h2>
				<Carousel className={style.carousel} effect='fade' arrows draggable >
				{help.map((item) => {
					return(
					<div key={item.id}>
						<h3 className={style.gallery__content}>
							<img className={style.gallery__img} 
							src={item.img} 
							alt="img"/>
						</h3>
					</div>
				)})}
			</Carousel>
			</article>
			<article className={style.content__img}>
				<h2 className={style.header__img}>Галерея</h2>
				<Carousel className={style.carousel} effect='fade' arrows draggable >
				{gallery.map((item) => {
					return(
					<div key={item.id}>
						<h3 className={style.gallery__content}>
							<img className={style.gallery__img} 
							src={item.img} 
							alt="img"/>
						</h3>
					</div>
				)})}
			</Carousel>
			</article>
		</section>
	)
}

export default WeAreTogether