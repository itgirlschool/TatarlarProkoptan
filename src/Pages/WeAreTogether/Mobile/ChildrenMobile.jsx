import style from "./Mobile.module.scss";
import children from "../../../Common/WeAreTogether/children.json";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

export default function ChildrenMobile() {
  return (
    <article className={style.active__modal}>
      <Carousel className={style.carousel__modal} effect="fade" autoplay arrows>
        {children.map((item) => {
          return (
            <div className={style.wrapp} key={item.id}>
              <Link to="/we-are-together" className={style.close__button}>
                Назад
              </Link>
              <div className={style.gallery__content}>
                <img
                  className={style.gallery__img}
                  src={item.img}
                  alt="фотографии с нашей молодежью"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </article>
  );
}


