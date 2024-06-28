import about from "../../../../public/imgs/Sabantuy/about.jpg";
import timeline from "../../../../public/imgs/Sabantuy/about.jpg";
import map from "../../../../public/imgs/Sabantuy/about.jpg";
import place from "../../../../public/imgs/Sabantuy/about.jpg";
import style from "./SabantuyCurrentYear.module.scss";

export default function SabantuyCurrentYear() {
  return (
    <div className={style.block__currentyear}>
      <h1>Сабантуй 2024</h1>
      <div className={style.gallery__current}>
        <img src={about} alt="anons" className={style.photo__current} />
        <img src={timeline} alt="anons" className={style.photo__current} />
        <img src={map} alt="anons" className={style.photo__current} />
        <img src={place} alt="anons" className={style.photo__current} />
      </div>
    </div>
  );
}
