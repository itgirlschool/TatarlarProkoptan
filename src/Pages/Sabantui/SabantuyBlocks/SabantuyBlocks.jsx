import { Link } from "react-router-dom";
import cover2 from "../../../assets/images/Sabantuy/original.svg";
import cover from "../../../assets/images/Sabantuy/original_no_text.svg";
import style from "./SabantuyBlocks.module.scss";

export default function SabantuyBlocks() {
  return (
    <div className={style.sabantuy__blocks}>
      <div className={style.card}>
        <Link to="/collection" className={style.card__link}>
          <img src={cover} alt="ava" className={style.cover__image} />
          <p className={style.card__title}>Коллекция Сабантуев</p>
        </Link>
      </div>
      <div className={style.card}>
        <Link to="/current" className={style.card__link}>
          <img src={cover2} alt="ava" className={style.cover__image} />
          <p className={style.card__title}>Сабантуй 2024</p>
        </Link>
      </div>
    </div>
  );
}
