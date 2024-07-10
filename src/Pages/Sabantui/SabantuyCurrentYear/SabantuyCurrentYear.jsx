import { useState } from "react";
import {Link} from "react-router-dom"
import currentData from "../../../Common/Sabantuy/sabantuyCurrent";
import style from "./SabantuyCurrentYear.module.scss";

export default function SabantuyCurrentYear() {
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setFullscreenPhoto(photo);
  };

  const closeFullscreen = () => {
    setFullscreenPhoto(null);
  };

  return (
    <div className={style.block__currentyear}>
      <div className={style.button__current}>
      <Link to="/sabantui" className={style.back__button__current}>назад</Link>
      </div>
      <h1 className={style.title__current}>Сабантуй 2024</h1>
      <div className={style.gallery__current}>
        {currentData.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.img}
            alt={`Sabantuy photo ${index + 1}`}
            className={style.photo__current}
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
  );
}
