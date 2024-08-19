import { useState } from "react";
import { Link } from "react-router-dom"
import currentData from "../../../Common/Sabantuy/sabantuyCurrent";

import NavigationButtons from "../NavigationsButton";
import ScrollToTopButton from "../ScrollToTopButton";

import style from "./SabantuyCurrentYear.module.scss";

export default function SabantuyCurrentYear() {
  const [fullscreenPhotoIndex, setFullscreenPhotoIndex] = useState(null);

  const handlePhotoClick = (index) => {
    setFullscreenPhotoIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenPhotoIndex(null);
  };

  const handlePrev = (event) => {
    event.stopPropagation();
    setFullscreenPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : currentData.length - 1));
  };

  const handleNext = (event) => {
    event.stopPropagation();
    setFullscreenPhotoIndex((prevIndex) => (prevIndex < currentData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={style.block__currentyear}>

      <div className={style.back__button}>
        <Link to="/sabantui" className={style.back__button_current}>назад</Link>
      </div>

      <div className={style.current}>
        <h2 className={style.current__title}>Сабантуй 2024</h2>
        <div className={style.current__text}>
          <p className={style.current__text_descr}>30 июня в Прокопьевске прошел <strong>4 Международный шахтерский Сабантуй</strong> .</p>
          <p className={style.current__text_descr}>Перед гостями парадом прошли почетные шахтеры, работники угольной отрасли разных регионов
            страны. Свою национальную культуру, традиции, быт и кухню продемонстрировали татары и другие национальности. Было выставлено более 10 разных подворий. Национально-культурная
            автономия татар Прокопьевска оформила подворье в самой большой палатке, где были
            выставлены на столах оформленных старинными вышитыми скатертями национальные
            различные блюда, самовар и татарский чай с молоком, с медом. Оформлена выставка тюбетеек,
            платков. Представлена сцена с прядением пряжи на старинной прялке, укачиванием ребенка в
            люльке и много других атрибутов быта татарской семьи.</p>
          <p className={style.current__text_descr}>Весь день праздник сопровождался концертной программой с национальными песнями артистов
            г.Лениногорска и лучшими творческими коллективами Кузбасса .</p>
          <p className={style.current__text_descr}>Работали площадки с национальными играми, ярмарка ремесленников, отдельная программа для
            детей. Свои умения показали наездницы в зрелищном виде спорта-конкуре. Много болельщиков
            собрал традиционная борьба на поясах-корэш.</p>
          <p className={style.current__text_descr}>Этот день надолго останется в памяти участников.</p>
          <p className={style.current__text_descr}>Большое спасибо ЗУР РАХМЭТ Организаторам и всем участникам Международного шахтерского
            Сабантуя.</p>
        </div>
      </div>

      <div className={style.gallery__current}>
        {currentData.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.img}
            alt={`Sabantuy photo ${index + 1}`}
            className={style.gallery__current_photo}
            onClick={() => handlePhotoClick(index)}
          />
        ))}
      </div>

      <div className={style.btn}>
        <a
          href="https://vk.com/album-2329819_303579940"
          target="_blank"
          rel="noopener noreferrer"
          className={style.btn__more}
        >
          Смотреть фото больше
        </a>
      </div>

      {fullscreenPhotoIndex !== null && (
        <div className={style.fullscreen__overlay} onClick={closeFullscreen}>
          <button className={style.close__button} onClick={closeFullscreen}>
            &times;
          </button>
          <img
            src={currentData[fullscreenPhotoIndex].img}
            alt={currentData[fullscreenPhotoIndex].alt || "Fullscreen"}
            className={style.fullscreen__overlay_photo}
          />
          <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}
