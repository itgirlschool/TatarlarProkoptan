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
          <span className={style.card__link_title}>Коллекция Сабантуев</span>
        </Link>
      </div>
      <div className={style.card}>
        <Link to="/current" className={style.card__link}>
          <img src={cover2} alt="ava" className={style.cover__image} />
          <span className={style.card__link_title}>Сабантуй 2024</span>
        </Link>
      </div>
    </div>
  );
}
