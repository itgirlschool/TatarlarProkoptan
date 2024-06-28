import style from "./SabantuyCollection.module.scss";
import { Link } from "react-router-dom";
import video from "../../../../public/imgs/Sabantuy/Зимний Сабантуй в Прокопьевске -2023.mp4";
import stage from "../../../../public/imgs/Sabantuy/stage.jpg";
import open from "../../../../public/imgs/Sabantuy/open.jpg";

export default function SabantuyCollection() {
  return (
    <div className={style.block__collection}>
      <h1 className={style.title}>Коллекция Сабантуев</h1>
      <div className={style.gallery__video}>
        <video controls>
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
          <h2>Фотогалерея</h2>
        </div>
        <div>
          <img src={stage} alt="ava" className={style.photo} />
          <img src={open} alt="ava" className={style.photo} />
        </div>
      </div>
    </div>
  );
}
