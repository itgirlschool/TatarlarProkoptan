import style from "./HomePageMobile.module.scss";
import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import history from "../../Common/history.json";

export default function HomePageMobile() {
  return (
    <section className={style.content}>
      <h1 className={style.header}>История</h1>
      <article className={style.content__img}>
        <Carousel className={style.carousel} autoplay>
          {history.map((item) => {
            return (
              <div key={item.id}>
                <h3 className={style.gallery__content}>
                  <img
                    className={style.gallery__img}
                    src={item.img}
                    alt="фотографии Прокопьевска"
                  />
                </h3>
              </div>
            );
          })}
        </Carousel>
      </article>
      <div className={style.text}>
        <p>
          Заселения и деятельности мусульман в Прокопьевском районе. Первая
          волна: Мусульмане – это татары и башкиры, приехали в 1920-е годы из
          Татарии и Башкирии, кто-то добровольно, а кто-то и принудительно в
          период массового раскулачивания переселения народов СССР. Они бережно
          хранили традиции, язык и свои культурные ценности. А вот дети,
          родившиеся и выросшие среди русскоязычного населения и попавшие в
          период неуклонной борьбы власти со всяким проявлением «религиозного
          опиума», свой национальный язык уже знали недостаточно хорошо. В
          1930-е гг. были открыты татарская неполная средняя школа №12,
          русско-татарские школы – начальная №28, неполная средняя №23. В
          1946–1949 гг. работала мечеть. С 2012 г. при Центре дополнительного
          образования детей работает воскресная школа по изучению татарского
          языка, культуры, основ религии. В 2005 г. открылся Центр татарской
          культуры «Яшлек». На его базе действуют фольклорный ансамбль «Лейсан»,
          танцевальный коллектив «Чулпан», клубы: национального татарского блюда
          «Тамле аш»; юмористов «Кызык халляр, мазяк халляр»; знакомств «Танышу
          клубы». С 1998 г. проводится Сабантуй. Состоялся городской конкурс
          красоты «Татар кызы – 2016».
        </p>
        <br />
        <i>Известные уроженцы </i>
        <p>
          Среди уроженцев города: доктор биологических наук Р.Р.Нигматуллина. С
          Прокопьевском связаны жизнь и деятельность шахтеров: Героя
          Социалистического Труда, кавалера 3-х орденов Ленина Ш.Зайнутдинова,
          кавалеров орденов Ленина и Трудового Красного Знамени Ш.Сайфутдинова,
          М.Шакирова, полного кавалера знака «Шахтерская слава», ордена
          Трудового Красного Знамени М.А.Абселямова.
        </p>
        <p>
          Вторая волна заселения мусульман пришлась на 50-60годы ХХ столетия.
          Это люди, прибывшие в основном по направлению различных учебных
          заведений на трудовую практику. Молодежь создавали семьи, получали
          жилье и оставались жить на Прокопьевской земле. Браки были смешанные и
          соответственно мусульманские обычаи стали ослабевать. Не было ни
          мечетей, ни медресе, истинные мусульмане с годами уходили в мир иной
          унося с собой строгие устои и каноны.
        </p>
        <p>
          В конце 90-х годов правительство страны признало любое вероисповедание
          свободным и допустимым. У мусульман появилась возможность получать
          духовное и нравственное наставничество что, безусловно, способствовало
          возрождению и укреплению национальных традиций.
        </p>
      </div>
      <Link className={style.back__btn} to="/">
        Назад
      </Link>
    </section>
  );
}
