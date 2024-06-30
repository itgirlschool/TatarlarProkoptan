import prokopevsk from "../../../dist/imgs/prokopevsk.jpg";
import closeImg from "../../assets/close.svg";
import carousel1 from "../../../dist/imgs/carousel1.jpg";
import carousel2 from "../../../dist/imgs/carousel2.jpg";
import carousel3 from "../../../dist/imgs/carousel3.jpg";
import carousel4 from "../../../dist/imgs/carousel4.jpg";
import carousel5 from "../../../dist/imgs/carousel5.jpg";
import carousel6 from "../../../dist/imgs/carousel6.jpg";
import carousel7 from "../../../dist/imgs/carousel7.jpg";
import carousel8 from "../../../dist/imgs/carousel8.jpg";
import style from "./ModalHomePage.module.scss";

export default function ModalHomePage({ active, setActive }) {
  return (
    <>
      <div className={active ? `${style.active}` : `${style.modal}`}>
        <div className={style.modal__content}>
          <div className={style.header}>
            <p className={style.modal__title}>История</p>
            <button
              onClick={() => setActive(false)}
              className={style.close__btn}
            >
              <img src={closeImg} alt="Закрыть" className={style.close__img} />
            </button>
          </div>
          <div className={style.grid__container}>
            <div className={style.grid__item}>
              <img src={prokopevsk} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel1} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel2} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel3} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel4} alt="Прокопьевск" />
            </div>
            <div className={style.text__container}>
              <div className={style.modal__info}>
                <p>
                  Заселения и деятельности мусульман в Прокопьевском районе.
                  Первая волна: Мусульмане – это татары и башкиры, приехали в
                  1920-е годы из Татарии и Башкирии, кто-то добровольно, а
                  кто-то и принудительно в период массового раскулачивания
                  переселения народов СССР. Они бережно хранили традиции, язык и
                  свои культурные ценности. А вот дети, родившиеся и выросшие
                  среди русскоязычного населения и попавшие в период неуклонной
                  борьбы власти со всяким проявлением «религиозного опиума»,
                  свой национальный язык уже знали недостаточно хорошо. В 1930-е
                  гг. были открыты татарская неполная средняя школа №12,
                  русско-татарские школы – начальная №28, неполная средняя №23.
                  В 1946–1949 гг. работала мечеть. С 1994 г. действует общество
                  мусульман «Махалля Рамазан» Функционируют мечеть (с 1996 г., в
                  ее здании находится музей прикладного искусства и быта татар)
                  и мусульманский молитвенный дом (с 2004 г.). С 2012 г. при
                  Центре дополнительного образования детей работает воскресная
                  школа по изучению татарского языка, культуры, основ религии. В
                  2005 г. открылся Центр татарской культуры «Яшлек». На его базе
                  действуют фольклорный ансамбль «Лейсан», танцевальный
                  коллектив «Чулпан», клубы: национального татарского блюда
                  «Тамле аш»; юмористов «Кызык халляр, мазяк халляр»; знакомств
                  «Танышу клубы». С 1998 г. проводится Сабантуй. Состоялся
                  городской конкурс красоты «Татар кызы – 2016».
                </p>
                <i>Известные уроженцы </i>
                <p>
                  Среди уроженцев города: доктор биологических наук
                  Р.Р.Нигматуллина. С Прокопьевском связаны жизнь и деятельность
                  шахтеров: Героя Социалистического Труда, кавалера 3-х орденов
                  Ленина Ш.Зайнутдинова, кавалеров орденов Ленина и Трудового
                  Красного Знамени Ш.Сайфутдинова, М.Шакирова, полного кавалера
                  знака «Шахтерская слава», ордена Трудового Красного Знамени
                  М.А.Абселямова.
                </p>
                <p>
                  Вторая волна заселения мусульман пришлась на 50-60годы ХХ
                  столетия. Это люди, прибывшие в основном по направлению
                  различных учебных заведений на трудовую практику. Молодежь
                  создавали семьи, получали жилье и оставались жить на
                  Прокопьевской земле. Браки были смешанные и соответственно
                  мусульманские обычаи стали ослабевать. Не было ни мечетей, ни
                  медресе, истинные мусульмане с годами уходили в мир иной унося
                  с собой строгие устои и каноны.
                </p>
                <p>
                  В конце 90-х годов правительство страны признало любое
                  вероисповедание свободным и допустимым. У мусульман появилась
                  возможность получать духовное и нравственное наставничество
                  что, безусловно, способствовало возрождению и укреплению
                  национальных традиций.
                </p>
              </div>
            </div>
            <div className={style.grid__item}>
              <img src={carousel5} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel6} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel7} alt="Прокопьевск" />
            </div>
            <div className={style.grid__item}>
              <img src={carousel8} alt="Прокопьевск" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
