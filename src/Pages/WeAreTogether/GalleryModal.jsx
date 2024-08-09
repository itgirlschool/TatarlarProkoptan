import gallery from "../../Common/gallery.json";
import { Carousel } from "antd";
import style from "./GalleryModal.module.scss";

export default function GalleryModal({ active, setActive }) {
  return (
    <article className={active ? `${style.active}` : `${style.content__modal}`}>
      <Carousel className={style.carousel__modal} effect="fade" autoplay arrows>
        {gallery.map((item) => {
          return (
            <div key={item.id}>
              <button
                onClick={() => setActive(false)}
                className={style.close__button}
              >
                Назад
              </button>
              <h3 className={style.gallery__content}>
                <img
                  className={style.gallery__img}
                  src={item.img}
                  alt="фотографии людей"
                />
              </h3>
            </div>
          );
        })}
      </Carousel>
    </article>
  );
}
