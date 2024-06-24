//import style from './HomePage/HomePage.module.scss';
import homepage from '../../assets/homepage.jpg';
import { useState } from 'react';
import style from '../HomePage/HomePage.module.scss';
import ModalHomePage from './ModalHomePage';


export default function HomePage(){

    const[modalActive, setModalActive] = useState(false);

    return(
        <>
        <h1 className={style.title}>Татары Прокопьевска</h1>
        <div className={style.info}>
            <div>
        <h2 className={style.title__video}>Прокопьевск</h2>
        <p>Город на юге Кузбасса. 189 км от столицы</p>
        <div className={style.video}><iframe width="560" height="315" src="https://www.youtube.com/embed/bWqBGrflpqE?si=GOt3IbzR3VF3anQT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>
        <div className={style.info__video}>
            <div>
            <div className={style.info__text}><span className={style.text}>Основан:</span> 1931 год</div>
            <div className={style.info__text}><span className={style.text}>Население:</span> 196 406 человек&#42;</div>
            <div className={style.info__text}><span className={style.text}>Численность татар:</span> 7412 человек&#42;&#42;</div>
            </div>
        <button className={style.button} onClick={()=> setModalActive(true)}>История</button>
        <ModalHomePage active={modalActive} setActive={setModalActive}/>
        </div>
        </div>
        <div className={style.note}>
        <p>*Данные о наслении актуальны на 2024 год</p>
        <p>**Данные о численности татар актуальны на 2010 год</p>
        </div>
        <p className={style.welcome__title}>Исенмесез Дуслар! </p>
        <div className={style.welcome}>
            <div className={style.container__welcomeimg}>
            <img width="500px" src={homepage} alt="татары Прокопьевска" className={style.welcome__img}/>
            </div>
            <div className={style.welcome__text}>
            <p>Ообщественная организация "Татарская национально-культурная автономия города Прокопьевск" приветствует вас на своем сайте! 
Целью нашей организации является объединение граждан Российской Федерации, относящих себя к этнической общности татар, и проживающих на территории города Прокопьевск и Кемеровской области-Кузбасс. Мы содействуем возрождению и развитию национального самосознания и самобытности татар, проживающих в Прокопьевске, устанавливаем и поддерживаем культурные связи с татарами других регионов РФ и мира. Мы содействуем изучению и сохранению татарского языка, организации национального краеведения и охране национальных памятников истории и культуры. Мы знакомим широкую общественность с историческим и культурным наследием, а также традициям и историей татарского народа. Мы организуем и проводим мероприятия и встречи. </p>
<p className={style.welcome__end}>Добро пожаловать! Рахим итегез!</p>
</div>
        </div>
    </>
    )
}