//import style from './HomePage/HomePage.module.scss';
import homepage from '../../assets/homepage.jpg';
import ornament from '../../assets/tatarornament.png';
import prokopevsk from '../../assets/prokopevsk.jpg';
import { useState } from 'react';
import { Modal } from 'antd';
import style from '../HomePage/HomePage.module.scss';


export default function HomePage(){

    const[modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = ()=>{
        setModalIsOpen (true);
    }

    const handleOk = () => {
        setModalIsOpen(false);
      };
      const handleCancel = () => {
        setModalIsOpen(false);
      };

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
        <button className={style.button} onClick={openModal}>История</button>
        <Modal  open={modalIsOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className={style.modal__title}>История</p>
        <img width='300px' src={prokopevsk} alt="Прокопьевск" className={style.modal__img}/>
        <p>Заселения и деятельности мусульман в Прокопьевском районе. Первая волна: Мусульмане – это татары и башкиры, приехали в 1920-е годы из Татарии и Башкирии, кто-то добровольно, а кто-то и принудительно в период массового раскулачивания переселения народов СССР. Они бережно хранили традиции, язык и свои культурные ценности. А вот дети, родившиеся и выросшие среди русскоязычного населения и попавшие в период неуклонной борьбы власти со всяким проявлением «религиозного опиума», свой национальный язык уже знали недостаточно хорошо. В 1930-е гг. были открыты татарская неполная средняя школа №12, русско-татарские школы – начальная №28, неполная средняя №23. В 1946–1949 гг. работала мечеть.</p>
        <p>Вторая волна заселения мусульман пришлась на 50-60годы ХХ столетия. Это люди, прибывшие в основном по направлению различных учебных заведений на трудовую практику. Молодежь создавали семьи, получали жилье и оставались жить на Прокопьевской земле. Браки были смешанные и соответственно мусульманские обычаи стали ослабевать. Не было ни мечетей, ни медресе, истинные мусульмане с годами уходили в мир иной унося с собой строгие устои и каноны.</p>
        <p>В конце 90-х годов правительство страны признало любое вероисповедание свободным и допустимым. У мусульман появилась возможность получать духовное и нравственное наставничество что, безусловно, способствовало возрождению и укреплению национальных традиций.</p>
        </Modal>
        </div>
        </div>
        <div className={style.note}>
        <p>*Данные о наслении актуальны на 2024 год</p>
        <p>**Данные о численности татар актуальны на 2010 год</p>
        </div>
        <div className={style.ornament}>
        <img className={style.ornament__img} src={ornament} alt="ornament" />
        </div>
        <hr />
        <div className={style.welcome}>
            <div className={style.container__welcomeimg}>
            <img width="500px" src={homepage} alt="татары Прокопьевска" className={style.welcome__img}/>
            </div>
            <div className={style.welcome__text}>
            <p>Исенмесез Дуслар! </p>
            <p>Ообщественная организация "Татарская национально-культурная автономия города Прокопьевск" приветствует вас на своем сайте! 
Целью нашей организации является объединение граждан Российской Федерации, относящих себя к этнической общности татар, и проживающих на территории города Прокопьевск и Кемеровской области-Кузбасс. Мы содействуем возрождению и развитию национального самосознания и самобытности татар, проживающих в Прокопьевске, устанавливаем и поддерживаем культурные связи с татарами других регионов РФ и мира. Мы содействуем изучению и сохранению татарского языка, организации национального краеведения и охране национальных памятников истории и культуры. Мы знакомим широкую общественность с историческим и культурным наследием, а также традициям и историей татарского народа. Мы организуем и проводим мероприятия и встречи. </p>
<p>Добро пожаловать! Рахим итегез!</p>
</div>
        </div>
    </>
    )
}