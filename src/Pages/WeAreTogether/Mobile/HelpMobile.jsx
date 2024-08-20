import help from "../../../Common/WeAreTogether/help.json";
import { Carousel } from "antd";
import style from "../Mobile/Mobile.module.scss";
import { Link } from "react-router-dom";

export default function HelpMobile() {
  return (
    <article className={style.active__modal}>
      <Carousel className={style.carousel__modal} effect="fade" autoplay arrows>
        {help.map((item) => {
          return (
            <div key={item.id}>
              <Link to="/we-are-together" className={style.close__button}>
                Назад
              </Link>
              <div className={style.gallery__content}>
                <img
                  className={style.gallery__img}
                  src={item.img}
                  alt="фотографии помощи бойцам сво"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </article>
  );
}
