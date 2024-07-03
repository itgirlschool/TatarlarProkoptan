import { useState } from "react";
import style from "./SabantuyCollection.module.scss";
import { Link } from "react-router-dom";
import video from "../../../assets/images/Sabantuy/Зимний Сабантуй в Прокопьевске -2023.mp4";
import collectionData from "../../../Common/Sabantuy/sabantuyCollection.json";

export default function SabantuyCollection() {
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setFullscreenPhoto(photo);
  };

  const closeFullscreen = () => {
    setFullscreenPhoto(null);
  };

  return (
    <div className={style.block__collection}>
      <h1 className={style.title__collection}>Коллекция Сабантуев</h1>
      <div className={style.gallery__video}>
        <video className={style.video} controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Link
          className={style.link__video}
          to="https://dzen.ru/video/watch/649984182c361c1c04c9b99a"
          target="_blank"
        >
          больше видео здесь
        </Link>
      </div>
      <div className={style.gallery__photo}>
        <div>
          <h2 className={style.suptitle__collection}>Фотогалерея</h2>
        </div>
        <div className={style.photos}>
          {collectionData.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.img}
              alt={`Sabantuy photo ${index + 1}`}
              className={style.photo}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>
        {fullscreenPhoto && (
          <div className={style.fullscreen__overlay} onClick={closeFullscreen}>
            <img
              src={fullscreenPhoto.img}
              alt="Fullscreen"
              className={style.fullscreen__photo}
            />
          </div>
        )}
      </div>
    </div>
  );
}
