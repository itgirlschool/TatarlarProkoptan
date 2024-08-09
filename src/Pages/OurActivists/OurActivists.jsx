import ScrollToTopButton from './ScrollToTopButton';
import style from './OurActivists.module.scss';

import lilia from '../../assets/images/ourActivists/lilia-idrisovna.png';
import elvira from '../../assets/images/ourActivists/elvira-szaixulovna.png';
import gilnur from '../../assets/images/ourActivists/gilnur-iagafovna.png';
import rais from '../../assets/images/ourActivists/rais-rifkatovicz.png';
import nail from '../../assets/images/ourActivists/nail-ismagilovicz.png';
import marat from '../../assets/images/ourActivists/marat-minnegarifovicz.png';
import kongress from '../../assets/icon/kongress.svg';
import vvk from '../../assets/icon/vvk.svg';
import frameRight from '../../assets/icon/frameRight.svg';
import frameLeft from '../../assets/icon/frameLeft.svg';

const cards = [
    { id: 'a1', image: lilia, name: 'Лилия Идрисовна Якутович', jobTitle: 'Председатель правления Автономии' },
    { id: 'a2', image: elvira, name: 'Эльвира Шайхуловна Мужбатуллина', jobTitle: 'Заместитель председателя правления Автономии' },
    { id: 'a3', image: gilnur, name: 'Гильнур Ягафаровна Ахмерова ', jobTitle: 'Член совета правления Автономии ' },
    { id: 'a4', image: rais, name: ' Раис Рифкатович Мужбатуллин', jobTitle: 'Член совета правления Автономии' },
    { id: 'a5', image: nail, name: 'Наиль Исмагилович Хисматуллин ', jobTitle: 'Член совета правления Автономии' },
    { id: 'a6', image: marat, name: ' Марат Миннегарифович Биккинин ', jobTitle: 'Член совета правления Автономии' }
]

const OurActivists = () => {
    return (
        <>
            <div className={style.container}>
                <h2 className={style.title}>Наши активисты</h2>
                <div className={style.content}>

                    {cards.map((card, id) => (
                        <div key={id} className={style.card}>
                            <div className={style.card__details}>
                                <div className={style.frame}>
                                    <img src={frameLeft} alt="Frame with ornament" />
                                    <img src={card.image} alt={card.name} className={style.image} />
                                    <img src={frameRight} alt="Frame with ornament" />
                                </div>
                                <h3 className={style.name}>{card.name}</h3>
                                <p className={style.job}>{card.jobTitle}</p>
                            </div>

                            {id === 0 && (
                                <div className={style.wrappBtn}>
                                    <button className={style.more}>
                                        <a href='https://tatar-congress.org/ru/about/obshestvennye-organizatsii-pri-vkt/ak-kalfak/'>
                                            <img src={kongress} alt="" />
                                        </a>
                                    </button>
                                    <button className={style.more}>
                                        <a href='https://vk.com/id13125995'>
                                            <img src={vvk} alt="" />
                                        </a>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <ScrollToTopButton />
        </>
    );
};
export default OurActivists;
