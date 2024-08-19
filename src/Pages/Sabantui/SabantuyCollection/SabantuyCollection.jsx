import { useState } from "react";
import { Link } from "react-router-dom";
import collectionData from "../../../Common/Sabantuy/sabantuyCollection.json";
import NavigationButtons from "../NavigationsButton";
import ScrollToTopButton from "../ScrollToTopButton";

import style from "./SabantuyCollection.module.scss";


export default function SabantuyCollection() {
  const [fullscreenPhotoIndex, setFullscreenPhotoIndex] = useState(null);

  const handlePhotoClick = (photo) => {
    setFullscreenPhotoIndex(photo);
  };

  const closeFullscreen = () => {
    setFullscreenPhotoIndex(null);
  };

  const handlePrev = (event) => {
    event.stopPropagation();
    setFullscreenPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : collectionData.length - 1));
  };

  const handleNext = (event) => {
    event.stopPropagation();
    setFullscreenPhotoIndex((prevIndex) => (prevIndex < collectionData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={style.block__collection}>

      <div className={style.back__button}>
        <Link to="/sabantui" className={style.back__button_collection}>назад</Link>
      </div>

      <h2 className={style.title}>Коллекция Сабантуев</h2>

      <div className={style.text}>
        <p className={style.text__descr}>Когда сердце наполняется радостью и воздух наполняется песнями, когда каждый шаг к встрече с друзьями и родными становится праздником — это <strong>Сабантуй</strong>. </p>
        <p className={style.text__descr}>В этом разделе мы собрали для вас коллекцию всех прошедших праздников, каждый из которых стал страницей в нашей истории. Переходите по <a href="https://vk.com/tatar_prk" className={style.text__descr_link} >ссылке</a> или по специальной кнопке, которая доступна ниже, чтобы окунуться в атмосферу радости и вдохновения. Пусть каждая фотография и видео напомнят вам о тех моментах, когда мы вместе создавали волшебство. Добро пожаловать в наш мир праздника и традиций!</p>
      </div>

      <div className={style.btn}>
        <a
          href="https://vk.com/tatar_prk"
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.btn__more} ${style.pulse}`}
        >
          Смотреть больше
        </a>
      </div>

      <div className={style.gallery__photo}>
        <h2 className={style.gallery__photo_title}>Зимний Сабантуй</h2>
        <div className={style.gallery__photo_items}>
          {collectionData.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.img}
              alt={`Sabantuy photo ${index + 1}`}
              className={style.photo}
              onClick={() => handlePhotoClick(index)}
            />
          ))}
        </div>

        {fullscreenPhotoIndex !== null && (
          <div className={style.fullscreen__overlay} onClick={closeFullscreen}>
            <button className={style.close__button} onClick={closeFullscreen}>
              &times;
            </button>
            <img
              src={collectionData[fullscreenPhotoIndex].img}
              alt="Fullscreen"
              className={style.fullscreen__overlay_photo}
            />
            <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
          </div>
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
}
